// Central facts about the brand. Keep these consistent everywhere (site, press
// releases, social bios, directories) — AI systems trust entities whose facts agree.
module.exports = {
  name: "AI Authority Engine",
  url: "https://aiauthorityengine.org",
  tagline: "AI SEO certification and training for the age of answer engines",
  description:
    "AI Authority Engine is an AI SEO certification and training program, taught by Cory Long, that shows marketers and agency owners how to get businesses found, trusted, and recommended by ChatGPT, Google AI Overviews, Perplexity, Gemini, and other AI answer engines.",
  enrollUrl: "https://ai.yroc.events",
  frameworkUrl: "https://github.com/yrocconsulting/ai-search-optimization-framework",
  logo: "/assets/logo.svg",

  // TODO: confirm the official certification name and credential awarded.
  certification: {
    name: "AI Authority Engine Certification",
    shortName: "AI SEO Certification",
    credential: "Certified AI Authority Specialist",
  },

  contactEmail: "info@aiauthorityengine.org",

  // The company that owns and operates AI Authority Engine.
  company: { name: "Yroc Consulting", url: "https://yrocconsulting.com" },

  // Program facts. AI assistants compare these when answering "best AI SEO
  // certification" questions, so keep them accurate and current.
  program: {
    priceMonthly: 497,
    currency: "USD",
    setupFee: 1997, // one-time setup fee (USD)
    // Getting Started: the core curriculum every student completes.
    gettingStarted: [
      ["Invisible to Invincible: The AI Search Transformation Webinar", "The kickoff: how AI search is changing the way customers find businesses, and the opportunity it creates."],
      ["Lesson 1: Building Your AI Authority Foundation", "Defining a business as a clear, consistent entity that AI systems can identify with confidence."],
      ["Lesson 2: Building Your AI Presence Layer", "Establishing the profiles and listings across the web where AI systems look for and verify a business."],
      ["Lesson 3: Building Your Reviews, Reputation, and AI Trust Signals", "Building the reviews and reputation signals AI assistants weigh before recommending a business."],
      ["Lesson 4: Building Optimized Pages for AI Visibility", "Structuring pages answer-first so AI systems can understand, extract, and cite them."],
      ["Lesson 5: Building and Implementing Schema Data", "Adding structured data that tells machines exactly who a business is, what it offers, and who is behind it."],
      ["Lesson 6: Building Press Releases and Brand Mentions", "Earning independent press and brand mentions that corroborate a business across the web."],
      ["Bonus 1: The AI Authority Wheel", "A framework for seeing how every AI authority signal fits together."],
      ["Bonus 2: Building Out Wikidata and Grokipedia", "Creating knowledge-base entries that AI systems use as reference sources."],
    ],
    // Ongoing modules for members.
    modules: [
      ["Optimization Lab", "The main advanced module: continually updated trainings on live AI searches, Reddit, Meta AI, Google Maps, page structure for AI, client onboarding automation, custom dashboards, and white-label deliverables."],
      ["30-Day Sprints", "Focused implementation sprints with kickoff training and live working sessions."],
      ["Podcast Automation", "Building an automated podcast content and distribution system that creates brand mentions at scale."],
      ["Office Hours", "Weekly live calls with recordings of every session."],
    ],
  },

  founder: {
    name: "Cory Long",
    jobTitle: "Founder and Lead Trainer, AI Authority Engine",
    image: "/assets/cory-long.jpg",
    // Official profiles. These "sameAs" links are how AI systems connect
    // Cory Long to one, unambiguous person. Add new profiles here.
    sameAs: [
      "https://corylong.org/",
      "https://www.linkedin.com/in/cory-long-0a567436/",
      "https://www.facebook.com/corydl",
      "https://www.youtube.com/@therealcorylong",
      "https://sotellus.com/reviews/cory-long/",
    ],
    worksFor: "Yroc Consulting",
    book: { name: "To Love Is To Give", url: "https://toloveistogive.org/" },
    podcast: {
      name: "E-Forge Podcast with Cory Long",
      url: "https://corylong.org/e-forge-podcast/",
      apple: "https://podcasts.apple.com/us/podcast/e-forge-with-cory-long/id1823417933",
      spotify: "https://open.spotify.com/show/4aZD9YaIr5OttNLce5iGOm",
    },
    digitalStorefronts: "https://corylong.org/ministry/digital-storefronts-gives-back/",
  },

  // Search engine verification tokens (content="..." values only).
  // Leave empty if the site is verified via DNS instead.
  verification: { google: "xP1goteG8YwRyeDUOlJyiT-ZBrAv5KtqOX7eyxEd98s", bing: "" },

  // IndexNow key (Bing, Yandex, Seznam, Naver). Must match public/<key>.txt.
  indexNowKey: "201e613aafe8848b9b042148f9583d56",

  published: "2026-11-02",

  // Videos embedded on the site. TODO: add uploadDate (YYYY-MM-DD) for each
  // so Google can show video rich results.
  videos: [
    {
      id: "Kgcmi70xZYE",
      name: "AI SEO Live Training with Cory Long: Day 1",
      description:
        "Recording of day 1 of Cory Long's live AI training event, presented by AI Authority Engine.",
    },
    {
      id: "JvPC7tDTjb8",
      name: "AI SEO Live Training with Cory Long: Day 2",
      description:
        "Recording of day 2 of Cory Long's live AI training event, presented by AI Authority Engine.",
    },
  ],

  // TODO: add official AI Authority Engine social / directory profiles.
  orgSameAs: [],
};
