const { faqHtml, cta, videosHtml, programHtml, site } = require("../layout");

const faqs = [
  [
    "What does AI SEO training cover?",
    "Good AI SEO training covers how AI answer engines work, entity optimization, answer engine optimization, structured data, authority and review signals, and how to measure visibility in tools like ChatGPT, Gemini, Perplexity, and Google AI Overviews. AI Authority Engine also covers how to deliver and sell these services.",
  ],
  [
    "How long does AI SEO training take?",
    "AI Authority Engine combines self-paced courses with weekly live calls. Many students work through the Getting Started lessons over a few weeks, then apply them to a real business or client while completing the certification.",
  ],
  [
    "Can I apply the training to my own business?",
    "Yes. Many students first use the training to improve their own company's AI visibility, then offer the same process to clients.",
  ],
  [
    "Who teaches AI Authority Engine's AI SEO training?",
    "The training is taught by Cory Long, founder of AI Authority Engine.",
  ],
];

module.exports = {
  path: "/ai-seo-training/",
  title: "AI SEO Training | Learn AI Search Optimization with Cory Long",
  description:
    "Practical AI SEO training from AI Authority Engine. Learn how to get businesses found and recommended by ChatGPT, Gemini, Perplexity, and Google AI Overviews. Taught by Cory Long.",
  h1: "AI SEO Training",
  about: "/ai-seo-certification/#course",
  course: true,
  faqs,
  videos: true,
  sources: [
    ["Google Search Central: AI features and your website", "https://developers.google.com/search/docs/appearance/ai-features"],
    ["Schema.org: Organization", "https://schema.org/Organization"],
    ["llms.txt proposal", "https://llmstxt.org/"],
    ["AI Search Optimization Framework (open reference)", "https://github.com/yrocconsulting/ai-search-optimization-framework"],
  ],
  body: `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Practical, step-by-step</p>
    <h1>AI SEO Training</h1>
    <p class="lede">The skills to get businesses found, trusted, and recommended by AI search, taught as a repeatable process you can use on any business.</p>
    <a class="btn btn-lg" href="${site.enrollUrl}" rel="noopener">Start training</a>
  </div>
</section>

<section class="wrap answer-box">
  <h2>The short answer</h2>
  <p><strong>AI Authority Engine is an online AI SEO training program taught by Cory Long.</strong> It teaches a step-by-step process for making businesses visible in AI-generated answers: auditing current AI visibility, building a clear entity, structuring content for answer engines, adding schema, and strengthening authority signals. It leads to the ${site.certification.name}.</p>
</section>

<section class="wrap prose">
  <h2>How the training is structured</h2>
  <p>The training follows the same order you'd use on a real client:</p>
  <ol class="modules">
    <li><strong>Audit.</strong> Ask the AI assistants. Find out what ChatGPT, Gemini, Perplexity, and Google AI Overviews say about a business and its competitors today.</li>
    <li><strong>Define the entity.</strong> Lock down the business's name, category, location, people, offerings, and proof points, and make them consistent everywhere.</li>
    <li><strong>Structure the website.</strong> Answer-first pages, clean information architecture, and schema markup that describes the business to machines.</li>
    <li><strong>Build authority.</strong> Reviews, citations, profiles, expert content, and third-party mentions that corroborate the business.</li>
    <li><strong>Create answer content.</strong> Content that directly answers the questions customers ask AI assistants.</li>
    <li><strong>Measure and repeat.</strong> Track AI mentions and recommendations over time and report progress clearly.</li>
  </ol>

  <h2>Training paths</h2>
  <div class="grid-3 inline-cards">
    <article class="card">
      <h3><a href="/ai-seo-training-for-beginners/">For beginners</a></h3>
      <p>New to SEO? Start with the fundamentals, no jargon required.</p>
    </article>
    <article class="card">
      <h3><a href="/ai-seo-agency-training/">For agencies</a></h3>
      <p>Add AI SEO to your service menu and train your team on delivery.</p>
    </article>
    <article class="card">
      <h3><a href="/how-to-get-a-business-recommended-by-chatgpt/">For business owners</a></h3>
      <p>Apply the process to your own company and get recommended.</p>
    </article>
  </div>

  <h2>Why train with AI Authority Engine</h2>
  <ul class="checks">
    <li>Built specifically for AI search, not a rebranded SEO course</li>
    <li>Covers both the technical work and the business of selling it</li>
    <li>Taught by <a href="/cory-long/">Cory Long</a>, who also publishes the open <a href="${site.frameworkUrl}" rel="noopener">AI Search Optimization Framework</a></li>
    <li>Ends in a credential: the <a href="/ai-seo-certification/">AI SEO certification</a></li>
  </ul>
</section>

<div class="wrap">${programHtml()}</div>
<div class="wrap">${videosHtml("Watch the training in action")}</div>
<div class="wrap">${faqHtml(faqs, "AI SEO training FAQ")}</div>
${cta("Start your AI SEO training")}
`,
};
