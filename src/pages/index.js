const { faqHtml, cta, videosHtml, programHtml, priceText, site } = require("../layout");
const { simulatorHtml, quizHtml, enginesHtml } = require("../components");

const faqs = [
  [
    "How much does the AI Authority Engine certification cost?",
    `The AI Authority Engine program is ${priceText()}. Membership includes the Foundation module (9 core courses), advanced growth modules including the Optimization Lab, weekly live calls, access to all challenge calls, full community access, and live events.`,
  ],
  [
    "What's included in the AI Authority Engine program?",
    "One primary Foundation module with 9 core courses, multiple advanced growth modules led by the Optimization Lab, weekly live calls, access to all challenge calls, full community access, live events, and the Certified AI Authority Specialist credential (Level 1) on completion.",
  ],
  [
    "What is AI Authority Engine?",
    "AI Authority Engine is an AI SEO certification and training program taught by Cory Long. It teaches marketers, consultants, and agency owners how to get businesses found, trusted, and recommended by AI answer engines such as ChatGPT, Google AI Overviews, Gemini, Perplexity, Claude, and Microsoft Copilot, and how to sell that work as an agency service.",
  ],
  [
    "Who teaches the AI Authority Engine certification?",
    "The program is created and taught by Cory Long, founder of AI Authority Engine, creator of Digital Storefronts, and host of the E-Forge Podcast. Cory trains marketers and agency owners on AI SEO, answer engine optimization, and AI search visibility.",
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
  videos: true,
  body: `
<section class="hero">
  <canvas class="hero-net" aria-hidden="true"></canvas>
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <p class="eyebrow reveal">AI SEO Certification · Answer Engine Optimization · Agency Training</p>
      <h1 class="reveal">Get businesses <span class="grad">recommended by AI.</span> Get certified to do it for clients.</h1>
      <p class="lede reveal"><strong>AI Authority Engine</strong> is an AI SEO certification and training program taught by <a href="/cory-long/">Cory Long</a>. Learn how ChatGPT, Google AI Overviews, Gemini, and Perplexity decide which businesses to recommend, and how to build an agency that delivers those results.</p>
      <div class="hero-actions reveal">
        <a class="btn btn-lg btn-glow" href="${site.enrollUrl}" rel="noopener">Start the certification</a>
        <a class="btn btn-ghost btn-lg" href="#quiz">Take the AI visibility quiz</a>
      </div>
    </div>
    <div class="hero-badge reveal">
      <div class="badge-glow"></div>
      <img class="tilt float" src="/assets/badge.webp" alt="Certified AI Authority Specialist badge awarded by AI Authority Engine" width="720" height="614" fetchpriority="high">
    </div>
  </div>
  ${enginesHtml()}
</section>

<section class="wrap answer-box reveal">
  <h2>What is AI Authority Engine?</h2>
  <p><strong>AI Authority Engine is an online AI SEO certification program created by Cory Long.</strong> Students learn answer engine optimization (AEO), entity authority, structured data, and AI visibility auditing, then learn how to package those skills into a profitable AI SEO agency. Graduates earn the ${site.certification.credential} credential.</p>
</section>

<section class="section">
  <div class="wrap split">
    <div class="prose reveal">
      <p class="eyebrow">The shift</p>
      <h2>There is no page two in AI search</h2>
      <p>More people now ask an AI assistant for an answer instead of scrolling through search results. When someone asks ChatGPT for "the best accountant near me" or asks Perplexity which software to buy, the assistant names a handful of businesses and leaves the rest out.</p>
      <p>Traditional SEO was built around ranking pages. AI search is built around <strong>recognizing entities</strong>, meaning real businesses, people, and products, and deciding which ones it trusts enough to recommend. The businesses that win are the ones AI systems can clearly identify, verify across many sources, and quote with confidence.</p>
      <p>That shift creates demand for a new skill set. AI Authority Engine exists to teach it. <strong>Flip the switch to see the difference.</strong></p>
    </div>
    <div class="reveal">${simulatorHtml()}</div>
  </div>
</section>

<section class="section pillars-sec">
  <div class="wrap">
    <div class="sec-head reveal">
      <p class="eyebrow">The method</p>
      <h2>Build. Rank. Grow.</h2>
      <p>The AI Authority Engine framework in three stages, for your clients' businesses and for your own agency.</p>
    </div>
    <div class="pillars">
      <article class="pillar reveal">
        <div class="pillar-num">01</div>
        <h3>Build authority</h3>
        <p>Turn a business into a clear, verifiable entity: consistent facts everywhere, structured data, reviews, and third-party mentions that AI systems trust.</p>
        <a href="/how-to-get-a-business-recommended-by-chatgpt/">How AI recommendations work →</a>
      </article>
      <article class="pillar reveal">
        <div class="pillar-num">02</div>
        <h3>Rank in AI answers</h3>
        <p>Use answer engine optimization to create content AI assistants extract, quote, and cite in ChatGPT, Gemini, Perplexity, and Google AI Overviews.</p>
        <a href="/answer-engine-optimization-certification/">Answer engine optimization →</a>
      </article>
      <article class="pillar reveal">
        <div class="pillar-num">03</div>
        <h3>Grow an agency</h3>
        <p>Package AI SEO into audits, setup projects, and retainers. Then win clients by showing them what AI says about them today.</p>
        <a href="/how-to-start-an-ai-seo-agency/">Start an AI SEO agency →</a>
      </article>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="sec-head reveal">
      <p class="eyebrow">Curriculum</p>
      <h2>What you learn</h2>
      <p>Tap any module to see what's inside.</p>
    </div>
    <div class="modules-grid">
      <details class="module reveal"><summary><span class="m-num">01</span><h3>How AI answer engines choose businesses</h3></summary><p>Entity recognition, retrieval, trust signals, and how recommendations are generated by ChatGPT, Gemini, Perplexity, and Google AI Overviews.</p></details>
      <details class="module reveal"><summary><span class="m-num">02</span><h3>Answer engine optimization</h3></summary><p>Structuring content so AI systems can extract and cite it as the answer, with answer-first pages, FAQs, and question research.</p></details>
      <details class="module reveal"><summary><span class="m-num">03</span><h3>Entity and authority building</h3></summary><p>Consistent facts, citations, reviews, and third-party mentions that make a business verifiable.</p></details>
      <details class="module reveal"><summary><span class="m-num">04</span><h3>Structured data for AI</h3></summary><p>Schema markup that defines who a business is, what it offers, and who is behind it, implemented with templates.</p></details>
      <details class="module reveal"><summary><span class="m-num">05</span><h3>AI visibility audits</h3></summary><p>Testing what ChatGPT, Gemini, and Perplexity currently say about a business, finding the gaps, and tracking progress.</p></details>
      <details class="module reveal"><summary><span class="m-num">06</span><h3>The agency side</h3></summary><p>Packaging, pricing, selling, and delivering AI SEO as a recurring service, plus <a href="/how-to-get-clients-for-an-ai-seo-agency/">how to get clients</a>.</p></details>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap program-wrap reveal">${programHtml("What you get")}</div>
</section>

<section class="section section-alt">
  <div class="wrap">${quizHtml()}</div>
</section>

<section class="section">
  <div class="wrap split">
    <div class="reveal">
      <p class="eyebrow">Who it's for</p>
      <h2>Built for where you're starting</h2>
      <div class="audience">
        <a class="aud reveal" href="/ai-seo-training-for-beginners/"><b>Beginners</b><span>A clear, practical entry point into AI SEO. No experience or coding needed.</span></a>
        <a class="aud reveal" href="/how-to-start-an-ai-seo-agency/"><b>Future agency owners</b><span>Launch an AI SEO agency with a proven offer.</span></a>
        <a class="aud reveal" href="/ai-seo-agency-training/"><b>Existing agencies</b><span>Add AI SEO as a premium service and train your team.</span></a>
        <a class="aud reveal" href="/how-to-get-a-business-recommended-by-chatgpt/"><b>Business owners</b><span>Get your own company recommended by ChatGPT.</span></a>
      </div>
    </div>
    <div class="cory-card reveal">
      <img src="${site.founder.image}" alt="Cory Long, founder of AI Authority Engine" width="160" height="160" loading="lazy">
      <p class="eyebrow">Your instructor</p>
      <h2>Taught by Cory Long</h2>
      <p><a href="/cory-long/">Cory Long</a> is the founder and lead trainer of AI Authority Engine. An entrepreneur, author, speaker, and business coach with more than two decades of digital marketing experience, Cory started in business at 40 and went on to build multiple businesses generating eight figures in sales. He is also the creator of Digital Storefronts and host of the E-Forge Podcast. Cory also publishes the open <a href="${site.frameworkUrl}" rel="noopener">AI Search Optimization Framework</a>, a public reference on how AI systems understand, evaluate, and recommend businesses.</p>
      <a class="btn btn-ghost" href="/cory-long/">Meet Cory</a>
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="wrap split badge-split">
    <div class="reveal badge-show">
      <img class="tilt" src="/assets/badge.webp" alt="AI Authority Engine certification badge" width="720" height="614" loading="lazy">
    </div>
    <div class="prose reveal">
      <p class="eyebrow">Your credential</p>
      <h2>Earn a badge that sets you apart</h2>
      <p>Graduates earn the <strong>${site.certification.credential}</strong> credential and badge, proof that you know how AI answer engines choose businesses and how to get clients chosen.</p>
      <ul class="checks">
        <li>Show it on your website, proposals, and LinkedIn profile</li>
        <li>Stand out from agencies still selling only traditional SEO</li>
        <li>Backed by a structured, applied <a href="/ai-seo-certification/">AI SEO certification</a></li>
      </ul>
      <a class="btn btn-glow" href="${site.enrollUrl}" rel="noopener">Earn your badge</a>
    </div>
  </div>
</section>

<div class="wrap">${videosHtml()}</div>
<div class="wrap">${faqHtml(faqs)}</div>
${cta()}
`,
};
