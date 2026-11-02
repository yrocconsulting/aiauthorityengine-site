const { faqHtml, cta, site } = require("../layout");

const steps = [
  ["Lead with an AI visibility check", "Ask ChatGPT, Gemini, and Perplexity the questions a prospect's customers would ask, such as \"best roofer in Tampa\" or \"top estate planning attorney near me.\" Screenshot the answers. Most owners have never seen them, and many will see competitors named instead of themselves."],
  ["Target one niche", "Prospect within one industry so every conversation, example, and case study reinforces the next. Niches with high customer value and heavy local competition respond best."],
  ["Make your own agency visible in AI", "When a prospect asks an AI assistant about AI SEO agencies in your niche or city, you should appear. It's the most convincing proof you can offer."],
  ["Publish answer-first content", "Write about the exact questions business owners ask, such as \"how do I get my business recommended by ChatGPT.\" That content attracts inbound leads and builds your authority."],
  ["Partner with adjacent providers", "Web designers, PPC agencies, and traditional SEOs often have clients asking about AI. Offer AI SEO as a white-label or referral service."],
  ["Sell the audit, then the setup, then the retainer", "A paid audit qualifies serious buyers and naturally leads into an implementation project and ongoing retainer."],
  ["Show proof every month", "Report the client's AI mentions and recommendations over time. Visible progress keeps clients and creates referrals."],
];

const faqs = [
  [
    "How do I get clients for an AI SEO agency?",
    "The most effective way to get AI SEO clients is to show business owners what AI assistants currently say about them versus competitors, using a short AI visibility audit. Combine that with a focused niche, your own visible AI presence, answer-first content, and partnerships with web and marketing agencies.",
  ],
  [
    "What's the best first offer for AI SEO clients?",
    "An AI visibility audit. It's easy to understand, quick to deliver, demonstrates expertise, and leads naturally into implementation and retainer work.",
  ],
  [
    "Where do AI SEO agencies find clients?",
    "Common channels include direct outreach with personalized AI visibility screenshots, local business networks, industry associations, referral partnerships with web designers and marketers, LinkedIn content, and inbound leads from answer-first content.",
  ],
  [
    "How do I explain AI SEO to business owners?",
    "Keep it simple: when customers ask ChatGPT or Google's AI for a recommendation, it names a few businesses. AI SEO is the work of making sure yours is one of them.",
  ],
];

module.exports = {
  path: "/how-to-get-clients-for-an-ai-seo-agency/",
  title: "How to Get Clients for an AI SEO Agency | AI Authority Engine",
  description:
    "How to get clients for an AI SEO agency: audit-led outreach, niche focus, partnerships, and offers that convert. Practical client acquisition from Cory Long's AI Authority Engine.",
  h1: "How to Get Clients for an AI SEO Agency",
  crumb: "Get AI SEO Clients",
  type: "Article",
  faqs,
  schema: [
    {
      "@type": "HowTo",
      name: "How to get clients for an AI SEO agency",
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
    <p class="eyebrow">Client acquisition</p>
    <h1>How to Get Clients for an AI SEO Agency</h1>
    <p class="lede">The best AI SEO sales tool is a screenshot of what ChatGPT says about your prospect, and what it says about their competitors.</p>
  </div>
</section>

<section class="wrap answer-box">
  <h2>The short answer</h2>
  <p><strong>To get clients for an AI SEO agency, show business owners what AI assistants say about them today, then offer to fix it.</strong> Lead with a short AI visibility audit, focus on one niche, make your own agency visible in AI search, and build referral partnerships with web and marketing agencies. AI Authority Engine teaches this audit-led approach step by step.</p>
</section>

<section class="wrap prose">
  <h2>7 ways to get AI SEO clients</h2>
  <ol class="steps">
    ${steps.map(([n, t]) => `<li><h3>${n}</h3><p>${t}</p></li>`).join("\n    ")}
  </ol>

  <h2>What to say on a first call</h2>
  <blockquote>"When your customers ask ChatGPT who to hire, it recommends a few businesses. Right now, it recommends these three competitors and not you. Here's why, and here's how we change it."</blockquote>
  <p>That message works because it's specific, visual, and tied directly to revenue. The <a href="/ai-seo-agency-training/">AI SEO agency training</a> includes the full audit, call structure, and proposal framework.</p>

  <h2>Avoid these mistakes</h2>
  <ul>
    <li>Guaranteeing specific AI rankings. No one controls AI outputs.</li>
    <li>Selling jargon ("entities," "knowledge graphs") instead of outcomes</li>
    <li>Prospecting every industry at once</li>
    <li>Skipping monthly proof of progress</li>
  </ul>

  <p>New to the business side? Start with <a href="/how-to-start-an-ai-seo-agency/">how to start an AI SEO agency</a>.</p>
</section>

<div class="wrap">${faqHtml(faqs, "Getting AI SEO clients: FAQ")}</div>
${cta("Learn the full client acquisition system")}
`,
};
