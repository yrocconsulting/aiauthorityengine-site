const { faqHtml, cta, site } = require("../layout");
const wheel = require("../data/wheel");

const list = wheel.spokes.map((s) => s.name).join(", ");

const faqs = [
  ["What is the AI Authority Wheel?", `The AI Authority Wheel is the framework AI Authority Engine uses to teach how AI decides which businesses get chosen. At its center is the entity (who you are, what you do, who you serve, and where you are), surrounded by eight authority factors: ${list}.`],
  ["Who created the AI Authority Wheel?", "The AI Authority Wheel is taught by Cory Long in the AI Authority Engine certification program, a program of Yroc Consulting."],
  ["Why is the entity at the center of the wheel?", "AI systems can only recommend a business they can confidently identify. A clear, consistent entity definition is what every other signal attaches to."],
  ["How is the AI Authority Wheel used in training?", "Students work through each part of the wheel for their own business or their clients', with one-on-one help from Cory Long and support from the Yroc Consulting team, and use it to diagnose why a business is or isn't being recommended."],
];

module.exports = {
  path: "/ai-authority-wheel/",
  title: "The AI Authority Wheel: How AI Decides Who Gets Chosen",
  description: `The AI Authority Wheel is AI Authority Engine's framework for how AI chooses which businesses to recommend: the entity at the center, plus ${list}.`,
  h1: wheel.name,
  crumb: "AI Authority Wheel",
  type: "Article",
  faqs,
  schema: [
    {
      "@type": "DefinedTermSet",
      "@id": site.url + "/ai-authority-wheel/#wheel",
      name: wheel.name,
      description: "AI Authority Engine's framework for how AI decides which businesses get chosen.",
      publisher: { "@id": site.url + "/#organization" },
      hasDefinedTerm: [
        { "@type": "DefinedTerm", name: wheel.center.name, description: wheel.center.text },
        ...wheel.spokes.map((s) => ({ "@type": "DefinedTerm", "@id": site.url + "/ai-authority-wheel/#" + s.slug, name: s.name, description: s.text })),
      ],
    },
  ],
  body: `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">The framework behind the training</p>
    <h1>${wheel.name}</h1>
    <p class="lede">${wheel.tagline.charAt(0).toUpperCase() + wheel.tagline.slice(1)}. The model AI Authority Engine uses to teach, diagnose, and build AI visibility.</p>
  </div>
</section>

<section class="wrap answer-box">
  <h2>The short answer</h2>
  <p><strong>The AI Authority Wheel is AI Authority Engine's framework for how AI decides which businesses get chosen.</strong> At the center is the <strong>entity</strong>: who you are, what you do, who you serve, and where you are. Around it are eight authority factors: ${list}. When every part of the wheel is strong, AI systems can identify, trust, and recommend a business with confidence.</p>
</section>

<section class="section">
  <div class="wrap wheel-grid">
    <div class="wheel-center reveal">
      <p class="eyebrow">The center</p>
      <h2>${wheel.center.name}</h2>
      <ul>${wheel.center.parts.map((p) => `<li>${p}</li>`).join("")}</ul>
      <p>${wheel.center.text}</p>
    </div>
    ${wheel.spokes
      .map(
        (s, i) => `<article class="spoke reveal" id="${s.slug}">
      <span class="spoke-num">${String(i + 1).padStart(2, "0")}</span>
      <h2>${s.name}</h2>
      <p>${s.text}</p>
      <ul class="checks">${s.teaches.map((t) => `<li>${t}</li>`).join("")}</ul>
    </article>`
      )
      .join("\n    ")}
  </div>
</section>

<section class="wrap prose">
  <h2>How the wheel is taught</h2>
  <p>The wheel isn't a checklist you read once. In the AI Authority Engine program, students apply each part to real businesses, their own or their clients', and use it to diagnose exactly why a business is or isn't being recommended by ChatGPT, Gemini, Perplexity, and Google AI Overviews.</p>
  <ul class="checks">
    <li><strong>One-on-one training with Cory Long</strong>, who also joins students' client meetings to help close sales</li>
    <li><strong>Backed by the Yroc Consulting team</strong>, with hands-on implementation support beyond the fundamentals</li>
    <li><strong>Weekly hot-seat coaching calls, challenge calls, and 30-day sprints</strong> to put each part of the wheel to work</li>
  </ul>
  <p>See the full <a href="/ai-seo-certification/#curriculum">curriculum</a>, or test a business against the wheel's core signals with the free <a href="/ai-visibility-quiz/">AI visibility quiz</a>.</p>
</section>
<div class="wrap">${faqHtml(faqs, "AI Authority Wheel: FAQ")}</div>
${cta("Learn the AI Authority Wheel")}
`,
};
