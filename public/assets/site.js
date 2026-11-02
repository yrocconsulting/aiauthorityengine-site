/* AI Authority Engine: progressive enhancements. All content works without JS. */
(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- Mobile nav */
  const toggle = $(".nav-toggle");
  const nav = $("#main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", open);
      nav.classList.toggle("open", open);
    });
  }

  /* ---------- Reveal on scroll */
  const reveals = $$(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min((i % 4) * 70, 210)}ms`;
      io.observe(el);
    });
  } else reveals.forEach((el) => el.classList.add("in"));

  /* ---------- 3D tilt */
  if (!reduce && matchMedia("(hover: hover)").matches) {
    $$(".tilt").forEach((el) => {
      const zone = el.closest(".hero, section") || el;
      zone.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2);
        const y = (e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2);
        el.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 10}deg)`;
      });
      zone.addEventListener("pointerleave", () => (el.style.transform = ""));
    });
  }

  /* ---------- Hero network (entity graph) */
  const canvas = $(".hero-net");
  if (canvas && !reduce) {
    const ctx = canvas.getContext("2d");
    let w, h, dpr, nodes = [], mouse = { x: -999, y: -999 }, running = true;
    const resize = () => {
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(90, (w * h) / 14000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.6, hub: Math.random() < 0.08,
      }));
    };
    const step = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        const dx = n.x - mouse.x, dy = n.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 140) { n.x += dx / d * 0.6; n.y += dy / d * 0.6; }
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            ctx.strokeStyle = `rgba(63,170,255,${(1 - d / 130) * 0.28})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.hub ? n.r + 2 : n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.hub ? "rgba(127,227,255,.95)" : "rgba(120,180,255,.7)";
        ctx.shadowColor = "rgba(63,208,255,.9)";
        ctx.shadowBlur = n.hub ? 14 : 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      requestAnimationFrame(step);
    };
    resize();
    addEventListener("resize", resize);
    canvas.parentElement.addEventListener("pointermove", (e) => {
      const r = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - r.left, y: e.clientY - r.top };
    });
    new IntersectionObserver(([e]) => {
      const was = running; running = e.isIntersecting;
      if (running && !was) requestAnimationFrame(step);
    }).observe(canvas);
    requestAnimationFrame(step);
  }

  /* ---------- AI answer simulator */
  $$("[data-sim]").forEach((sim) => {
    const buttons = $$(".sim-toggle button", sim);
    const panels = { before: $('[data-panel="before"]', sim), after: $('[data-panel="after"]', sim) };
    const typed = $("[data-typed]", sim);
    const text = typed.textContent;
    let userTouched = false, timers = [];
    const show = (state) => {
      buttons.forEach((b) => b.setAttribute("aria-selected", b.dataset.state === state));
      for (const [k, p] of Object.entries(panels)) {
        p.hidden = k !== state;
        if (k === state && !reduce) { p.classList.remove("fade-in"); void p.offsetWidth; p.classList.add("fade-in"); }
      }
    };
    buttons.forEach((b) => b.addEventListener("click", () => { userTouched = true; timers.forEach(clearTimeout); show(b.dataset.state); }));
    if (reduce) return;
    const play = () => {
      typed.textContent = ""; typed.classList.add("caret");
      panels.before.hidden = panels.after.hidden = true;
      let i = 0;
      const tick = () => {
        typed.textContent = text.slice(0, ++i);
        if (i < text.length) timers.push(setTimeout(tick, 32));
        else {
          typed.classList.remove("caret");
          timers.push(setTimeout(() => show("before"), 450));
          timers.push(setTimeout(() => { if (!userTouched) show("after"); }, 4200));
        }
      };
      tick();
    };
    new IntersectionObserver(([e], o) => { if (e.isIntersecting) { play(); o.disconnect(); } }, { threshold: 0.4 }).observe(sim);
  });

  /* ---------- AI visibility quiz */
  $$("[data-quiz]").forEach((quiz) => {
    const form = $(".quiz-form", quiz);
    const qs = $$(".quiz-q", quiz);
    const bar = $(".quiz-progress span", quiz);
    const result = $(".quiz-result", quiz);
    const update = () => {
      const done = qs.filter((q) => $("input:checked", q));
      qs.forEach((q) => q.classList.toggle("done", !!$("input:checked", q)));
      bar.style.width = `${(done.length / qs.length) * 100}%`;
    };
    form.addEventListener("change", (e) => {
      update();
      const q = e.target.closest(".quiz-q");
      const next = qs[qs.indexOf(q) + 1];
      if (next && !$("input:checked", next) && innerWidth < 900) next.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    });
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let total = 0; const gaps = [];
      qs.forEach((q) => {
        const v = +($("input:checked", q)?.value || 0);
        total += v;
        if (v < 2) gaps.push({ v, tip: q.dataset.tip });
      });
      const score = Math.round((total / (qs.length * 2)) * 100);
      const tier =
        score >= 75 ? ["AI-ready", "Strong foundations. A business like this is well positioned to be recommended by AI assistants. Keep strengthening authority and measuring results."]
        : score >= 45 ? ["Partially visible", "AI systems can find pieces of this business, but gaps make it hard for them to recommend it with confidence."]
        : ["Invisible to AI", "Right now, AI assistants likely can't identify or trust this business enough to recommend it. The good news: every gap is fixable."];
      $("[data-tier]", result).textContent = tier[0];
      $("[data-summary]", result).textContent = tier[1];
      const list = $("[data-tips]", result);
      list.innerHTML = "";
      gaps.sort((a, b) => a.v - b.v).slice(0, 3).forEach((g) => {
        const li = document.createElement("li"); li.textContent = g.tip; list.appendChild(li);
      });
      if (!gaps.length) list.innerHTML = "<li>No major gaps. Focus on earning more independent mentions and tracking AI answers monthly.</li>";
      form.hidden = true; result.hidden = false;
      const ring = $(".bar", result), num = $("[data-score]", result);
      ring.style.strokeDashoffset = 327;
      requestAnimationFrame(() => requestAnimationFrame(() => (ring.style.strokeDashoffset = 327 - (327 * score) / 100)));
      if (reduce) num.textContent = score;
      else {
        const t0 = performance.now();
        const count = (t) => { const p = Math.min((t - t0) / 1400, 1); num.textContent = Math.round(score * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(count); };
        requestAnimationFrame(count);
      }
      result.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    });
    $("[data-retake]", quiz).addEventListener("click", () => {
      form.reset(); update(); result.hidden = true; form.hidden = false;
      quiz.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    });
  });
})();
