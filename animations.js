/**
 * 텍스트 애니메이션 — 본문 정적 + 강조만 변조 (v4)
 *
 * 변경:
 * - 본문 단어는 *페이드 없이* 즉시 보임 (단조로운 주르륵 페이드 제거)
 * - 키워드 분류된 단어만 등장 효과 (진실 / 숫자 / 감정 / 인물명)
 * - <strong> 키네틱 펄스
 * - 추적팀 timestamp만 typewriter
 * - 추적팀 본문은 짧은 흔들림 (텍스트는 항상 보임)
 *
 * 영화의 *클로즈업* 톤 — 화면은 정적인데, 한 단어가 시선을 끈다.
 *
 * 모바일 우선. prefers-reduced-motion 존중.
 */
(function () {
  "use strict";

  const reduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // ==========================================================
  // 키워드 분류
  // ==========================================================
  const NAMES = new Set([
    "소은", "도윤", "재석", "지은", "별이",
    "한지원", "박해원", "한이서",
    "하재석", "김지은", "하소은", "하도윤",
  ]);

  const TRUTHS = new Set([
    "수확", "본대", "12개", "13번째",
    "광합성", "광영양", "군체",
    "익명", "신고",
    "사살", "제거",
    "분산", "비콘", "송신",
  ]);

  const EMOTIONS = new Set([
    "쉑", "쉭쉭", "쉭",
    "비명", "굳었다", "굳음",
    "와", "어머",
  ]);

  const NUMBER_RE = /^\d+(\.\d+)?(개|번째|시|분|초|일|주|월|년|미터|m|cm|km|%|퍼센트|배|회|MHz|메가헤르츠)?$/;

  function classifyWord(word) {
    const stripped = word
      .replace(/[.,!?'""()…—\-:;‘’“”]/g, "")
      .trim();
    if (!stripped) return null;
    if (NAMES.has(stripped)) return "kw-name";
    if (TRUTHS.has(stripped)) return "kw-truth";
    if (EMOTIONS.has(stripped)) return "kw-emotion";
    if (NUMBER_RE.test(stripped)) return "kw-number";
    return null;
  }

  // ==========================================================
  // 단어 split + 분류 (본문은 페이드 없이 즉시 보임)
  // ==========================================================
  function splitToWords(el) {
    if (el.dataset.splitDone === "true") return;
    const wrapper = document.createElement("div");
    wrapper.innerHTML = el.innerHTML;
    walkNodes(wrapper);
    el.innerHTML = wrapper.innerHTML;
    el.dataset.splitDone = "true";
    // 기본 .fx-w는 opacity 1 (즉시 보임). 키워드 단어만 GSAP fromTo로 등장.
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
            const cls = classifyWord(w);
            if (cls) {
              const span = document.createElement("span");
              span.className = "fx-w " + cls;
              span.textContent = w;
              frag.appendChild(span);
            } else {
              // 일반 단어는 span 없이 그대로 (DOM 가볍게)
              frag.appendChild(document.createTextNode(w));
            }
          }
        });
        child.parentNode.replaceChild(frag, child);
      } else if (
        child.nodeType === Node.ELEMENT_NODE &&
        !child.classList?.contains("timestamp")
      ) {
        walkNodes(child);
      }
    });
  }

  // ==========================================================
  // Contextual Fx — 키워드별 등장 효과
  // ==========================================================
  function applyContextualFx(container) {
    if (reduced) return;

    const paragraphs = container.querySelectorAll("p");
    paragraphs.forEach((p) => splitToWords(p));

    if (!window.gsap) return;

    // 진실 단어 — 글리치 + 늦은 등장 (드라마)
    const truths = container.querySelectorAll(".fx-w.kw-truth");
    if (truths.length > 0) {
      gsap.fromTo(
        truths,
        {
          opacity: 0,
          scale: 0.7,
          filter: "blur(4px)",
          textShadow: "0 0 0 transparent",
        },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          textShadow: "0 0 14px rgba(245, 217, 156, 0.6)",
          duration: 0.7,
          ease: "back.out(1.6)",
          stagger: 0.12,
          delay: 0.4,
          overwrite: "auto",
        }
      );
    }

    // 숫자 — 키네틱 줌
    const numbers = container.querySelectorAll(".fx-w.kw-number");
    if (numbers.length > 0) {
      gsap.fromTo(
        numbers,
        { scale: 1.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.55,
          ease: "back.out(2)",
          stagger: 0.08,
          delay: 0.5,
          overwrite: "auto",
        }
      );
    }

    // 감정 단어 — 떨림
    const emotions = container.querySelectorAll(".fx-w.kw-emotion");
    emotions.forEach((w, i) => {
      gsap.fromTo(
        w,
        { x: -3, rotation: -2, opacity: 0 },
        {
          x: 0,
          rotation: 0,
          opacity: 1,
          duration: 0.45,
          ease: "elastic.out(1.4, 0.4)",
          delay: 0.35 + i * 0.06,
          overwrite: "auto",
        }
      );
    });

    // 인물명 — 글로우 펄스
    const names = container.querySelectorAll(".fx-w.kw-name");
    if (names.length > 0) {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo(
        names,
        { opacity: 0.6 },
        {
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
          overwrite: "auto",
        }
      );
    }
  }

  // ==========================================================
  // Typewriter — 추적팀 timestamp
  // ==========================================================
  function applyTypewriter(el, opts = {}) {
    if (reduced) return;
    const speed = opts.speed ?? 22;
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
  // Glitch — 추적팀 본문 (텍스트는 항상 보임)
  // ==========================================================
  function applyGlitch(el, opts = {}) {
    if (reduced) return;
    if (!window.gsap) return;
    const duration = opts.duration ?? 0.35;

    gsap.fromTo(
      el,
      { x: -2, skewX: 1 },
      {
        x: 0,
        skewX: 0,
        duration,
        ease: "steps(5)",
        onUpdate: function () {
          if (Math.random() > 0.75) {
            el.style.textShadow = `${Math.random() * 1.2 - 0.6}px 0 #a8d4f5, ${
              Math.random() * 1.2 - 0.6
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
  // Kinetic — <strong> (큰 펄스 + 글로우)
  // ==========================================================
  function applyKinetic(container) {
    if (reduced) return;
    if (!window.gsap) return;
    const strongs = container.querySelectorAll("strong");
    if (strongs.length === 0) return;

    const tl = gsap.timeline({ delay: 0.5 });
    strongs.forEach((s, i) => {
      tl.fromTo(
        s,
        {
          scale: 0.6,
          opacity: 0,
          letterSpacing: "0.4em",
          filter: "blur(3px)",
        },
        {
          scale: 1.1,
          opacity: 1,
          letterSpacing: "0em",
          filter: "blur(0px)",
          duration: 0.6,
          ease: "expo.out",
          overwrite: "auto",
        },
        i === 0 ? 0 : ">-0.35"
      ).to(
        s,
        {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        ">"
      );
    });
  }

  // ==========================================================
  // 비트별 적용
  // ==========================================================
  function animateBeat(beatEl) {
    if (beatEl.dataset.animated === "true") return;
    beatEl.dataset.animated = "true";

    // 비트 헤더 — 짧게 슬라이드 인
    const header = beatEl.querySelector(".beat-header");
    if (header && window.gsap && !reduced) {
      gsap.fromTo(
        header,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }

    // 가족·외계인 — 키워드 효과만
    const family = beatEl.querySelector(".col-family");
    if (family) applyContextualFx(family);

    const alien = beatEl.querySelector(".col-alien");
    if (alien) applyContextualFx(alien);

    // 추적팀 — timestamp typewriter + 키워드 효과 + 본문 짧은 글리치
    const team = beatEl.querySelector(".col-team");
    if (team) {
      const timestamps = team.querySelectorAll(".timestamp");
      timestamps.forEach((ts) => applyTypewriter(ts, { speed: 22 }));

      applyContextualFx(team);

      const teamPs = team.querySelectorAll("p");
      teamPs.forEach((p, i) => {
        setTimeout(() => applyGlitch(p, { duration: 0.4 }), 200 + i * 60);
      });
    }

    // Kinetic — <strong> 단어
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
    applyContextualFx,
    applyTypewriter,
    applyGlitch,
    applyKinetic,
  };
})();
