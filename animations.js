/**
 * 텍스트 애니메이션 4종
 * - Typewriter: 한 글자씩 타이핑 (추적팀 timestamp)
 * - Word Fade: 단어별 페이드 인 (가족·외계인 본문 기본)
 * - Glitch: 글자 흔들림 (추적팀 콘솔 텍스트, 해독 순간)
 * - Kinetic: 강조 단어 키네틱 등장 (strong 태그)
 *
 * 모바일 우선. prefers-reduced-motion 존중.
 */
(function () {
  "use strict";

  const reduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // 단어 단위로 split (한국어 어절 기준)
  function splitToWords(el) {
    if (el.dataset.splitDone === "true") return;
    const text = el.innerHTML;
    // <em>, <strong>, <span> 같은 태그 보존하면서 텍스트 노드만 split
    const wrapper = document.createElement("div");
    wrapper.innerHTML = text;
    walkNodes(wrapper);
    el.innerHTML = wrapper.innerHTML;
    el.dataset.splitDone = "true";
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
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        walkNodes(child);
      }
    });
  }

  // ==========================================================
  // Word Fade (가족·외계인 기본)
  // ==========================================================
  function applyWordFade(container, opts = {}) {
    if (reduced) return;
    if (!window.gsap) return;
    const stagger = opts.stagger ?? 0.012;
    const duration = opts.duration ?? 0.55;

    const paragraphs = container.querySelectorAll("p");
    paragraphs.forEach((p) => splitToWords(p));

    const words = container.querySelectorAll(".fx-w");
    if (words.length === 0) return;

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
      }
    );
  }

  // ==========================================================
  // Typewriter (추적팀 timestamp)
  // ==========================================================
  function applyTypewriter(el, opts = {}) {
    if (reduced) {
      el.style.opacity = "1";
      return;
    }
    const speed = opts.speed ?? 30; // ms per char
    const original = el.textContent;
    el.textContent = "";
    el.style.opacity = "1";

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
  // Glitch (추적팀 콘솔 일부, 해독 순간)
  // ==========================================================
  function applyGlitch(el, opts = {}) {
    if (reduced) return;
    if (!window.gsap) return;
    const intensity = opts.intensity ?? 6;
    const duration = opts.duration ?? 0.4;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        x: () => (Math.random() - 0.5) * intensity * 2,
        skewX: () => (Math.random() - 0.5) * 4,
      },
      {
        opacity: 1,
        x: 0,
        skewX: 0,
        duration,
        ease: "steps(6)",
        onUpdate: function () {
          // 진행 중 미세한 흔들림 추가
          if (Math.random() > 0.85) {
            el.style.textShadow = `${Math.random() * 2 - 1}px 0 #a8d4f5, ${
              Math.random() * 2 - 1
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
  // Kinetic (strong 강조 단어)
  // ==========================================================
  function applyKinetic(container) {
    if (reduced) return;
    if (!window.gsap) return;
    const strongs = container.querySelectorAll("strong");
    if (strongs.length === 0) return;

    gsap.fromTo(
      strongs,
      {
        scale: 0.8,
        opacity: 0,
        letterSpacing: "0.2em",
      },
      {
        scale: 1,
        opacity: 1,
        letterSpacing: "0em",
        duration: 0.7,
        delay: 0.4,
        stagger: 0.15,
        ease: "back.out(1.4)",
      }
    );
  }

  // ==========================================================
  // 비트별 적용 (시점 컬럼에 따라 다른 애니메이션 모드)
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

    // 가족 — Word Fade (느린 호흡)
    const family = beatEl.querySelector(".col-family");
    if (family) {
      applyWordFade(family, { stagger: 0.014, duration: 0.6 });
    }

    // 외계인 — Word Fade (더 느리게, 분석 톤)
    const alien = beatEl.querySelector(".col-alien");
    if (alien) {
      applyWordFade(alien, { stagger: 0.016, duration: 0.65 });
    }

    // 추적팀 — timestamp는 Typewriter, 본문은 Glitch + Word Fade 혼합
    const team = beatEl.querySelector(".col-team");
    if (team) {
      const timestamps = team.querySelectorAll(".timestamp");
      timestamps.forEach((ts) => {
        // typewriter
        applyTypewriter(ts, { speed: 25 });
      });

      // 본문 — 약한 glitch
      const teamPs = team.querySelectorAll("p");
      teamPs.forEach((p, i) => {
        setTimeout(() => {
          applyGlitch(p, { intensity: 4, duration: 0.5 });
          // 그 후 word-fade로 본문 마무리 (글자 안정)
        }, 200 + i * 100);
      });
    }

    // Kinetic — strong 단어 (전 컬럼)
    applyKinetic(beatEl);
  }

  // ==========================================================
  // IntersectionObserver — 비트 진입 시 트리거
  // ==========================================================
  function setupObserver() {
    const beats = document.querySelectorAll(".beat");
    if (!("IntersectionObserver" in window)) {
      // fallback — 모두 즉시 표시
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
        threshold: 0.15,
      }
    );

    beats.forEach((b) => {
      // 초기 상태 — 가시성만 0으로
      if (!reduced) {
        b.querySelectorAll(".col-family p, .col-alien p, .col-team p").forEach(
          (p) => {
            p.style.opacity = "0";
          }
        );
        b.querySelectorAll(".timestamp").forEach((ts) => {
          ts.style.opacity = "0";
        });
      }
      observer.observe(b);
    });
  }

  // ==========================================================
  // 시작
  // ==========================================================
  function init() {
    // data.js 렌더링 후 호출되어야 함 — main.js의 setTimeout 또는 직접 호출
    setupObserver();
  }

  // 외부 노출
  window.STORY_ANIMATIONS = {
    init,
    animateBeat,
    applyWordFade,
    applyTypewriter,
    applyGlitch,
    applyKinetic,
  };
})();
