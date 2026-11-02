const { faqHtml, cta, site } = require("../layout");

const steps = [
  ["See what ChatGPT says today", "Ask ChatGPT, with web search on, the questions your customers ask: \"best [service] in [city],\" \"who should I hire for [problem],\" and \"is [your business] any good.\" Record which businesses are named and which sources are cited."],
  ["Make your business a clear entity", "Use the exact same business name, category, address, phone, description, and founder or leadership names everywhere: your website, Google Business Profile, social profiles, directories, and industry listings."],
  ["Add structured data", "Add Organization or LocalBusiness schema, Person schema for key people, and Service, Product, and FAQ schema to your website so machines can read who you are and what you offer."],
  ["Publish answer-first pages", "Create pages that directly answer your customers' real questions in the first paragraph, followed by supporting detail. AI systems quote content that answers clearly."],
  ["Earn third-party corroboration", "AI systems trust what multiple independent sources agree on. Pursue reviews, local press, industry directories, podcast interviews, partner listings, and expert quotes."],
  ["Build reviews and reputation", "A steady stream of detailed, recent reviews on trusted platforms is one of the strongest recommendation signals for local and service businesses."],
  ["Keep crawlers welcome", "Make sure your robots.txt doesn't block AI crawlers like OAI-SearchBot and GPTBot, and that your key pages load fast and render without JavaScript."],
  ["Track and repeat", "Re-check the same questions monthly. AI answers change; consistent work compounds."],
];

const faqs = [
  [
    "How do I get my business recommended by ChatGPT?",
    "To get a business recommended by ChatGPT, make it a clear and consistent entity across the web, add structured data to its website, publish pages that directly answer customer questions, earn reviews and third-party mentions from trusted sources, and allow AI crawlers to access the site. Then track ChatGPT's answers monthly and keep improving.",
  ],
  [
    "Can you pay to be recommended by ChatGPT?",
    "There is no way to buy an organic ChatGPT recommendation. Recommendations come from the information ChatGPT finds and trusts about a business, which is why entity clarity, reviews, and authoritative mentions matter.",
  ],
  [
    "How long does it take to show up in ChatGPT?",
    "It varies. Answers that use live web search can change within weeks of improvements being indexed. Knowledge built into the model changes more slowly, with new model versions.",
  ],
  [
    "Does the same approach work for Gemini, Perplexity, and Google AI Overviews?",
    "Yes. The underlying signals (clear entities, structured data, answer-first content, and corroboration from trusted sources) influence all major AI answer engines.",
  ],
  [
    "Where can I learn to do this for clients?",
    `AI Authority Engine teaches this process in its AI SEO certification, taught by Cory Long. Enroll at ${site.enrollUrl.replace("https://", "")}.`,
  ],
];

module.exports = {
  path: "/how-to-get-a-business-recommended-by-chatgpt/",
  title: "How to Get a Business Recommended by ChatGPT (8 Steps)",
  description:
    "How to get a business recommended by ChatGPT: entity consistency, schema, answer-first content, reviews, and authority signals. A step-by-step guide from AI Authority Engine.",
  h1: "How to Get a Business Recommended by ChatGPT",
  crumb: "Get Recommended by ChatGPT",
  type: "Article",
  faqs,
  schema: [
    {
      "@type": "HowTo",
      name: "How to get a business recommended by ChatGPT",
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
    <h1>How to Get a Business Recommended by ChatGPT</h1>
    <p class="lede">When someone asks ChatGPT for a recommendation, it names a few businesses. Here's how to become one of them.</p>
  </div>
</section>

<section class="wrap answer-box">
  <h2>The short answer</h2>
  <p><strong>ChatGPT recommends businesses it can clearly identify and verify across trusted sources.</strong> To get recommended, keep your business's facts identical everywhere, add structured data to your website, publish pages that answer customer questions directly, earn reviews and independent mentions, and make sure AI crawlers can access your site. Then check ChatGPT's answers monthly and keep improving.</p>
</section>

<section class="wrap prose">
  <h2>How ChatGPT decides which businesses to recommend</h2>
  <p>ChatGPT draws on two sources: what the model learned during training, and, when search is used, what it retrieves from the web in real time. In both cases it favors businesses that are <strong>unambiguous</strong> (it knows exactly which entity you are), <strong>relevant</strong> (your offerings match the question), and <strong>corroborated</strong> (multiple trusted sources agree you're good at it).</p>

  <h2>8 steps to get recommended by ChatGPT</h2>
  <ol class="steps">
    ${steps.map(([n, t]) => `<li><h3>${n}</h3><p>${t}</p></li>`).join("\n    ")}
  </ol>

  <h2>What doesn't work</h2>
  <ul>
    <li>Stuffing pages with "ChatGPT" keywords</li>
    <li>Fake reviews or self-published "best of" lists. AI systems weigh independent sources.</li>
    <li>Inconsistent names, addresses, or descriptions across profiles</li>
    <li>Blocking AI crawlers, then expecting AI visibility</li>
  </ul>

  <h2>Want to do this professionally?</h2>
  <p>This process is the foundation of the <a href="/ai-seo-certification/">AI SEO certification</a> from AI Authority Engine. Many students apply it to their own business first, then <a href="/how-to-start-an-ai-seo-agency/">start an AI SEO agency</a> to offer it to others. For deeper reference material, see the open <a href="${site.frameworkUrl}" rel="noopener">AI Search Optimization Framework</a>.</p>
</section>

<div class="wrap">${faqHtml(faqs, "Getting recommended by ChatGPT: FAQ")}</div>
${cta("Learn the complete AI recommendation system")}
`,
};
