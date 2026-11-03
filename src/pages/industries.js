const { faqHtml, cta, site } = require("../layout");

const industries = [
  {
    slug: "law-firms",
    name: "Law Firms",
    noun: "law firm",
    who: "attorneys and law firms",
    schema: "LegalService and Attorney",
    schemaUrl: "https://schema.org/LegalService",
    questions: [
      "Who is the best personal injury lawyer near me?",
      "Do I need a lawyer for a car accident claim?",
      "What does a divorce attorney cost in my area?",
      "Which estate planning attorney has the best reviews?",
    ],
    sources: ["Avvo", "Justia", "Martindale-Hubbell", "your state bar directory", "Google Business Profile", "local news and legal publications"],
    tips: [
      "Make every attorney a clear entity: a bio page with practice areas, bar admissions, education, and Person schema.",
      "Publish answer-first pages for each practice area and the questions clients ask before hiring.",
      "Keep firm name, address, and phone identical across the website, Google Business Profile, Avvo, Justia, and the state bar listing.",
      "Earn detailed reviews and independent mentions such as case results coverage, legal publications, and community involvement.",
    ],
    note: "Follow your jurisdiction's attorney advertising rules when publishing reviews, results, and claims.",
  },
  {
    slug: "dentists",
    name: "Dentists",
    noun: "dental practice",
    who: "dentists and dental practices",
    schema: "Dentist",
    schemaUrl: "https://schema.org/Dentist",
    questions: [
      "Who is the best dentist near me that takes my insurance?",
      "Which dentist is good for anxious patients?",
      "Where can I get same-day dental crowns?",
      "Best cosmetic dentist for veneers in my area?",
    ],
    sources: ["Google Business Profile", "Healthgrades", "Zocdoc", "Yelp", "the ADA Find-a-Dentist directory", "insurance provider directories"],
    tips: [
      "Use Dentist schema with services, accepted insurance, hours, and each dentist as a Person with credentials.",
      "Create answer-first service pages (implants, Invisalign, emergency care) that state prices or ranges, insurance, and what to expect.",
      "Keep practice details identical across Google, Healthgrades, Zocdoc, and insurance directories.",
      "Build a steady flow of detailed patient reviews that mention specific services.",
    ],
    note: "Never publish protected health information in reviews, testimonials, or case studies.",
  },
  {
    slug: "home-services",
    name: "Home Services",
    noun: "home service business",
    who: "roofers, plumbers, HVAC, electricians, and other home service businesses",
    schema: "HomeAndConstructionBusiness (RoofingContractor, Plumber, HVACBusiness, Electrician)",
    schemaUrl: "https://schema.org/HomeAndConstructionBusiness",
    questions: [
      "Who is the best roofing company near me?",
      "Which plumber offers 24/7 emergency service in my area?",
      "Is it worth repairing or replacing my AC unit?",
      "Most trusted electrician for panel upgrades near me?",
    ],
    sources: ["Google Business Profile", "Angi", "Yelp", "the Better Business Bureau", "Nextdoor", "manufacturer-certified contractor directories"],
    tips: [
      "Use the specific schema type (RoofingContractor, Plumber, HVACBusiness, Electrician) with service areas and services.",
      "Publish a page per service and per service area that answers cost, timing, and warranty questions directly.",
      "Keep business name, phone, license numbers, and service areas consistent across every directory.",
      "Ask every customer for a review that mentions the job and location. AI assistants weigh review detail.",
    ],
    note: "List licenses and insurance accurately; they're strong trust signals for both people and AI systems.",
  },
  {
    slug: "real-estate-agents",
    name: "Real Estate Agents",
    noun: "real estate business",
    who: "real estate agents, teams, and brokerages",
    schema: "RealEstateAgent",
    schemaUrl: "https://schema.org/RealEstateAgent",
    questions: [
      "Who is the best real estate agent in my neighborhood?",
      "Which realtor sells homes fastest in my area?",
      "Best buyer's agent for first-time home buyers near me?",
      "Who specializes in luxury homes in my city?",
    ],
    sources: ["Zillow", "Realtor.com", "Homes.com", "Google Business Profile", "your brokerage profile", "local news and community sites"],
    tips: [
      "Use RealEstateAgent schema and Person schema for each agent, linked to the brokerage.",
      "Create neighborhood and buyer/seller guide pages that answer local questions in the first paragraph.",
      "Keep agent name, brokerage, license number, and contact details identical across Zillow, Realtor.com, and the brokerage site.",
      "Collect reviews on multiple platforms and earn local media and community mentions.",
    ],
    note: "Follow brokerage and state licensing rules on advertising and required disclosures.",
  },
];

module.exports = industries.map((x) => {
  const faqs = [
    [`How do ${x.who} get recommended by ChatGPT?`, `To get a ${x.noun} recommended by ChatGPT and other AI assistants, make it a clear, consistent entity across the web, add ${x.schema} structured data, publish answer-first pages for the questions clients ask, and build reviews and mentions on trusted sources such as ${x.sources.slice(0, 3).join(", ")}.`],
    [`What is AI SEO for ${x.name.toLowerCase()}?`, `AI SEO for ${x.name.toLowerCase()} is the practice of making a ${x.noun} easy for AI assistants like ChatGPT, Gemini, Perplexity, and Google AI Overviews to identify, trust, and recommend when people ask for a provider.`],
    [`Which sources matter most for ${x.name.toLowerCase()} in AI search?`, `AI systems cross-check businesses against trusted sources. For ${x.who}, important ones include ${x.sources.join(", ")}.`],
    [`Can an agency offer AI SEO to ${x.name.toLowerCase()}?`, `Yes. ${x.name} are a strong niche for AI SEO agencies because each new client is valuable. AI Authority Engine trains agencies to audit, fix, and report on AI visibility for niches like this.`],
  ];
  return {
    path: `/ai-seo-for-${x.slug}/`,
    title: `AI SEO for ${x.name}: Get Recommended by ChatGPT & AI Search`,
    description: `AI SEO for ${x.name.toLowerCase()}: how ${x.who} get recommended by ChatGPT, Gemini, Perplexity, and Google AI Overviews. A practical guide from AI Authority Engine.`,
    h1: `AI SEO for ${x.name}`,
    crumb: `AI SEO for ${x.name}`,
    type: "Article",
    faqs,
    sources: [
      ["Google Search Central: AI features and your website", "https://developers.google.com/search/docs/appearance/ai-features"],
      [`Schema.org: ${x.schemaUrl.split("/").pop()}`, x.schemaUrl],
      ["OpenAI: Overview of OpenAI crawlers", "https://platform.openai.com/docs/bots"],
    ],
    body: `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Industry guide</p>
    <h1>AI SEO for ${x.name}</h1>
    <p class="lede">When clients ask an AI assistant who to hire, it names a few ${x.who.split(",")[0]}. Here's how to be one of them.</p>
  </div>
</section>
<section class="wrap answer-box">
  <h2>The short answer</h2>
  <p><strong>${x.name} get recommended by AI assistants by being clear, consistent, and well-corroborated entities.</strong> That means identical business facts everywhere, ${x.schema} structured data, answer-first pages for the questions clients ask, and strong reviews and mentions on trusted sources like ${x.sources.slice(0, 3).join(", ")}.</p>
</section>
<section class="wrap prose">
  <div class="takeaways">
    <h2>Key takeaways</h2>
    <ul class="checks">
      ${x.tips.map((t) => `<li>${t}</li>`).join("\n      ")}
    </ul>
  </div>

  <h2>Questions clients ask AI assistants</h2>
  <ul>
    ${x.questions.map((q) => `<li>"${q}"</li>`).join("\n    ")}
  </ul>
  <p>Ask these in ChatGPT, Gemini, and Perplexity and note which ${x.noun}s are named and which sources are cited. That's your AI visibility baseline.</p>

  <h2>Sources AI systems check for ${x.name.toLowerCase()}</h2>
  <p>AI assistants favor businesses that multiple independent sources agree on. For ${x.who}, prioritize:</p>
  <ul class="checks">
    ${x.sources.map((s) => `<li>${s.charAt(0).toUpperCase() + s.slice(1)}</li>`).join("\n    ")}
  </ul>

  <h2>A 30-day AI SEO plan</h2>
  <ol class="steps">
    <li><h3>Week 1: Audit</h3><p>Run the client questions above across AI assistants and record results. Check robots.txt allows AI crawlers.</p></li>
    <li><h3>Week 2: Entity cleanup</h3><p>Standardize name, description, and contact details across the website and every source listed above.</p></li>
    <li><h3>Week 3: Structured data and content</h3><p>Add ${x.schema} and Person schema, then rewrite key pages answer-first with an FAQ section.</p></li>
    <li><h3>Week 4: Authority</h3><p>Launch a review request process and pursue two to three independent mentions. Re-run the audit monthly.</p></li>
  </ol>
  <p class="small">${x.note}</p>

  <h2>For agencies serving ${x.name.toLowerCase()}</h2>
  <p>${x.name} are a strong niche for AI SEO agencies. AI Authority Engine teaches the full audit, setup, and retainer model in its <a href="/ai-seo-agency-training/">AI SEO agency training</a>. See also <a href="/how-much-to-charge-for-ai-seo/">how much to charge for AI SEO</a> and <a href="/how-to-get-a-business-recommended-by-chatgpt/">how to get a business recommended by ChatGPT</a>.</p>
</section>
<div class="wrap">${faqHtml(faqs, `AI SEO for ${x.name.toLowerCase()}: FAQ`)}</div>
${cta()}
`,
  };
});
