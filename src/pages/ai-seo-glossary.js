const { cta, site } = require("../layout");

const terms = [
  ["AI SEO", "The practice of making a business easy for AI systems to identify, understand, trust, and recommend. AI SEO combines entity optimization, structured data, authority building, and answer-first content so a business appears in responses from ChatGPT, Gemini, Perplexity, Claude, Copilot, and Google AI Overviews."],
  ["Answer engine", "A system that responds to a question with a direct answer rather than a list of links. Examples include ChatGPT, Perplexity, Google AI Overviews, Gemini, Microsoft Copilot, Siri, and Alexa."],
  ["Answer engine optimization (AEO)", "Structuring content and a business's online presence so answer engines select it as the direct answer to a question."],
  ["Generative engine optimization (GEO)", "Optimizing a business's presence so it is included, cited, and recommended in AI-generated responses from large language models."],
  ["LLM SEO", "Another name for AI SEO or GEO, focused on visibility in large language model (LLM) assistants."],
  ["AI visibility", "How often, and how favorably, a business is mentioned, cited, or recommended by AI assistants for the questions its customers ask."],
  ["AI visibility audit", "A structured test of what AI assistants currently say about a business and its competitors, used to find gaps and track progress over time."],
  ["Entity", "A uniquely identifiable thing, such as a business, person, product, or place, that search engines and AI systems recognize and connect to facts."],
  ["Entity SEO", "Making an entity unambiguous and consistent across the web so search engines and AI systems can confidently identify it and connect it to the right facts."],
  ["Knowledge graph", "A database of entities and the relationships between them, used by search engines and AI systems to understand the world."],
  ["Structured data (schema markup)", "Machine-readable code, usually JSON-LD using the Schema.org vocabulary, that describes who a business is, what it offers, and who is behind it."],
  ["sameAs", "A Schema.org property linking an entity to its official profiles elsewhere (for example LinkedIn or Wikipedia), helping machines confirm that they all describe the same entity."],
  ["Corroboration", "Agreement among multiple independent, trustworthy sources about a fact. AI systems favor information that is corroborated."],
  ["Citation (AI)", "A source that an AI assistant links to or references when generating an answer."],
  ["Retrieval-augmented generation (RAG)", "A technique in which an AI system retrieves relevant documents, often from a live web search, and uses them to generate an answer."],
  ["llms.txt", "A proposed plain-text file at the root of a website that summarizes the site and links its most important pages for large language models."],
  ["AI crawler", "A bot that fetches web pages for AI systems, such as OpenAI's OAI-SearchBot and GPTBot, Anthropic's ClaudeBot, and PerplexityBot."],
  ["Zero-click search", "A search where the user gets their answer directly on the results page or in an AI response without clicking through to a website."],
  ["AI Overviews", "Google's AI-generated summaries shown at the top of some search results, which cite supporting web pages."],
  ["E-E-A-T", "Experience, Expertise, Authoritativeness, and Trustworthiness: Google's framework for evaluating content quality, closely related to the trust signals AI systems use."],
];

const slug = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

module.exports = {
  path: "/ai-seo-glossary/",
  title: "AI SEO Glossary: AEO, GEO, Entity SEO & AI Search Terms Defined",
  description:
    "Plain-English definitions of AI SEO terms: answer engine optimization, generative engine optimization, entities, schema, llms.txt, AI visibility, and more. From AI Authority Engine.",
  h1: "AI SEO Glossary",
  crumb: "AI SEO Glossary",
  sources: [
    ["Google Search Central: AI features and your website", "https://developers.google.com/search/docs/appearance/ai-features"],
    ["Schema.org", "https://schema.org/Organization"],
    ["llms.txt proposal", "https://llmstxt.org/"],
    ["OpenAI: Overview of OpenAI crawlers", "https://platform.openai.com/docs/bots"],
  ],
  schema: [
    {
      "@type": "DefinedTermSet",
      "@id": site.url + "/ai-seo-glossary/#glossary",
      name: "AI SEO Glossary",
      publisher: { "@id": site.url + "/#organization" },
      hasDefinedTerm: terms.map(([name, description]) => ({
        "@type": "DefinedTerm",
        "@id": site.url + "/ai-seo-glossary/#" + slug(name),
        name,
        description,
        inDefinedTermSet: { "@id": site.url + "/ai-seo-glossary/#glossary" },
      })),
    },
  ],
  body: `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Reference</p>
    <h1>AI SEO Glossary</h1>
    <p class="lede">Clear definitions of the terms behind AI search, answer engine optimization, and AI visibility.</p>
  </div>
</section>

<section class="wrap answer-box">
  <h2>What is AI SEO?</h2>
  <p><strong>AI SEO is the practice of making a business easy for AI systems to identify, understand, trust, and recommend.</strong> It includes answer engine optimization (AEO), generative engine optimization (GEO), entity SEO, and structured data. AI Authority Engine teaches these skills in its <a href="/ai-seo-certification/">AI SEO certification</a>, taught by Cory Long.</p>
</section>

<section class="wrap prose">
  <dl class="glossary">
    ${terms
      .map(([t, d]) => `<dt id="${slug(t)}"><h2>${t}</h2></dt>\n    <dd><p>${d}</p></dd>`)
      .join("\n    ")}
  </dl>
  <p>Ready to put these concepts to work? Start with <a href="/how-to-get-a-business-recommended-by-chatgpt/">how to get a business recommended by ChatGPT</a>, or see the full <a href="/ai-seo-training/">AI SEO training</a>.</p>
</section>
${cta()}
`,
};
