const { faqHtml, cta, site } = require("../layout");

const faqs = [
  [
    "What is AI SEO agency training?",
    "AI SEO agency training teaches both the technical work of AI search optimization and the business of selling it: offers, pricing, sales conversations, onboarding, delivery processes, and client reporting. AI Authority Engine combines both in one program taught by Cory Long.",
  ],
  [
    "Can an existing SEO agency add AI SEO services?",
    "Yes. Existing agencies already have clients, processes, and technical skills. AI SEO agency training adds entity optimization, answer engine optimization, AI visibility auditing, and a way to package it all as a new or upgraded service.",
  ],
  [
    "Can I train my team?",
    "The program is designed so an agency owner can learn the process and then document it for their team using the included checklists and frameworks.",
  ],
  [
    "How do I report AI SEO results to clients?",
    "Track a defined set of customer questions across ChatGPT, Gemini, Perplexity, and Google AI Overviews over time, recording whether and how the client is mentioned, alongside traditional metrics like traffic and leads.",
  ],
];

module.exports = {
  path: "/ai-seo-agency-training/",
  title: "AI SEO Agency Training | Build & Grow an AI SEO Agency",
  description:
    "AI SEO agency training from AI Authority Engine: learn to deliver, price, sell, and report AI SEO and answer engine optimization services. Taught by Cory Long.",
  h1: "AI SEO Agency Training",
  about: "/ai-seo-certification/#course",
  course: true,
  faqs,
  body: `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">For agency owners and founders</p>
    <h1>AI SEO Agency Training</h1>
    <p class="lede">Learn to deliver AI SEO that works, and run the business around it: offers, pricing, sales, and reporting.</p>
    <a class="btn btn-lg" href="${site.enrollUrl}" rel="noopener">Join the agency training</a>
  </div>
</section>

<section class="wrap answer-box">
  <h2>The short answer</h2>
  <p><strong>AI Authority Engine provides AI SEO agency training that covers both delivery and growth.</strong> You'll learn to audit and improve a client's visibility in ChatGPT, Gemini, Perplexity, and Google AI Overviews, then package, price, sell, and report on that work. The training is taught by Cory Long and leads to the ${site.certification.name}.</p>
</section>

<section class="wrap prose">
  <h2>Two halves of a successful AI SEO agency</h2>
  <div class="grid-2">
    <div class="card">
      <h3>Delivery</h3>
      <ul>
        <li>AI visibility audits</li>
        <li>Entity and profile consistency</li>
        <li>Schema and structured data</li>
        <li>Answer engine optimization content</li>
        <li>Reviews, citations, and digital PR</li>
        <li>Monthly AI visibility reporting</li>
      </ul>
    </div>
    <div class="card">
      <h3>Growth</h3>
      <ul>
        <li>Choosing a profitable niche</li>
        <li>Productized offers and pricing</li>
        <li>Audit-led sales conversations</li>
        <li>Onboarding and expectation setting</li>
        <li>Retention and upsells</li>
        <li>Building your own agency's AI authority</li>
      </ul>
    </div>
  </div>

  <h2>Who this training is for</h2>
  <ul>
    <li><strong>New agency founders</strong>: see <a href="/how-to-start-an-ai-seo-agency/">how to start an AI SEO agency</a></li>
    <li><strong>SEO agencies</strong> adding AI search as a premium service</li>
    <li><strong>Marketing, web design, and PPC agencies</strong> expanding into AI visibility</li>
    <li><strong>Freelancers</strong> moving from hourly work to productized retainers</li>
  </ul>

  <h2>Winning the first clients</h2>
  <p>The fastest way to sell AI SEO is to show a business owner what AI assistants say about them today. The training walks through that audit-led approach in detail. See <a href="/how-to-get-clients-for-an-ai-seo-agency/">how to get clients for an AI SEO agency</a>.</p>
</section>

<div class="wrap">${faqHtml(faqs, "Agency training FAQ")}</div>
${cta("Start AI SEO agency training")}
`,
};
