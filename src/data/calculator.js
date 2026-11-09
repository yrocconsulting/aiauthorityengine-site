// AI Visibility Calculator: questions, scoring, tiers. Built on the AI Authority Wheel.
// Scored single-choice questions: options score 0-4 in order, scaled to `weight`.
// Select-all questions: score by how many real options are ticked (see countScale).
module.exports = {
  dimensions: {
    entity: {
      label: "Entity Clarity",
      points: 20,
      wheel: "Entity Explanation · Presence & Consistency",
      fix: "Make your business one clear, consistent entity: identical name, description, and details everywhere, a clear statement of who you serve and where, and complete profiles on the platforms AI checks.",
    },
    content: {
      label: "Content & Topical Alignment",
      points: 20,
      wheel: "Topical Alignment",
      fix: "Map the exact questions customers ask AI, then publish answer-first pages and FAQs that answer them in the first sentence, and keep them fresh.",
    },
    technical: {
      label: "Technical & Schema",
      points: 15,
      wheel: "Schema & Data",
      fix: "Add validated Organization, Service, FAQ, and Person schema with sameAs links, confirm AI crawlers are allowed, and keep your site fast and indexed in Google and Bing.",
    },
    authority: {
      label: "Authority & Reputation",
      points: 25,
      wheel: "Authority Demonstration · External Authority · Reviews & Reputation",
      fix: "Build proof AI can verify: a steady flow of detailed reviews, independent press and brand mentions, and visible credentials, case studies, and results.",
    },
    engagement: {
      label: "AI Visibility & Engagement",
      points: 20,
      wheel: "Engagement Confirmation",
      fix: "Start tracking what ChatGPT, Gemini, and Perplexity say about you every month, and build real engagement on the social and community platforms AI pays attention to.",
    },
  },

  // Recommended requires these dimensions at 70%+, otherwise capped at Recognized.
  gates: ["entity", "authority", "engagement"],

  tiers: [
    { id: "invisible", min: 0, label: "Invisible", text: "AI assistants likely can't identify or trust this business enough to recommend it yet. The good news: every gap is fixable." },
    { id: "emerging", min: 26, label: "Emerging", text: "AI can find pieces of this business, but gaps in identity, authority, or content make it hard to recommend with confidence." },
    { id: "recognized", min: 51, label: "Recognized", text: "Solid foundations. AI recognizes this business, and closing the remaining gaps can move it into consistent recommendations." },
    { id: "recommended", min: 80, label: "Recommended", text: "Strong across the AI Authority Wheel. This business is well positioned to be recommended by AI assistants. Keep strengthening and measuring." },
  ],

  sections: [
    {
      id: "profile",
      label: "About you",
      questions: [
        { id: "role", title: "Which best describes you?", type: "radio", options: ["Business owner or executive", "In-house marketer", "Agency owner or freelancer", "Consultant or other"] },
        { id: "business_type", title: "What type of business is this assessment for?", type: "radio", options: ["Local service business", "Professional services (legal, medical, financial)", "E-commerce or retail", "B2B / SaaS", "Other"] },
        { id: "size", title: "How many people work at the business?", type: "radio", options: ["1-5", "6-25", "26-100", "101-500", "500+"] },
      ],
    },
    {
      id: "entity",
      label: "Entity Clarity",
      questions: [
        { id: "e1", dimension: "entity", weight: 8, type: "radio", title: "How consistent are your business name, description, and contact details across your website and online profiles?", options: ["Very inconsistent, or we don't know", "Some major differences", "Mostly consistent, with a few differences", "Consistent on all major profiles", "Identical everywhere, and checked regularly"] },
        { id: "e2", dimension: "entity", weight: 6, type: "radio", title: "Does your website clearly state who you are, what you do, who you serve, and where you operate?", options: ["Not really", "Partly, but it's scattered", "Yes, on the homepage", "Yes, on the homepage and a detailed About page", "Yes, consistently across every key page"] },
        { id: "e3", dimension: "entity", weight: 6, type: "checkbox", title: "Which profiles has your business claimed and completed?", helper: "Select all that apply.", none: "None of these", options: ["Google Business Profile", "Bing Places", "LinkedIn company page", "Industry directories", "Wikidata entry", "Crunchbase or similar business database", "None of these"] },
      ],
    },
    {
      id: "content",
      label: "Content & Topical Alignment",
      questions: [
        { id: "c1", dimension: "content", weight: 8, type: "radio", title: "Do your main pages answer customer questions directly in the first paragraph?", options: ["No", "A few pages do", "About half of them", "Most key pages do", "All key pages, plus dedicated FAQ content"] },
        { id: "c2", dimension: "content", weight: 6, type: "radio", title: "How well does your content cover the specific questions you want to be recommended for?", options: ["We haven't mapped those questions", "Some general content", "A page for each core service", "Service pages plus supporting articles", "Complete topic coverage built from real customer questions"] },
        { id: "c3", dimension: "content", weight: 6, type: "radio", title: "How often do you publish or update content?", options: ["Rarely or never", "A few times a year", "About monthly", "Several times a month", "Weekly or more, with regular updates to key pages"] },
      ],
    },
    {
      id: "technical",
      label: "Technical & Schema",
      questions: [
        { id: "t1", dimension: "technical", weight: 7, type: "radio", title: "Does your website use structured data (schema markup)?", options: ["No, or not sure", "Only basic plugin defaults", "Organization or LocalBusiness schema", "Plus Service, FAQ, and Person schema", "Comprehensive, validated schema with sameAs links to official profiles"] },
        { id: "t2", dimension: "technical", weight: 4, type: "radio", title: "Can AI crawlers (like OAI-SearchBot, GPTBot, ClaudeBot, and PerplexityBot) access your site?", options: ["Not sure", "We may be blocking some", "Default settings, never checked", "Confirmed the major AI crawlers are allowed", "Allowed, plus a sitemap and llms.txt"] },
        { id: "t3", dimension: "technical", weight: 4, type: "radio", title: "How fast and easy to crawl is your website?", options: ["Slow or hard to crawl, or not sure", "Some known issues", "About average", "Fast, with a clean structure", "Fast, mobile-friendly, and monitored in Google Search Console and Bing Webmaster Tools"] },
      ],
    },
    {
      id: "authority",
      label: "Authority & Reputation",
      questions: [
        { id: "a1", dimension: "authority", weight: 8, type: "radio", title: "Which best describes your reviews on trusted platforms?", options: ["None, or very few", "A handful, mostly old", "A steady flow on one platform", "Steady, recent reviews on several platforms", "Strong, detailed, recent reviews across all key platforms"] },
        { id: "a2", dimension: "authority", weight: 7, type: "radio", title: "In the last 12 months, how many times has your business been mentioned by independent sources (press, podcasts, industry or partner sites)?", options: ["None", "1-2", "3-5", "6-10", "More than 10, including recognized outlets"] },
        { id: "a3", dimension: "authority", weight: 5, type: "checkbox", title: "How do you demonstrate expertise on your own website and channels?", helper: "Select all that apply.", none: "None of these", options: ["Team bios with credentials", "Case studies or results", "Original research or data", "Awards, certifications, or memberships", "Expert articles, videos, or a podcast", "None of these"] },
        { id: "a4", dimension: "authority", weight: 5, type: "radio", title: "How do you manage your online reputation?", options: ["We don't actively manage it", "We react occasionally", "We respond to most reviews", "We run an active review-request program", "Systematic review generation, responses, and monitoring"] },
      ],
    },
    {
      id: "engagement",
      label: "AI Visibility & Engagement",
      questions: [
        { id: "v1", dimension: "engagement", weight: 8, type: "radio", title: "When you ask ChatGPT, Gemini, or Perplexity for the best provider of what you offer, is your business mentioned?", options: ["We've never checked", "No, we're not mentioned", "Sometimes, on some platforms", "Yes, on most platforms", "Consistently recommended across platforms"] },
        { id: "v2", dimension: "engagement", weight: 6, type: "radio", title: "How do you track what AI assistants say about your business?", options: ["We don't", "Occasional manual checks", "Monthly manual checks", "Tracked monthly against a set list of questions", "Tracked with tools and reported with action plans"] },
        { id: "v3", dimension: "engagement", weight: 6, type: "radio", title: "How active is your business on social and community platforms (Reddit, Facebook, LinkedIn, YouTube)?", options: ["Not active", "Occasional posts", "Regular posts on one platform", "Active on several platforms, with engagement", "A real community presence, with conversations and mentions"] },
        { id: "self", type: "radio", perception: true, title: "Last one: how visible do you think your business is in AI search today?", helper: "Not scored. We compare it with your calculated score.", options: ["Invisible", "Occasionally mentioned", "Fairly visible", "Consistently recommended"] },
      ],
    },
  ],
};
