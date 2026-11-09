const { faqHtml, cta, site } = require("../layout");
const calc = require("../data/calculator");
const results = require("../data/results");

const dims = Object.entries(calc.dimensions);
const scoredCount = calc.sections.flatMap((s) => s.questions).filter((q) => q.dimension).length;

// Everything the browser needs to run the calculator.
const clientData = {
  dimensions: calc.dimensions,
  gates: calc.gates,
  tiers: calc.tiers,
  sections: calc.sections,
  webhook: site.leadWebhook || "",
  enrollUrl: site.enrollUrl,
  contactEmail: site.contactEmail,
};

const faqs = [
  ["What is the AI Visibility Calculator?", `A free assessment from AI Authority Engine that scores how ready a business is to be found, trusted, and recommended by AI assistants such as ChatGPT, Gemini, Perplexity, and Google AI Overviews. It takes about 4 minutes and covers ${scoredCount} scored questions across five dimensions of the AI Authority Wheel.`],
  ["How is the AI visibility score calculated?", `Each answer scores 0 to 4 and is weighted within five dimensions that add up to 100 points: ${dims.map(([, d]) => `${d.label} (${d.points})`).join(", ")}. To reach the Recommended tier, a business also needs at least 70% in Entity Clarity, Authority & Reputation, and AI Visibility & Engagement.`],
  ["What do the AI visibility tiers mean?", calc.tiers.map((t) => `${t.label} (${t.min}+): ${t.text}`).join(" ")],
  ["What is the perception gap?", "The last question asks how visible you think your business is in AI search. We compare that with your calculated score, because many businesses overestimate how often AI recommends them."],
  ["Is the AI Visibility Calculator free?", `Yes. Your score is calculated in your browser.${site.leadWebhook ? " If you request your full report, we receive your name, email, business, and answers so we can send it to you." : ""}`],
  ["What should I do after I get my score?", "Start with your lowest dimension. Business owners can work with a Certified AI Authority Specialist or Yroc Consulting; marketers and agency owners can learn to fix every gap in the AI Authority Engine certification."],
];

module.exports = {
  path: "/ai-visibility-calculator/",
  title: "Free AI Visibility Calculator: Will ChatGPT Recommend Your Business?",
  description: `Get a free AI visibility score in about 4 minutes. ${scoredCount} questions across the AI Authority Wheel show how ready a business is to be recommended by ChatGPT, Gemini, Perplexity, and Google AI Overviews.`,
  h1: "AI Visibility Calculator",
  crumb: "AI Visibility Calculator",
  faqs,
  schema: [
    {
      "@type": "WebApplication",
      "@id": site.url + "/ai-visibility-calculator/#app",
      name: "AI Visibility Calculator",
      url: site.url + "/ai-visibility-calculator/",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: 0, priceCurrency: "USD" },
      publisher: { "@id": site.url + "/#organization" },
      description: `A free ${scoredCount}-question assessment that scores a business's readiness to be recommended by AI assistants across five dimensions of the AI Authority Wheel.`,
    },
  ],
  body: `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Free assessment · about 4 minutes</p>
    <h1>AI Visibility Calculator</h1>
    <p class="lede">Will ChatGPT recommend your business? Get your AI visibility score, your tier, and the exact gaps holding you back.</p>
  </div>
</section>

<section class="wrap answer-box">
  <h2>What you'll get</h2>
  <p><strong>The AI Visibility Calculator scores how ready a business is to be recommended by AI assistants, from 0 to 100.</strong> Answer ${scoredCount} quick questions across the five dimensions of the <a href="/ai-authority-wheel/">AI Authority Wheel</a> to see your tier, your strongest and weakest areas, your perception gap, and the top fixes to make first.</p>
</section>

<section class="section">
  <div class="wrap">
    <div class="calc" id="calc" aria-live="polite">
      <noscript><p>The calculator needs JavaScript. You can still check your business against the AI Authority Wheel with the questions below, or email <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>.</p></noscript>
    </div>
  </div>
</section>
<script type="application/json" id="calc-data">${JSON.stringify(clientData).replace(/</g, "\\u003c")}</script>
<script src="/assets/calculator.js?v=${Date.now().toString(36)}" defer></script>

<section class="wrap prose">
  <h2>How the score works</h2>
  <p>Your score adds up five weighted dimensions, each tied to part of the AI Authority Wheel:</p>
  <table class="compare">
    <thead><tr><th>Dimension</th><th>Points</th><th>AI Authority Wheel factors</th></tr></thead>
    <tbody>
      ${dims.map(([, d]) => `<tr><td>${d.label}</td><td>${d.points}</td><td>${d.wheel}</td></tr>`).join("\n      ")}
    </tbody>
  </table>

  <h2>The four AI visibility tiers</h2>
  <ul class="checks">
    ${calc.tiers.map((t) => `<li><strong>${t.label} (${t.min}${t.id === "recommended" ? "+" : `–${(calc.tiers[calc.tiers.indexOf(t) + 1] || { min: 101 }).min - 1}`})</strong>: ${t.text}</li>`).join("\n    ")}
  </ul>

  <h2>Fix your gaps</h2>
  <p>Business owners can work with a <a href="/certified/">Certified AI Authority Specialist</a> or the team at <a href="${site.company.url}" rel="noopener">${site.company.name}</a>. Marketers and agency owners can learn to close every gap, and build an agency around it, in the <a href="/ai-seo-certification/">AI SEO certification</a>. Today Yroc is the fulfillment partner behind ${results.whiteLabelAccounts} client accounts signed by our students.</p>
</section>
<div class="wrap">${faqHtml(faqs, "AI Visibility Calculator: FAQ")}</div>
${cta()}
`,
};
