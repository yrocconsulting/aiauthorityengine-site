const { faqHtml, cta, programHtml, curriculumHtml, priceText, site } = require("../layout");

const faqs = [
  [
    "How much does the AI Authority Engine certification cost?",
    `The AI Authority Engine program is ${priceText()}. Membership includes the Getting Started curriculum (a kickoff webinar, 6 core lessons, and 2 bonus lessons), the Optimization Lab, 30-Day Sprints, Podcast Automation, weekly live calls, access to all challenge calls, full community access, and live events.`,
  ],
  [
    "What's included in the AI Authority Engine program?",
    "The Getting Started curriculum (a kickoff webinar, 6 core lessons on AI authority, AI presence, reviews and trust signals, AI-optimized pages, schema, and press and brand mentions, plus bonuses on the AI Authority Wheel and Wikidata), the Optimization Lab, 30-Day Sprints, Podcast Automation, weekly live calls, access to all challenge calls, full community access, live events, and the Certified AI Authority Specialist credential (Level 1) on completion.",
  ],
  [
    "What is an AI SEO certification?",
    "An AI SEO certification is a credential showing you have been trained to make businesses visible in AI-driven search, including ChatGPT, Google AI Overviews, Gemini, Perplexity, and Copilot. A good certification covers answer engine optimization, entity authority, structured data, and AI visibility measurement, not just traditional keyword SEO.",
  ],
  [
    "What certification does AI Authority Engine award?",
    `Students who complete the program earn the ${site.certification.credential} credential, issued by AI Authority Engine.`,
  ],
  [
    "Do I need SEO experience to get the AI SEO certification?",
    "No. The program starts with how AI search works and builds up step by step. Experienced SEOs move faster through the fundamentals and spend more time on the entity, schema, and agency modules.",
  ],
  [
    "Is the AI SEO certification online?",
    `Yes. The AI Authority Engine certification is delivered online, and you can enroll at ${site.enrollUrl.replace("https://", "")}.`,
  ],
  [
    "Who created the AI Authority Engine certification?",
    "The certification was created by Cory Long, founder and lead trainer of AI Authority Engine.",
  ],
];

module.exports = {
  path: "/ai-seo-certification/",
  title: "AI SEO Certification | AI Authority Engine by Cory Long",
  description:
    "The AI Authority Engine AI SEO certification teaches answer engine optimization, entity authority, and schema for AI search, plus how to deliver AI SEO for clients. Taught by Cory Long.",
  h1: "AI SEO Certification",
  type: "WebPage",
  about: "/ai-seo-certification/#course",
  course: true,
  faqs,
  sources: [
    ["Google Search Central: AI features and your website", "https://developers.google.com/search/docs/appearance/ai-features"],
    ["Google Search Central: Creating helpful, reliable, people-first content", "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"],
    ["AI Search Optimization Framework (open reference)", "https://github.com/yrocconsulting/ai-search-optimization-framework"],
  ],
  body: `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">The ${site.certification.name}</p>
    <h1>AI SEO Certification</h1>
    <p class="lede">A practical, credentialed AI SEO certification that teaches you how AI answer engines pick which businesses to recommend, and how to get your clients picked.</p>
    <a class="btn btn-lg" href="${site.enrollUrl}" rel="noopener">Enroll now</a>
  </div>
</section>

<section class="wrap answer-box">
  <h2>The short answer</h2>
  <p><strong>The AI Authority Engine AI SEO certification is an online training and credential program created by Cory Long.</strong> It covers answer engine optimization (AEO), generative engine optimization (GEO), entity and knowledge graph optimization, structured data, AI visibility audits, and the business systems needed to sell AI SEO services. Graduates earn the ${site.certification.credential} credential.</p>
</section>

<div class="wrap">${programHtml()}</div>

<section class="wrap prose">
  <h2>Why a dedicated AI SEO certification?</h2>
  <p>Most SEO courses were written for a world of ten blue links. They teach keyword targeting and link building, which still matter, but they don't explain how a large language model decides that one plumber, law firm, or software product deserves a recommendation and another doesn't.</p>
  <p>AI search works differently. Answer engines build an understanding of <em>entities</em>, cross-check facts across many sources, and favor businesses whose identity, expertise, and reputation are consistent and verifiable. An AI SEO certification should train you on exactly those mechanics, and that is what this program does.</p>

  <h2 id="curriculum">What the certification covers</h2>
  <p>Every student starts with the Getting Started curriculum, then continues with ongoing modules, live calls, and community support.</p>
  ${curriculumHtml()}

  <h2>Who should get certified</h2>
  <ul>
    <li><strong>Beginners</strong> who want a structured start. See <a href="/ai-seo-training-for-beginners/">AI SEO training for beginners</a>.</li>
    <li><strong>SEO professionals</strong> who want to update their skills for answer engines.</li>
    <li><strong>Agency owners</strong> adding AI SEO as a service. See <a href="/ai-seo-agency-training/">AI SEO agency training</a>.</li>
    <li><strong>Entrepreneurs</strong> who want to <a href="/how-to-start-an-ai-seo-agency/">start an AI SEO agency</a>.</li>
  </ul>

  <h2>What you can do after certification</h2>
  <ul class="checks">
    <li>Run an AI visibility audit and explain the results to a business owner in plain language</li>
    <li>Build an entity and schema foundation that AI systems can read</li>
    <li>Create answer-ready content that earns citations in AI responses</li>
    <li>Package AI SEO into a recurring service with clear deliverables</li>
    <li>Present yourself as a credentialed AI SEO specialist</li>
  </ul>

  <h2>Also called answer engine optimization certification</h2>
  <p>Answer engine optimization is a core part of the program. If you're specifically looking for AEO training, see the <a href="/answer-engine-optimization-certification/">answer engine optimization certification</a> page. Comparing options? Read our guide to the <a href="/best-ai-seo-certification-programs/">best AI SEO certification programs</a> and what to look for.</p>
</section>

<div class="wrap">${faqHtml(faqs, "AI SEO certification FAQ")}</div>
${cta("Get your AI SEO certification")}
`,
};
