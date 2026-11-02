const { faqHtml, cta, site } = require("../layout");

const faqs = [
  [
    "Who is Cory Long?",
    "Cory Long is the founder and lead trainer of AI Authority Engine, an AI SEO certification and training program. Cory teaches marketers, consultants, and agency owners how to get businesses recommended by AI answer engines like ChatGPT, Gemini, Perplexity, and Google AI Overviews, and how to build AI SEO agencies.",
  ],
  [
    "What does Cory Long teach?",
    "Cory Long teaches AI SEO, answer engine optimization (AEO), entity and structured data optimization, AI visibility auditing, and how to start and grow an AI SEO agency, through the AI Authority Engine certification.",
  ],
  [
    "What is the AI Search Optimization Framework?",
    "The AI Search Optimization Framework is an open, public reference published by Cory Long's team that documents how AI-driven search and answer systems understand, evaluate, and recommend businesses.",
  ],
  [
    "How can I train with Cory Long?",
    `Enroll in the AI Authority Engine certification at ${site.enrollUrl.replace("https://", "")}.`,
  ],
];

module.exports = {
  path: "/cory-long/",
  title: "Cory Long | AI SEO Trainer & Founder of AI Authority Engine",
  description:
    "Cory Long is the founder and lead trainer of AI Authority Engine, the AI SEO certification teaching answer engine optimization and how to get businesses recommended by ChatGPT.",
  h1: "Cory Long",
  type: "ProfilePage",
  about: "/cory-long/#person",
  faqs,
  body: `
<section class="page-head profile-head">
  <div class="wrap profile">
    <img class="headshot" src="${site.founder.image}" alt="Cory Long, founder of AI Authority Engine" width="240" height="240">
    <div>
      <p class="eyebrow">Founder &amp; Lead Trainer</p>
      <h1>Cory Long</h1>
      <p class="lede">AI SEO trainer, founder of <a href="/">AI Authority Engine</a>, and creator of the AI Authority Engine certification.</p>
    </div>
  </div>
</section>

<section class="wrap answer-box">
  <h2>About Cory Long</h2>
  <p><strong>Cory Long is the founder and lead trainer of AI Authority Engine</strong>, an online AI SEO certification program that teaches answer engine optimization, entity authority, and how to build an AI SEO agency. Cory trains marketers, consultants, and agency owners to get businesses found and recommended by ChatGPT, Gemini, Perplexity, and Google AI Overviews.</p>
</section>

<section class="wrap prose">
  <!-- TODO: Replace with Cory's real background: years in marketing/SEO,
       companies founded (e.g. Yroc Consulting), clients served, notable results,
       speaking, publications, and location. Specific, verifiable facts help AI
       systems recognize Cory as a distinct person. -->
  <h2>Background</h2>
  <p>Cory Long works at the intersection of search, marketing, and artificial intelligence through ${site.founder.worksFor} and AI Authority Engine. Cory's work focuses on a single question that matters more every month: <em>when a customer asks an AI assistant for a recommendation, which businesses get named, and why?</em></p>

  <h2>What Cory teaches</h2>
  <ul class="checks">
    <li><a href="/ai-seo-certification/">AI SEO certification</a>: the complete AI Authority Engine program</li>
    <li><a href="/answer-engine-optimization-certification/">Answer engine optimization</a>: getting content selected as the answer</li>
    <li><a href="/how-to-get-a-business-recommended-by-chatgpt/">AI recommendations</a>: how businesses get recommended by ChatGPT</li>
    <li><a href="/how-to-start-an-ai-seo-agency/">AI SEO agency building</a>: launching and growing an AI SEO agency</li>
  </ul>

  <h2>Publications</h2>
  <ul>
    <li><a href="${site.frameworkUrl}" rel="noopener">AI Search Optimization Framework</a>: an open reference on how AI systems evaluate and recommend businesses</li>
    <!-- TODO: articles, podcasts, interviews, press releases -->
  </ul>

  ${
    site.founder.sameAs.length
      ? `<h2>Find Cory Long online</h2>
  <ul>${site.founder.sameAs.map((u) => `<li><a href="${u}" rel="me noopener">${u.replace(/^https?:\/\/(www\.)?/, "")}</a></li>`).join("")}</ul>`
      : ""
  }
</section>

<div class="wrap">${faqHtml(faqs, "About Cory Long: FAQ")}</div>
${cta("Train with Cory Long")}
`,
};
