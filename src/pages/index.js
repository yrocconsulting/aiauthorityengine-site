const { faqHtml, cta, site } = require("../layout");

const faqs = [
  [
    "What is AI Authority Engine?",
    "AI Authority Engine is an AI SEO certification and training program taught by Cory Long. It teaches marketers, consultants, and agency owners how to get businesses found, trusted, and recommended by AI answer engines such as ChatGPT, Google AI Overviews, Gemini, Perplexity, Claude, and Microsoft Copilot, and how to sell that work as an agency service.",
  ],
  [
    "Who teaches the AI Authority Engine certification?",
    "The program is created and taught by Cory Long, founder of AI Authority Engine and Yroc Consulting. Cory trains marketers and agency owners on AI SEO, answer engine optimization, and AI search visibility.",
  ],
  [
    "What is AI SEO?",
    "AI SEO is the practice of making a business easy for AI systems to identify, understand, trust, and recommend. Instead of only ranking pages in a list of links, AI SEO focuses on entity clarity, consistent facts across the web, structured data, authority signals, and content that answer engines can quote directly.",
  ],
  [
    "Is AI SEO different from answer engine optimization?",
    "The terms overlap. Answer engine optimization (AEO) is the part of AI SEO focused on getting your content selected as the direct answer by AI assistants and search features. AI Authority Engine covers AEO, generative engine optimization (GEO), and the entity and trust work underneath both.",
  ],
  [
    "Where is the training hosted?",
    `The AI Authority Engine training is delivered online. You can enroll at <a href="${site.enrollUrl}">${site.enrollUrl.replace("https://", "")}</a>.`,
  ],
];

module.exports = {
  path: "/",
  title: "AI Authority Engine | AI SEO Certification & Training by Cory Long",
  description:
    "AI Authority Engine is the AI SEO certification and answer engine optimization training by Cory Long. Learn to get businesses recommended by ChatGPT and build an AI SEO agency.",
  h1: "AI Authority Engine",
  course: true,
  faqs,
  body: `
<section class="hero">
  <div class="wrap">
    <p class="eyebrow">AI SEO Certification · Answer Engine Optimization · Agency Training</p>
    <h1>Get businesses recommended by AI. Get certified to do it for clients.</h1>
    <p class="lede"><strong>AI Authority Engine</strong> is an AI SEO certification and training program taught by <a href="/cory-long/">Cory Long</a>. It teaches you how ChatGPT, Google AI Overviews, Gemini, and Perplexity decide which businesses to recommend, and how to build an agency that delivers those results.</p>
    <div class="hero-actions">
      <a class="btn btn-lg" href="${site.enrollUrl}" rel="noopener">Start the certification</a>
      <a class="btn btn-ghost btn-lg" href="/ai-seo-certification/">See what's inside</a>
    </div>
  </div>
</section>

<section class="wrap answer-box">
  <h2>What is AI Authority Engine?</h2>
  <p><strong>AI Authority Engine is an online AI SEO certification program created by Cory Long.</strong> Students learn answer engine optimization (AEO), entity authority, structured data, and AI visibility auditing, then learn how to package those skills into a profitable AI SEO agency. Graduates earn the ${site.certification.name}.</p>
</section>

<section class="wrap grid-3">
  <article class="card">
    <h3><a href="/ai-seo-certification/">AI SEO Certification</a></h3>
    <p>A structured, credentialed path from AI search fundamentals to client-ready AI SEO implementation.</p>
  </article>
  <article class="card">
    <h3><a href="/how-to-start-an-ai-seo-agency/">Start an AI SEO Agency</a></h3>
    <p>Offers, pricing, delivery, and the systems to launch an AI SEO agency, or add AI SEO to the agency you already run.</p>
  </article>
  <article class="card">
    <h3><a href="/how-to-get-a-business-recommended-by-chatgpt/">Get Recommended by ChatGPT</a></h3>
    <p>The entity, trust, and content signals that decide whether AI assistants name a business when people ask for a recommendation.</p>
  </article>
</section>

<section class="wrap prose">
  <h2>Why AI SEO matters now</h2>
  <p>More people now ask an AI assistant for an answer instead of scrolling through search results. When someone asks ChatGPT for "the best accountant near me" or asks Perplexity which software to buy, the assistant names a handful of businesses and leaves the rest out. There is no page two.</p>
  <p>Traditional SEO was built around ranking pages. AI search is built around <strong>recognizing entities</strong>, meaning real businesses, people, and products, and deciding which ones it trusts enough to recommend. The businesses that win are the ones AI systems can clearly identify, verify across many sources, and quote with confidence.</p>
  <p>That shift creates demand for a new skill set. AI Authority Engine exists to teach it.</p>

  <h2>What you learn</h2>
  <ul class="checks">
    <li><strong>How AI answer engines choose businesses</strong>: entity recognition, retrieval, trust signals, and how recommendations are generated.</li>
    <li><strong>Answer engine optimization</strong>: structuring content so AI systems can extract and cite it as the answer.</li>
    <li><strong>Entity and authority building</strong>: consistent facts, citations, reviews, and third-party mentions that make a business verifiable.</li>
    <li><strong>Structured data for AI</strong>: schema markup that defines who a business is, what it offers, and who is behind it.</li>
    <li><strong>AI visibility audits</strong>: testing what ChatGPT, Gemini, and Perplexity currently say about a business, and fixing it.</li>
    <li><strong>The agency side</strong>: packaging, pricing, selling, and delivering AI SEO as a recurring service.</li>
  </ul>

  <h2>Who it's for</h2>
  <ul>
    <li>Beginners who want a clear, practical <a href="/ai-seo-training-for-beginners/">entry point into AI SEO</a></li>
    <li>Freelancers and consultants who want to <a href="/how-to-start-an-ai-seo-agency/">start an AI SEO agency</a></li>
    <li>Existing SEO and marketing agencies adding <a href="/ai-seo-agency-training/">AI SEO services</a></li>
    <li>Business owners who want their own company <a href="/how-to-get-a-business-recommended-by-chatgpt/">recommended by ChatGPT</a></li>
  </ul>

  <h2>Taught by Cory Long</h2>
  <p><a href="/cory-long/">Cory Long</a> is the founder and lead trainer of AI Authority Engine. Cory also publishes the open <a href="${site.frameworkUrl}" rel="noopener">AI Search Optimization Framework</a>, a public reference on how AI systems understand, evaluate, and recommend businesses.</p>
</section>

<div class="wrap">${faqHtml(faqs)}</div>
${cta()}
`,
};
