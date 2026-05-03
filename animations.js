/**
 * 텍스트 애니메이션 4종 (수정판)
 * - Typewriter: 한 글자씩 타이핑 (추적팀 timestamp만)
 * - Word Fade: 단어별 페이드 인 (가족·외계인 본문)
 * - Glitch: 짧은 흔들림 (추적팀 콘솔 — 텍스트 자체는 항상 보임)
 * - Kinetic: 강조 단어 키네틱 등장 (strong 태그)
 *
 * 핵심 원칙: 부모 <p>의 opacity는 절대 0으로 두지 않는다.
 * 자식 .fx-w (단어 wrapper)만 0으로 시작하고 페이드인.
 * → GSAP 로드 실패해도 텍스트는 항상 보임.
 *
 * 모바일 우선. prefers-reduced-motion 존중.
 */
(function () {
  "use strict";

  const reduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // ==========================================================
  // 단어 단위 split (한국어 어절 기준)
  // ==========================================================
  function splitToWords(el) {
    if (el.dataset.splitDone === "true") return;
    const text = el.innerHTML;
    const wrapper = document.createElement("div");
    wrapper.innerHTML = text;
    walkNodes(wrapper);
    el.innerHTML = wrapper.innerHTML;
    el.dataset.splitDone = "true";

    // split 직후 모든 .fx-w를 0으로 (다음 페이드인용)
    if (!reduced && window.gsap) {
      el.querySelectorAll(".fx-w").forEach((w) => {
        w.style.opacity = "0";
      });
    }
  }

  function walkNodes(node) {
    const children = Array.from(node.childNodes);
    children.forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const words = child.textContent.split(/(\s+)/);
        const frag = document.createDocumentFragment();
        words.forEach((w) => {
          if (w.trim() === "") {
            frag.appendChild(document.createTextNode(w));
          } else {
            const span = document.createElement("span");
            span.className = "fx-w";
            span.textContent = w;
            frag.appendChild(span);
          }
        });
        child.parentNode.replaceChild(frag, child);
      } else if (
        child.nodeType === Node.ELEMENT_NODE &&
        // timestamp 안의 텍스트는 split하지 않음 (typewriter가 따로 처리)
        !child.classList?.contains("timestamp")
      ) {
        walkNodes(child);
      }
    });
  }

  // ==========================================================
  // Word Fade (가족·외계인 본문)
  // ==========================================================
  function applyWordFade(container, opts = {}) {
    if (reduced) return;

    const stagger = opts.stagger ?? 0.012;
    const duration = opts.duration ?? 0.55;

    const paragraphs = container.querySelectorAll("p");
    paragraphs.forEach((p) => splitToWords(p));

    if (!window.gsap) {
      // Fallback: 그냥 보이게
      container.querySelectorAll(".fx-w").forEach((w) => {
        w.style.opacity = "1";
      });
      return;
    }

    const words = container.querySelectorAll(".fx-w");
    if (words.length === 0) return;

    gsap.to(words, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration,
      stagger,
      ease: "power2.out",
      // from을 명시적으로 설정 (이미 inline style로 0이지만 transform 추가)
      onStart: () => {
        words.forEach((w) => {
          w.style.transform = "translateY(8px)";
          w.style.filter = "blur(2px)";
        });
        // 다음 프레임에 transform 제거 (애니메이션 시작점)
      },
    });
    // 더 안전하게 fromTo로 명시
    gsap.fromTo(
      words,
      { opacity: 0, y: 8, filter: "blur(2px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration,
        stagger,
        ease: "power2.out",
        overwrite: "auto",
      }
    );
  }

  // ==========================================================
  // Typewriter (추적팀 timestamp만)
  // ==========================================================
  function applyTypewriter(el, opts = {}) {
    if (reduced) {
      // reduced motion — 그대로 표시
      return;
    }
    const speed = opts.speed ?? 30; // ms per char
    const original = el.dataset.original || el.textContent;
    el.dataset.original = original;
    el.textContent = "";

    let i = 0;
    const tick = () => {
      if (i < original.length) {
        el.textContent += original[i];
        i++;
        setTimeout(tick, speed);
      }
    };
    tick();
  }

  // ==========================================================
  // Glitch (추적팀 콘솔 — 텍스트 자체는 항상 보임, 짧은 흔들림만)
  // ==========================================================
  function applyGlitch(el, opts = {}) {
    if (reduced) return;
    if (!window.gsap) return;
    const duration = opts.duration ?? 0.35;

    // 부모는 항상 opacity 1. transform/text-shadow만 흔들기.
    gsap.fromTo(
      el,
      { x: -3, skewX: 1.5 },
      {
        x: 0,
        skewX: 0,
        duration,
        ease: "steps(5)",
        onUpdate: function () {
          if (Math.random() > 0.7) {
            el.style.textShadow = `${Math.random() * 1.5 - 0.75}px 0 #a8d4f5, ${
              Math.random() * 1.5 - 0.75
            }px 0 #f5d99c`;
          } else {
            el.style.textShadow = "none";
          }
        },
        onComplete: () => {
          el.style.textShadow = "none";
        },
      }
    );
  }

  // ==========================================================
  // Kinetic (strong 강조)
  // ==========================================================
  function applyKinetic(container) {
    if (reduced) return;
    if (!window.gsap) return;
    const strongs = container.querySelectorAll("strong");
    if (strongs.length === 0) return;

    gsap.fromTo(
      strongs,
      { scale: 0.85, opacity: 0.4, letterSpacing: "0.15em" },
      {
        scale: 1,
        opacity: 1,
        letterSpacing: "0em",
        duration: 0.6,
        delay: 0.4,
        stagger: 0.12,
        ease: "back.out(1.4)",
        overwrite: "auto",
      }
    );
  }

  // ==========================================================
  // 비트별 적용
  // ==========================================================
  function animateBeat(beatEl) {
    if (beatEl.dataset.animated === "true") return;
    beatEl.dataset.animated = "true";

    // 비트 헤더
    const header = beatEl.querySelector(".beat-header");
    if (header && window.gsap && !reduced) {
      gsap.fromTo(
        header,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }

    // 가족 — Word Fade
    const family = beatEl.querySelector(".col-family");
    if (family) {
      applyWordFade(family, { stagger: 0.014, duration: 0.6 });
    }

    // 외계인 — Word Fade (느리게)
    const alien = beatEl.querySelector(".col-alien");
    if (alien) {
      applyWordFade(alien, { stagger: 0.016, duration: 0.65 });
    }

    // 추적팀 — timestamp는 Typewriter, 본문은 Glitch (짧은 흔들림)
    const team = beatEl.querySelector(".col-team");
    if (team) {
      const timestamps = team.querySelectorAll(".timestamp");
      timestamps.forEach((ts) => {
        applyTypewriter(ts, { speed: 25 });
      });

      const teamPs = team.querySelectorAll("p");
      teamPs.forEach((p, i) => {
        setTimeout(() => {
          applyGlitch(p, { duration: 0.4 });
        }, 200 + i * 80);
      });
    }

    // Kinetic — strong 단어
    applyKinetic(beatEl);
  }

  // ==========================================================
  // IntersectionObserver
  // ==========================================================
  function setupObserver() {
    const beats = document.querySelectorAll(".beat");

    if (!("IntersectionObserver" in window)) {
      beats.forEach((b) => animateBeat(b));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateBeat(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.1,
      }
    );

    beats.forEach((b) => observer.observe(b));
  }

  function init() {
    setupObserver();
  }

  window.STORY_ANIMATIONS = {
    init,
    animateBeat,
    applyWordFade,
    applyTypewriter,
    applyGlitch,
    applyKinetic,
  };
})();
