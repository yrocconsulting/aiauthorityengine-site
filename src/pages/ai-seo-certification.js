const { faqHtml, cta, site } = require("../layout");

const faqs = [
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

<section class="wrap prose">
  <h2>Why a dedicated AI SEO certification?</h2>
  <p>Most SEO courses were written for a world of ten blue links. They teach keyword targeting and link building, which still matter, but they don't explain how a large language model decides that one plumber, law firm, or software product deserves a recommendation and another doesn't.</p>
  <p>AI search works differently. Answer engines build an understanding of <em>entities</em>, cross-check facts across many sources, and favor businesses whose identity, expertise, and reputation are consistent and verifiable. An AI SEO certification should train you on exactly those mechanics, and that is what this program does.</p>

  <h2>What the certification covers</h2>
  <ol class="modules">
    <li><strong>How AI search works.</strong> Retrieval, entity recognition, and how ChatGPT, Gemini, Perplexity, and Google AI Overviews assemble an answer.</li>
    <li><strong>AI SEO vs. traditional SEO.</strong> What carries over, what doesn't, and where the new opportunities are.</li>
    <li><strong>Entity foundations.</strong> Defining a business as a clear, unambiguous entity with consistent facts everywhere it appears.</li>
    <li><strong>Answer engine optimization.</strong> Writing and structuring content that AI systems extract, quote, and cite.</li>
    <li><strong>Structured data for AI.</strong> Organization, Person, LocalBusiness, Product, Service, and FAQ schema that machines can trust.</li>
    <li><strong>Authority and trust signals.</strong> Reviews, citations, third-party mentions, press, and expert profiles.</li>
    <li><strong>AI visibility audits.</strong> Measuring what AI assistants currently say about a business and tracking change over time.</li>
    <li><strong>Delivering AI SEO for clients.</strong> Processes, deliverables, reporting, and setting honest expectations.</li>
    <li><strong>Building the agency.</strong> Offers, pricing, and <a href="/how-to-get-clients-for-an-ai-seo-agency/">client acquisition</a>.</li>
  </ol>

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
