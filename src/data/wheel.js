// The AI Authority Wheel: AI Authority Engine's teaching framework for how AI decides
// which businesses get chosen. Text only. The original wheel graphic is internal
// course material and must not be published.
module.exports = {
  name: "The AI Authority Wheel",
  tagline: "How AI decides who gets chosen",
  center: {
    name: "Entity",
    parts: ["Who you are", "What you do", "Who you serve", "Where you are"],
    text: "Everything starts with the entity at the center: a clear, consistent definition of who the business is, what it does, who it serves, and where it operates. AI systems can only recommend a business they can confidently identify.",
  },
  spokes: [
    {
      name: "Entity Explanation",
      slug: "entity-explanation",
      text: "Explaining the business in plain, consistent language that AI systems can understand and repeat: the same name, description, services, and audience on the website and everywhere else.",
      teaches: ["Writing a clear entity description", "Consistent naming, categories, and service definitions", "About and service pages AI can quote"],
    },
    {
      name: "Authority Demonstration",
      slug: "authority-demonstration",
      text: "Showing expertise on the business's own channels: credentials, experience, results, case studies, and original, helpful content.",
      teaches: ["Expert bios and credentials", "Case studies and proof of results", "Original content that demonstrates expertise"],
    },
    {
      name: "External Authority",
      slug: "external-authority",
      text: "Earning validation from independent sources: press coverage, brand mentions, citations, podcast appearances, and links from trusted sites.",
      teaches: ["Press releases and media coverage", "Brand mentions and citations", "Knowledge-base entries such as Wikidata"],
    },
    {
      name: "Reviews & Reputation",
      slug: "reviews-reputation",
      text: "Building a steady record of detailed, recent reviews on trusted platforms, and a reputation AI assistants feel safe recommending.",
      teaches: ["Review generation systems", "Responding to and managing reviews", "Reputation signals across platforms"],
    },
    {
      name: "Presence & Consistency",
      slug: "presence-consistency",
      text: "Being present on the platforms and listings AI systems check, with identical, up-to-date facts everywhere the business appears.",
      teaches: ["Profiles, listings, and directories", "Google Maps and local presence", "Keeping facts consistent and current"],
    },
    {
      name: "Engagement Confirmation",
      slug: "engagement-confirmation",
      text: "Showing real, ongoing activity and engagement, such as customer interactions, social activity, and community discussion, that confirms the business is active and trusted.",
      teaches: ["Social and community engagement", "Platforms such as Reddit and Meta", "Signals that show a business is active"],
    },
    {
      name: "Topical Alignment",
      slug: "topical-alignment",
      text: "Aligning content with the exact topics and questions the business wants to be chosen for, so AI systems connect the business to those queries.",
      teaches: ["Mapping the questions customers ask AI", "Answer-first pages built for AI visibility", "Content clusters around core services"],
    },
    {
      name: "Schema & Data",
      slug: "schema-data",
      text: "Adding structured data that tells machines exactly who the business is, what it offers, and how it connects to people, places, and other entities.",
      teaches: ["Organization, Person, and Service schema", "FAQ and review markup", "Connecting entities with sameAs links"],
    },
  ],
};
