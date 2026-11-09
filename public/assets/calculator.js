/* AI Visibility Calculator (AI Authority Engine). Data comes from #calc-data. */
(() => {
  const root = document.getElementById("calc");
  const dataEl = document.getElementById("calc-data");
  if (!root || !dataEl) return;
  const D = JSON.parse(dataEl.textContent);
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const flat = D.sections.flatMap((s) => s.questions.map((q) => ({ ...q, section: s.label })));
  const state = { i: -1, answers: {}, unlocked: !D.webhook, result: null };

  /* ---------------- scoring */
  function countScale(n) { return n >= 5 ? 4 : n >= 3 ? 3 : n; }
  function raw(q) {
    const a = state.answers[q.id];
    if (q.type === "checkbox") {
      const picked = (a || []).filter((o) => o !== q.none);
      return countScale(picked.length);
    }
    return a === undefined ? 0 : q.options.indexOf(a);
  }
  function score() {
    const totals = {};
    for (const [id, d] of Object.entries(D.dimensions)) totals[id] = { ...d, id, earned: 0 };
    flat.filter((q) => q.dimension).forEach((q) => {
      totals[q.dimension].earned += (Math.min(4, Math.max(0, raw(q))) / 4) * q.weight;
    });
    Object.values(totals).forEach((t) => (t.pct = Math.round((t.earned / t.points) * 100)));
    const overall = Math.round(Object.values(totals).reduce((s, t) => s + t.earned, 0));
    let tier = [...D.tiers].reverse().find((t) => overall >= t.min);
    const gatesOk = D.gates.every((g) => totals[g].pct >= 70);
    if (tier.id === "recommended" && !gatesOk) tier = D.tiers.find((t) => t.id === "recognized");
    const selfQ = flat.find((q) => q.perception);
    const selfRank = selfQ ? selfQ.options.indexOf(state.answers[selfQ.id]) : -1;
    const calcRank = D.tiers.indexOf(tier);
    return { overall, totals, tier, gatesOk, selfRank, calcRank, selfLabel: selfQ && state.answers[selfQ.id] };
  }

  /* ---------------- screens */
  function intro() {
    const scored = flat.filter((q) => q.dimension).length;
    root.innerHTML = `<div class="calc-card calc-intro">
      <p class="eyebrow">AI Visibility Calculator</p>
      <h2>Will AI recommend your business?</h2>
      <p>${scored} quick questions covering all 8 spokes of the AI Authority Wheel, scored in five areas. About 4 minutes. Get your score, your tier, and the fixes that matter most.</p>
      <ul class="calc-dims">${Object.values(D.dimensions).map((d) => `<li><b>${esc(d.label)}</b><span>${d.points} pts</span>${d.wheel ? `<small>${esc(d.wheel)}</small>` : ""}</li>`).join("")}</ul>
      <button class="btn btn-lg btn-glow" data-start>Start the calculator</button>
    </div>`;
    root.querySelector("[data-start]").onclick = () => go(0);
  }

  function question() {
    const q = flat[state.i];
    const a = state.answers[q.id];
    const pct = Math.round((state.i / flat.length) * 100);
    const multi = q.type === "checkbox";
    root.innerHTML = `<div class="calc-card">
      <div class="calc-top">
        <span class="calc-section">${esc(q.section)}</span>
        <span class="calc-count">Question ${state.i + 1} of ${flat.length}</span>
      </div>
      <div class="calc-progress"><span style="width:${pct}%"></span></div>
      <h2 class="calc-q">${esc(q.title)}</h2>
      ${q.helper ? `<p class="calc-helper">${esc(q.helper)}</p>` : ""}
      <div class="calc-opts" role="${multi ? "group" : "radiogroup"}">
        ${q.options
          .map((o) => {
            const on = multi ? (a || []).includes(o) : a === o;
            return `<button type="button" class="calc-opt${on ? " on" : ""}" role="${multi ? "checkbox" : "radio"}" aria-checked="${on}" data-opt="${esc(o)}"><i></i><span>${esc(o)}</span></button>`;
          })
          .join("")}
      </div>
      <div class="calc-nav">
        <button type="button" class="btn btn-ghost" data-back ${state.i === 0 ? "disabled" : ""}>Back</button>
        <button type="button" class="btn btn-glow" data-next ${valid(q) ? "" : "disabled"}>${state.i === flat.length - 1 ? "See my score" : "Next"}</button>
      </div>
    </div>`;
    root.querySelectorAll("[data-opt]").forEach((b) =>
      b.addEventListener("click", () => {
        const o = b.dataset.opt;
        if (multi) {
          let cur = state.answers[q.id] || [];
          if (o === q.none) cur = cur.includes(o) ? [] : [o];
          else cur = cur.includes(o) ? cur.filter((x) => x !== o) : [...cur.filter((x) => x !== q.none), o];
          state.answers[q.id] = cur;
          question();
        } else {
          state.answers[q.id] = o;
          question();
          setTimeout(() => go(state.i + 1), reduce ? 0 : 260);
        }
      })
    );
    root.querySelector("[data-back]").onclick = () => go(state.i - 1);
    root.querySelector("[data-next]").onclick = () => valid(q) && go(state.i + 1);
  }

  function valid(q) {
    const a = state.answers[q.id];
    return q.type === "checkbox" ? Array.isArray(a) && a.length > 0 : a !== undefined;
  }

  function go(i) {
    if (i < 0) return;
    if (i >= flat.length) return showResult();
    state.i = i;
    question();
    root.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }

  /* ---------------- results */
  function ring(score) {
    return `<div class="score-ring calc-ring"><svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="52" class="track"/><circle cx="60" cy="60" r="52" class="bar"/></svg><div><b data-num>0</b><span>/100</span></div></div>`;
  }
  function animate(score) {
    const bar = root.querySelector(".calc-ring .bar"), num = root.querySelector("[data-num]");
    requestAnimationFrame(() => requestAnimationFrame(() => (bar.style.strokeDashoffset = 327 - (327 * score) / 100)));
    if (reduce) return (num.textContent = score);
    const t0 = performance.now();
    const f = (t) => { const p = Math.min((t - t0) / 1400, 1); num.textContent = Math.round(score * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); };
    requestAnimationFrame(f);
  }

  function showResult() {
    const r = (state.result = score());
    root.innerHTML = `<div class="calc-card calc-result">
      <div class="calc-headline">
        ${ring(r.overall)}
        <div>
          <p class="eyebrow">Your AI visibility tier</p>
          <h2>${esc(r.tier.label)}</h2>
          <p>${esc(r.tier.text)}</p>
        </div>
      </div>
      <div data-report></div>
    </div>`;
    animate(r.overall);
    state.unlocked ? report() : gate();
    root.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }

  function gate() {
    const box = root.querySelector("[data-report]");
    box.innerHTML = `<form class="calc-gate" novalidate>
      <h3>Unlock your full AI Visibility Report</h3>
      <p>See your score for each dimension, your perception gap, and your top three fixes. We'll also email you a copy.</p>
      <div class="calc-fields">
        <label><span>First name</span><input name="firstName" required autocomplete="given-name"></label>
        <label><span>Email</span><input name="email" type="email" required autocomplete="email"></label>
        <label><span>Business name</span><input name="business" required autocomplete="organization"></label>
        <label><span>Website <em>(optional)</em></span><input name="website" type="url" placeholder="https://" autocomplete="url"></label>
      </div>
      <label class="calc-consent"><input type="checkbox" name="consent" required> Email me my report and occasional AI visibility tips from AI Authority Engine. Unsubscribe anytime.</label>
      <p class="calc-err" hidden></p>
      <button class="btn btn-lg btn-glow" type="submit">Show my full report</button>
      <p class="calc-privacy">See our <a href="/privacy/">privacy policy</a>.</p>
    </form>`;
    const form = box.querySelector("form");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const f = Object.fromEntries(new FormData(form));
      const err = form.querySelector(".calc-err");
      if (!f.firstName || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email || "") || !f.business || !f.consent) {
        err.hidden = false;
        err.textContent = "Please add your first name, a valid email, your business name, and tick the consent box.";
        return;
      }
      const r = state.result;
      // Flat fields map cleanly in GoHighLevel's inbound webhook.
      const t = r.totals;
      const fixes = Object.values(t).sort((a, b) => a.pct - b.pct).slice(0, 3);
      const payload = {
        source: "ai-visibility-calculator",
        firstName: f.firstName, email: f.email, business: f.business, website: f.website || "",
        consent: "yes",
        role: state.answers.role || "", businessType: state.answers.business_type || "", companySize: state.answers.size || "",
        score: r.overall, tier: r.tier.label, tierDescription: r.tier.text,
        entityScore: t.entity.pct, contentScore: t.content.pct, technicalScore: t.technical.pct,
        authorityScore: t.authority.pct, engagementScore: t.engagement.pct,
        selfAssessment: r.selfLabel || "",
        topFix1: `${fixes[0].label} (${fixes[0].pct}%): ${fixes[0].fix}`,
        topFix2: `${fixes[1].label} (${fixes[1].pct}%): ${fixes[1].fix}`,
        topFix3: `${fixes[2].label} (${fixes[2].pct}%): ${fixes[2].fix}`,
        page: location.href, submittedAt: new Date().toISOString(),
      };
      const btn = form.querySelector("button[type=submit]");
      btn.disabled = true; btn.textContent = "Preparing your report…";
      try {
        await fetch(D.webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload), keepalive: true });
      } catch (_) { /* still show the report */ }
      state.unlocked = true;
      report();
    });
  }

  function report() {
    const r = state.result;
    const box = root.querySelector("[data-report]");
    const dims = Object.values(r.totals);
    const weakest = [...dims].sort((a, b) => a.pct - b.pct).slice(0, 3);
    const gap = r.selfRank - r.calcRank;
    const gapText =
      r.selfRank < 0 ? "" :
      gap > 0 ? `You rated your business as <b>${esc(r.selfLabel)}</b>, but your answers place it in the <b>${esc(r.tier.label)}</b> tier. That's a common gap: many businesses assume AI knows them better than it does. Check by asking ChatGPT for the best provider of what you offer.` :
      gap < 0 ? `You rated your business as <b>${esc(r.selfLabel)}</b>, but your answers place it in the <b>${esc(r.tier.label)}</b> tier. Your foundations are stronger than you think. Now make sure AI assistants actually reflect them.` :
      `You rated your business as <b>${esc(r.selfLabel)}</b>, which matches your calculated tier. You have an accurate read on where you stand.`;
    const role = state.answers.role || "";
    const builder = /marketer|agency|consultant/i.test(role);
    box.innerHTML = `<div class="calc-report">
      <h3>Your AI Authority Wheel profile</h3>
      <div class="calc-bars">
        ${dims.map((d) => `<div class="calc-bar"><div class="calc-bar-top"><b>${esc(d.label)}</b><span>${d.pct}%</span></div><div class="calc-track"><span style="width:${d.pct}%" class="${d.pct >= 70 ? "hi" : d.pct >= 40 ? "mid" : "lo"}"></span></div><small>${esc(d.wheel)}</small></div>`).join("")}
      </div>
      ${gapText ? `<div class="calc-gap"><h4>Perception gap</h4><p>${gapText}</p></div>` : ""}
      <h3>Your top three fixes</h3>
      <ol class="steps">${weakest.map((d) => `<li><h3>${esc(d.label)} (${d.pct}%)</h3><p>${esc(d.fix)}</p></li>`).join("")}</ol>
      ${!r.gatesOk && r.overall >= 80 ? `<p class="calc-note">Your total reached the Recommended range, but Entity Clarity, Authority &amp; Reputation, and AI Visibility &amp; Engagement each need 70% or more to get there.</p>` : ""}
      <div class="calc-cta">
        ${builder
          ? `<h3>Want to fix gaps like these for clients?</h3><p>The AI Authority Engine certification teaches every part of the AI Authority Wheel, with weekly hot-seat coaching, one-on-one help winning clients, and white-label fulfillment from Yroc Consulting.</p><div class="calc-cta-btns"><a class="btn btn-glow" href="/ai-seo-certification/">Explore the certification</a><a class="btn btn-ghost" href="/is-ai-authority-engine-worth-it/">See student results</a></div>`
          : `<h3>Want help closing these gaps?</h3><p>Work with a Certified AI Authority Specialist, or talk to the team at Yroc Consulting about getting your business recommended by AI.</p><div class="calc-cta-btns"><a class="btn btn-glow" href="mailto:${esc(D.contactEmail)}?subject=${encodeURIComponent("My AI visibility score: " + r.overall + "/100")}">Talk to our team</a><a class="btn btn-ghost" href="/certified/">Find a Certified Specialist</a></div>`}
      </div>
      <button type="button" class="btn btn-sm btn-ghost calc-retake" data-retake>Retake the calculator</button>
    </div>`;
    box.querySelector("[data-retake]").onclick = () => { state.answers = {}; state.unlocked = !D.webhook; intro(); root.scrollIntoView({ behavior: reduce ? "auto" : "smooth" }); };
  }

  intro();
})();
