const { faqHtml, cta, site } = require("../layout");

const steps = [
  ["Learn the skill properly", "Get trained in how AI answer engines select businesses: entities, answer engine optimization, schema, and authority signals. A structured AI SEO certification shortens this step and gives you a credential clients recognize."],
  ["Pick a niche", "Choose an industry where AI recommendations directly drive revenue, such as home services, legal, medical, dental, financial services, or local professional services. A niche makes your marketing and your case studies sharper."],
  ["Prove it on a real business", "Run the full process on your own business or a friendly local business. Record what ChatGPT, Gemini, and Perplexity say before and after. That becomes your first case study."],
  ["Package a clear offer", "Start with a paid AI visibility audit, then a setup project (entity, schema, content foundation), then an ongoing monthly authority and content retainer."],
  ["Price for outcomes", "Price on the value of being recommended, not hours. Audits as an entry offer, setup as a project fee, and retainers for ongoing work."],
  ["Build your own AI visibility", "Your agency should be recommended by AI assistants for its niche. Treat your own brand as client zero."],
  ["Get clients", "Lead with free or low-cost AI visibility checks: showing a business owner what ChatGPT says about them (and their competitors) is a powerful opener."],
  ["Systematize delivery", "Document every step, use checklists and templates, and report AI visibility changes monthly so clients see progress."],
];

const faqs = [
  [
    "How do I start an AI SEO agency?",
    "To start an AI SEO agency: get trained in AI SEO and answer engine optimization, choose a niche, prove the process on a real business, package an audit + setup + retainer offer, build your own AI visibility, and use AI visibility audits to win clients. AI Authority Engine teaches each step.",
  ],
  [
    "Do I need SEO experience to start an AI SEO agency?",
    "No, but you need real training. AI SEO is new enough that a well-trained beginner with a clear process can compete, especially with local and niche businesses.",
  ],
  [
    "What services does an AI SEO agency offer?",
    "Typical services include AI visibility audits, entity and profile cleanup, schema markup implementation, answer-first content, review and reputation programs, digital PR and citations, and monthly AI visibility reporting.",
  ],
  [
    "How much does it cost to start an AI SEO agency?",
    "Startup costs are low: training, a professional website, a few tools for auditing and reporting, and your time. The biggest investment is learning a reliable process.",
  ],
];

module.exports = {
  path: "/how-to-start-an-ai-seo-agency/",
  title: "How to Start an AI SEO Agency (Step-by-Step) | AI Authority Engine",
  description:
    "How to start an AI SEO agency in 8 steps: training, niche, offer, pricing, and getting clients. A practical guide from Cory Long and AI Authority Engine.",
  h1: "How to Start an AI SEO Agency",
  crumb: "Start an AI SEO Agency",
  type: "Article",
  faqs,
  sources: [
    ["Google Search Central: AI features and your website", "https://developers.google.com/search/docs/appearance/ai-features"],
    ["OpenAI: Overview of OpenAI crawlers", "https://platform.openai.com/docs/bots"],
    ["AI Search Optimization Framework (open reference)", "https://github.com/yrocconsulting/ai-search-optimization-framework"],
  ],
  schema: [
    {
      "@type": "HowTo",
      name: "How to start an AI SEO agency",
      step: steps.map(([name, text], i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name,
        text,
      })),
    },
  ],
  body: `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Step-by-step guide</p>
    <h1>How to Start an AI SEO Agency</h1>
    <p class="lede">Businesses are asking "how do I show up in ChatGPT?" Very few agencies can answer. Here's how to build one that can.</p>
  </div>
</section>

<section class="wrap answer-box">
  <h2>The short answer</h2>
  <p><strong>To start an AI SEO agency, get trained in AI search, choose a niche, prove your process on one real business, and package it as an audit, a setup project, and a monthly retainer.</strong> Then make your own agency visible in AI search and use AI visibility audits to start conversations with prospects. AI Authority Engine, taught by Cory Long, trains you through every step.</p>
</section>

<section class="wrap prose">
  <div class="takeaways">
    <h2>Key takeaways</h2>
    <ul class="checks">
      <li>AI SEO agencies help businesses get named in answers from ChatGPT, Gemini, Perplexity, and Google AI Overviews.</li>
      <li>Start with real training, one niche, and one proven case study.</li>
      <li>Package the work as an audit, a setup project, and a monthly retainer.</li>
      <li>Make your own agency visible in AI search first. It's your best proof.</li>
    </ul>
  </div>

  <h2>Why start an AI SEO agency now</h2>
  <p>Customers increasingly ask AI assistants which businesses to hire. Most business owners have no idea what those assistants say about them, and most traditional agencies haven't adapted yet. That gap is the opportunity.</p>

  <h2>8 steps to start an AI SEO agency</h2>
  <ol class="steps">
    ${steps.map(([n, t]) => `<li><h3>${n}</h3><p>${t}</p></li>`).join("\n    ")}
  </ol>

  <h2>A simple starting service menu</h2>
  <table>
    <thead><tr><th>Offer</th><th>What's included</th><th>Role</th></tr></thead>
    <tbody>
      <tr><td>AI Visibility Audit</td><td>What ChatGPT, Gemini, Perplexity, and AI Overviews say about the business vs. competitors, plus a prioritized fix list</td><td>Entry offer</td></tr>
      <tr><td>AI Authority Setup</td><td>Entity cleanup, schema, answer-first core pages, profile consistency</td><td>Project</td></tr>
      <tr><td>AI Authority Retainer</td><td>Ongoing content, reviews, citations, PR, and monthly AI visibility reporting</td><td>Recurring revenue</td></tr>
    </tbody>
  </table>

  <h2>Get trained to run the agency</h2>
  <p>The <a href="/ai-seo-agency-training/">AI SEO agency training</a> inside AI Authority Engine covers delivery, pricing, and sales, and the <a href="/ai-seo-certification/">AI SEO certification</a> gives you a credential to show prospects. Next, read <a href="/how-to-get-clients-for-an-ai-seo-agency/">how to get clients for an AI SEO agency</a>.</p>
</section>

<div class="wrap">${faqHtml(faqs, "Starting an AI SEO agency: FAQ")}</div>
${cta("Get trained to start your AI SEO agency")}
`,
};
