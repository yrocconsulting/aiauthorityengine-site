const { faqHtml, cta, site } = require("../layout");

const GAI = ["Google Search Central: AI features and your website", "https://developers.google.com/search/docs/appearance/ai-features"];
const HELP = ["Google Search Central: Creating helpful, reliable, people-first content", "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"];
const OAI = ["OpenAI: Overview of OpenAI crawlers", "https://platform.openai.com/docs/bots"];
const BING = ["Bing Webmaster Guidelines", "https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a"];
const INDEXNOW = ["IndexNow documentation", "https://www.indexnow.org/documentation"];
const SCHEMA = ["Schema.org: Organization", "https://schema.org/Organization"];

const takeaways = (items) => `<div class="takeaways">
    <h2>Key takeaways</h2>
    <ul class="checks">
      ${items.map((i) => `<li>${i}</li>`).join("\n      ")}
    </ul>
  </div>`;

// ------------------------------------------------------------------ AI SEO vs SEO
const vsFaqs = [
  ["What is the difference between AI SEO and traditional SEO?", "Traditional SEO aims to rank web pages in search results so people click through. AI SEO aims to get a business identified, trusted, and named inside AI-generated answers from tools like ChatGPT, Gemini, Perplexity, and Google AI Overviews. Traditional SEO optimizes pages and keywords; AI SEO optimizes entities, facts, and corroboration across the web."],
  ["Does AI SEO replace traditional SEO?", "No. AI systems still rely on crawlable, well-structured websites and on search indexes, so technical SEO and quality content remain the foundation. AI SEO adds entity clarity, answer-first content, structured data, and off-site corroboration on top."],
  ["Is AI SEO harder than SEO?", "It's different rather than harder. There are fewer guaranteed tactics and results are measured by mentions and recommendations rather than rank positions, but many of the most effective steps, like consistent business facts, clear answers, and reviews, are straightforward."],
  ["Should an SEO agency offer AI SEO?", "Yes. Clients are already asking how to show up in ChatGPT. Agencies that add AI SEO can upgrade existing retainers and win clients from competitors still selling only traditional SEO. AI Authority Engine's agency training covers how."],
];
const vs = {
  path: "/ai-seo-vs-traditional-seo/",
  title: "AI SEO vs Traditional SEO: What's Different and What Still Matters",
  description: "AI SEO vs traditional SEO compared: goals, ranking signals, content, measurement, and how to do both. A clear guide from AI Authority Engine and Cory Long.",
  h1: "AI SEO vs Traditional SEO",
  crumb: "AI SEO vs SEO",
  type: "Article",
  faqs: vsFaqs,
  sources: [GAI, HELP, BING],
  body: `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Comparison</p>
    <h1>AI SEO vs Traditional SEO</h1>
    <p class="lede">Search is moving from ten blue links to one confident answer. Here's what changes, and what doesn't.</p>
  </div>
</section>
<section class="wrap answer-box">
  <h2>The short answer</h2>
  <p><strong>Traditional SEO gets web pages ranked in search results; AI SEO gets a business named and recommended inside AI-generated answers.</strong> Traditional SEO focuses on pages, keywords, and links. AI SEO focuses on entities, consistent facts, answer-first content, structured data, and corroboration from other trusted sources. The two work together: AI systems still depend on a crawlable, well-built website.</p>
</section>
<section class="wrap prose">
  ${takeaways([
    "AI SEO builds on traditional SEO; it doesn't replace it.",
    "Success shifts from rank positions and clicks to mentions, citations, and recommendations.",
    "Off-site corroboration (reviews, press, directories, mentions) matters more in AI search.",
    "Measure AI visibility by asking AI assistants your customers' questions every month.",
  ])}

  <h2>Side-by-side comparison</h2>
  <table class="compare">
    <thead><tr><th></th><th>Traditional SEO</th><th>AI SEO</th></tr></thead>
    <tbody>
      <tr><td>Goal</td><td>Rank pages in search results</td><td>Be named and recommended in AI answers</td></tr>
      <tr><td>Where results appear</td><td>Google and Bing results pages</td><td>ChatGPT, Gemini, Perplexity, Copilot, Claude, Google AI Overviews and AI Mode</td></tr>
      <tr><td>Core unit</td><td>Keywords and pages</td><td>Entities (businesses, people, products) and facts</td></tr>
      <tr><td>Key signals</td><td>Relevance, backlinks, technical health, page experience</td><td>Entity clarity, consistency, corroboration, reviews, structured data, answer-ready content</td></tr>
      <tr><td>Content style</td><td>Keyword-targeted pages</td><td>Answer-first pages that state facts plainly</td></tr>
      <tr><td>Off-site work</td><td>Link building</td><td>Mentions, citations, reviews, profiles, PR, and links</td></tr>
      <tr><td>Measurement</td><td>Rankings, traffic, clicks</td><td>Share of AI mentions and recommendations for target questions</td></tr>
      <tr><td>Speed of change</td><td>Weeks to months</td><td>Weeks for search-connected answers; slower for model knowledge</td></tr>
    </tbody>
  </table>

  <h2>What still matters from traditional SEO</h2>
  <ul class="checks">
    <li>A fast, crawlable website with clear structure and internal links</li>
    <li>Helpful, original content written for people</li>
    <li>Being indexed by Google and Bing. Many AI assistants search the web through them.</li>
    <li>Quality backlinks, which also act as independent mentions</li>
  </ul>

  <h2>What's new in AI SEO</h2>
  <ul class="checks">
    <li><strong>Entity definition:</strong> one consistent name, description, and set of facts everywhere</li>
    <li><strong>Answer-first writing:</strong> the answer in the first sentence, so AI can quote it</li>
    <li><strong>Structured data:</strong> Organization, Person, Service, and FAQ schema that machines can read</li>
    <li><strong>Corroboration:</strong> independent sources that confirm what you say about yourself</li>
    <li><strong>AI crawler access:</strong> allowing bots like OAI-SearchBot and GPTBot</li>
    <li><strong>AI visibility audits:</strong> tracking what assistants actually say</li>
  </ul>

  <h2>How to do both</h2>
  <p>Treat traditional SEO as the foundation and AI SEO as the layer that turns visibility into recommendations. The <a href="/ai-seo-certification/">AI SEO certification</a> from AI Authority Engine teaches the full stack, and the <a href="/ai-seo-glossary/">AI SEO glossary</a> defines every term used here.</p>
</section>
<div class="wrap">${faqHtml(vsFaqs, "AI SEO vs SEO: FAQ")}</div>
${cta()}
`,
};

// ------------------------------------------------------------------ Pricing
// Example pricing for teaching purposes. TODO: confirm or replace with Cory's recommended numbers.
const P = {
  audit: "$500–$1,500",
  setup: "$1,500–$5,000",
  retainer: "$750–$3,000+ per month",
};
const priceFaqs = [
  ["How much should I charge for AI SEO?", `Price AI SEO in three tiers: a one-time AI visibility audit (for example ${P.audit}), a one-time setup project (for example ${P.setup}), and an ongoing monthly retainer (for example ${P.retainer}). Adjust for the client's industry, competition, number of locations, and the value of a new customer.`],
  ["Should AI SEO be priced hourly or by project?", "Package it. Productized offers (audit, setup, retainer) are easier to sell, easier to deliver consistently, and tie the price to business value rather than hours."],
  ["Can I bundle AI SEO with traditional SEO?", "Yes. Many agencies offer AI SEO as a premium tier on top of an existing SEO retainer, or include AI visibility reporting in every SEO package."],
  ["What justifies the price of AI SEO?", "The value of being one of the few businesses an AI assistant recommends. For industries where a single customer is worth thousands of dollars, a handful of extra customers covers the cost."],
];
const pricing = {
  path: "/how-much-to-charge-for-ai-seo/",
  title: "How Much to Charge for AI SEO: Pricing Packages for Agencies",
  description: "How much to charge for AI SEO services: audit, setup, and retainer pricing models, what to include, and how to justify the price. A guide from AI Authority Engine.",
  h1: "How Much to Charge for AI SEO",
  crumb: "AI SEO Pricing",
  type: "Article",
  faqs: priceFaqs,
  sources: [GAI],
  body: `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Agency pricing guide</p>
    <h1>How Much to Charge for AI SEO</h1>
    <p class="lede">A simple, three-tier pricing model that's easy to sell and easy to deliver.</p>
  </div>
</section>
<section class="wrap answer-box">
  <h2>The short answer</h2>
  <p><strong>Price AI SEO as three packages: a one-time AI visibility audit, a one-time setup project, and a monthly retainer.</strong> As a starting point, many agencies price an audit around ${P.audit}, setup around ${P.setup}, and ongoing work around ${P.retainer}, then adjust for industry, competition, locations, and customer value. These ranges are examples, not market data.</p>
</section>
<section class="wrap prose">
  ${takeaways([
    "Sell packages, not hours.",
    "Use a paid audit as the entry offer. It qualifies buyers and sells the next step.",
    "Recurring retainers are where AI SEO agencies build stable revenue.",
    "Price on the value of being recommended, not on the time it takes.",
  ])}

  <h2>The three-tier AI SEO pricing model</h2>
  <table>
    <thead><tr><th>Package</th><th>What's included</th><th>Example price</th></tr></thead>
    <tbody>
      <tr><td><strong>AI Visibility Audit</strong></td><td>What ChatGPT, Gemini, Perplexity, and Google AI Overviews say about the business and competitors; entity, schema, and content gap analysis; prioritized fix list</td><td>${P.audit} one-time</td></tr>
      <tr><td><strong>AI Authority Setup</strong></td><td>Entity and profile cleanup, structured data, answer-first core pages, FAQ content, AI crawler access, baseline tracking</td><td>${P.setup} one-time</td></tr>
      <tr><td><strong>AI Authority Retainer</strong></td><td>Ongoing answer content, reviews program, citations and mentions, digital PR, monthly AI visibility reporting</td><td>${P.retainer}</td></tr>
    </tbody>
  </table>
  <p class="small">Example ranges for illustration. Set your own prices based on your market and results.</p>

  <h2>What affects the price</h2>
  <ul class="checks">
    <li><strong>Customer value:</strong> a law firm or roofer can justify more than a coffee shop</li>
    <li><strong>Competition:</strong> crowded markets need more authority-building</li>
    <li><strong>Locations and service lines:</strong> each adds entities, pages, and profiles</li>
    <li><strong>Starting point:</strong> inconsistent facts and no schema mean more setup work</li>
    <li><strong>Reporting depth:</strong> number of questions and AI platforms tracked monthly</li>
  </ul>

  <h2>How to present the price</h2>
  <p>Start with the audit results: show the prospect which competitors AI assistants recommend instead of them. Then frame the setup and retainer as the plan to change that answer. See <a href="/how-to-get-clients-for-an-ai-seo-agency/">how to get clients for an AI SEO agency</a> for the full sales conversation.</p>

  <h2>Learn the full agency model</h2>
  <p>AI Authority Engine's <a href="/ai-seo-agency-training/">AI SEO agency training</a> covers packaging, pricing, proposals, and delivery, and leads to the Certified AI Authority Specialist credential. New to agencies? Start with <a href="/how-to-start-an-ai-seo-agency/">how to start an AI SEO agency</a>.</p>
</section>
<div class="wrap">${faqHtml(priceFaqs, "AI SEO pricing: FAQ")}</div>
${cta()}
`,
};

// ------------------------------------------------------------------ Tools
const toolFaqs = [
  ["What tools do I need for AI SEO?", "At minimum: the AI assistants themselves (ChatGPT, Gemini, Perplexity, Copilot, Claude) for visibility audits, Google Search Console and Bing Webmaster Tools for indexing, a structured data validator, and a spreadsheet to track AI answers over time."],
  ["Is there one tool that does AI SEO?", "No single tool does it all. AI SEO combines auditing, entity and profile management, structured data, content, and off-site authority building. Dedicated AI visibility trackers are emerging, but the core process works with free tools."],
  ["Why does Bing matter for AI SEO?", "Several AI assistants, including Microsoft Copilot, draw on Bing's search index, so being indexed and current in Bing helps AI visibility. IndexNow lets you notify Bing instantly when pages change."],
  ["How do I test my schema markup?", "Use the Schema Markup Validator (validator.schema.org) to check structured data is valid, and Google's Rich Results Test to see which rich results it qualifies for."],
];
const tools = {
  path: "/ai-seo-tools/",
  title: "AI SEO Tools: The Essential Toolkit for AI Search Visibility",
  description: "The essential AI SEO tools for auditing AI visibility, indexing, structured data, and tracking: mostly free. A practical toolkit from AI Authority Engine.",
  h1: "AI SEO Tools",
  crumb: "AI SEO Tools",
  type: "Article",
  faqs: toolFaqs,
  sources: [OAI, BING, INDEXNOW, SCHEMA, GAI],
  body: `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Toolkit</p>
    <h1>AI SEO Tools</h1>
    <p class="lede">You don't need an expensive stack to start. Here's the essential, mostly free, AI SEO toolkit.</p>
  </div>
</section>
<section class="wrap answer-box">
  <h2>The short answer</h2>
  <p><strong>The essential AI SEO tools are the AI assistants themselves for auditing, Google Search Console and Bing Webmaster Tools for indexing, a structured data validator, and a simple tracker for AI answers.</strong> Most are free. What matters more than tools is a repeatable process: audit, fix entity and content gaps, build corroboration, and re-measure monthly.</p>
</section>
<section class="wrap prose">
  ${takeaways([
    "Audit with the AI assistants your customers actually use.",
    "Get indexed and current in both Google and Bing.",
    "Validate every piece of structured data you publish.",
    "Track the same questions monthly in a spreadsheet to measure progress.",
  ])}

  <h2>1. AI visibility auditing</h2>
  <ul class="checks">
    <li><strong>ChatGPT, Gemini, Perplexity, Microsoft Copilot, and Claude:</strong> ask the questions customers ask and record which businesses are named and which sources are cited</li>
    <li><strong>Google AI Overviews and AI Mode:</strong> check which pages Google cites for your target questions</li>
    <li><strong>A tracking spreadsheet:</strong> question, platform, date, businesses mentioned, sources cited</li>
  </ul>

  <h2>2. Indexing and crawl access</h2>
  <ul class="checks">
    <li><strong>Google Search Console:</strong> indexing status, sitemaps, and search performance</li>
    <li><strong>Bing Webmaster Tools:</strong> Bing indexing, which powers Microsoft Copilot and is used by other AI search tools</li>
    <li><strong>IndexNow:</strong> instantly notify participating search engines when pages change</li>
    <li><strong>robots.txt:</strong> confirm AI crawlers like OAI-SearchBot, GPTBot, ClaudeBot, and PerplexityBot are allowed</li>
  </ul>

  <h2>3. Structured data</h2>
  <ul class="checks">
    <li><strong>Schema.org:</strong> the vocabulary reference for Organization, Person, LocalBusiness, Service, and FAQ markup</li>
    <li><strong>Schema Markup Validator</strong> (validator.schema.org): checks markup is valid</li>
    <li><strong>Google Rich Results Test:</strong> shows which rich results a page qualifies for</li>
  </ul>

  <h2>4. Entity and reputation</h2>
  <ul class="checks">
    <li><strong>Google Business Profile</strong> and <strong>Bing Places</strong> for local businesses</li>
    <li><strong>Industry directories and review platforms</strong> relevant to the client's field</li>
    <li><strong>Google Alerts:</strong> monitor new mentions of the business and its people</li>
  </ul>

  <h2>5. Content</h2>
  <ul class="checks">
    <li><strong>Customer question research:</strong> sales calls, support emails, reviews, and "People also ask"</li>
    <li><strong>An llms.txt file:</strong> a plain-text summary of the site for AI systems</li>
  </ul>

  <h2>Tools are the easy part</h2>
  <p>The difference between results and noise is knowing what to fix first. The <a href="/ai-seo-training/">AI SEO training</a> from AI Authority Engine turns these tools into a step-by-step client process. New to the terms? See the <a href="/ai-seo-glossary/">AI SEO glossary</a>.</p>
</section>
<div class="wrap">${faqHtml(toolFaqs, "AI SEO tools: FAQ")}</div>
${cta()}
`,
};

module.exports = [vs, pricing, tools];
