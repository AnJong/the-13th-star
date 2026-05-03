/**
 * 텍스트 애니메이션 — 문맥별 변조 (v3)
 *
 * 핵심 원칙:
 * - 부모 <p>는 절대 opacity 0으로 두지 않는다 (텍스트는 항상 보임)
 * - 자식 .fx-w 단어 wrapper만 0으로 시작
 * - 키워드별로 다른 효과 (인물명 / 숫자 / 진실 / 감정)
 * - 마침표 후 호흡 정지
 * - 시점별 stagger 차별화
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
  // 인물명 — 살짝 글로우
  const NAMES = new Set([
    "소은", "도윤", "재석", "지은", "별이",
    "한지원", "박해원", "한이서",
    "하재석", "김지은", "하소은", "하도윤",
  ]);

  // 진실 어휘 — 글리치/줌
  const TRUTHS = new Set([
    "수확", "본대", "12개", "13번째",
    "광합성", "광영양", "군체",
    "익명", "신고",
    "사살", "제거",
    "분산", "비콘",
  ]);

  // 정적·감정 어휘 — 떨림
  const EMOTIONS = new Set([
    "쉑", "쉭쉭", "쉭",
    "비명", "굳었다", "굳음",
    "와", "어머",
  ]);

  // 숫자 + 단위 (정규식)
  const NUMBER_RE = /^\d+(\.\d+)?(개|번째|시|분|초|일|주|월|년|미터|m|cm|km|%|퍼센트|배|회)?$/;

  function classifyWord(word) {
    // 구두점 제거 후 매칭
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

  function endsWithPeriod(word) {
    return /[.!?]\s*$/.test(word);
  }

  // ==========================================================
  // 단어 split + 분류
  // ==========================================================
  function splitToWords(el) {
    if (el.dataset.splitDone === "true") return;
    const wrapper = document.createElement("div");
    wrapper.innerHTML = el.innerHTML;
    walkNodes(wrapper);
    el.innerHTML = wrapper.innerHTML;
    el.dataset.splitDone = "true";

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
            const cls = classifyWord(w);
            if (cls) span.classList.add(cls);
            if (endsWithPeriod(w)) span.classList.add("fx-w-pause");
            span.textContent = w;
            frag.appendChild(span);
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
  // Word Fade — stagger function with pause after period
  // ==========================================================
  function applyWordFade(container, opts = {}) {
    if (reduced) return;

    const baseStagger = opts.stagger ?? 0.012;
    const duration = opts.duration ?? 0.55;
    const pauseAfterPeriod = opts.pauseAfterPeriod ?? 0.18;

    const paragraphs = container.querySelectorAll("p");
    paragraphs.forEach((p) => splitToWords(p));

    if (!window.gsap) {
      container.querySelectorAll(".fx-w").forEach((w) => {
        w.style.opacity = "1";
      });
      return;
    }

    const wordsArr = Array.from(container.querySelectorAll(".fx-w"));
    if (wordsArr.length === 0) return;

    // stagger 함수: 각 단어의 시작 시간을 누적 계산 (마침표 후 정지)
    const startTimes = [];
    let acc = 0;
    wordsArr.forEach((w, i) => {
      startTimes[i] = acc;
      acc += baseStagger;
      if (w.classList.contains("fx-w-pause")) {
        acc += pauseAfterPeriod;
      }
      // 진실 단어는 *늦게* 등장 (드라마)
      if (w.classList.contains("kw-truth")) {
        // 추가 지연
        startTimes[i] += 0.05;
      }
    });

    gsap.fromTo(
      wordsArr,
      { opacity: 0, y: 8, filter: "blur(2px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration,
        ease: "power2.out",
        overwrite: "auto",
        stagger: (i) => startTimes[i],
      }
    );

    // 진실 단어 — 추가 효과 (스케일 펄스)
    const truthWords = container.querySelectorAll(".fx-w.kw-truth");
    if (truthWords.length > 0) {
      gsap.fromTo(
        truthWords,
        { scale: 1.2 },
        {
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.6)",
          stagger: 0.06,
          delay: 0.3,
          overwrite: "auto",
        }
      );
    }

    // 감정 단어 — 떨림
    const emotionWords = container.querySelectorAll(".fx-w.kw-emotion");
    emotionWords.forEach((w, i) => {
      gsap.fromTo(
        w,
        { x: -2, rotation: -1 },
        {
          x: 0,
          rotation: 0,
          duration: 0.3,
          ease: "elastic.out(1.6, 0.4)",
          delay: 0.4 + i * 0.05,
          overwrite: "auto",
        }
      );
    });
  }

  // ==========================================================
  // Typewriter — 추적팀 timestamp만
  // ==========================================================
  function applyTypewriter(el, opts = {}) {
    if (reduced) return;
    const speed = opts.speed ?? 25;
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
  // Glitch — 추적팀 본문 (텍스트는 항상 보임, 짧은 흔들림만)
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
  // Kinetic — <strong> 강조 (큰 펄스 + 글로우)
  // ==========================================================
  function applyKinetic(container) {
    if (reduced) return;
    if (!window.gsap) return;
    const strongs = container.querySelectorAll("strong");
    if (strongs.length === 0) return;

    const tl = gsap.timeline();
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
          scale: 1.08,
          opacity: 1,
          letterSpacing: "0em",
          filter: "blur(0px)",
          duration: 0.55,
          ease: "expo.out",
          overwrite: "auto",
        },
        i === 0 ? 0.5 : ">-0.3"
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

    // 비트 헤더
    const header = beatEl.querySelector(".beat-header");
    if (header && window.gsap && !reduced) {
      gsap.fromTo(
        header,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }

    // 가족 — 따뜻한 호흡
    const family = beatEl.querySelector(".col-family");
    if (family) {
      applyWordFade(family, {
        stagger: 0.014,
        duration: 0.6,
        pauseAfterPeriod: 0.2,
      });
    }

    // 외계인 — 가장 느림 (분석 보고)
    const alien = beatEl.querySelector(".col-alien");
    if (alien) {
      applyWordFade(alien, {
        stagger: 0.018,
        duration: 0.7,
        pauseAfterPeriod: 0.25,
      });
    }

    // 추적팀 — timestamp typewriter + 본문 glitch (빠른 콘솔 톤)
    const team = beatEl.querySelector(".col-team");
    if (team) {
      const timestamps = team.querySelectorAll(".timestamp");
      timestamps.forEach((ts) => {
        applyTypewriter(ts, { speed: 22 });
      });

      const teamPs = team.querySelectorAll("p");
      teamPs.forEach((p, i) => {
        setTimeout(() => {
          applyGlitch(p, { duration: 0.4 });
        }, 200 + i * 70);
      });
    }

    // Kinetic — <strong> 단어 (전 컬럼)
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
