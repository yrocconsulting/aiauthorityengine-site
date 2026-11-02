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
    credential: "AI Authority Engine Certified AI SEO Specialist",
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
      "https://sotellus.com/reviews/cory-long/",
    ],
    worksFor: "Yroc Consulting",
    homeLocation: "Sherman, Texas",
    book: { name: "To Love Is To Give", url: "https://toloveistogive.org/" },
    podcast: {
      name: "E-Forge Podcast with Cory Long",
      url: "https://corylong.org/e-forge-podcast/",
      apple: "https://podcasts.apple.com/us/podcast/e-forge-with-cory-long/id1823417933",
      spotify: "https://open.spotify.com/show/4aZD9YaIr5OttNLce5iGOm",
    },
    digitalStorefronts: "https://corylong.org/ministry/digital-storefronts-gives-back/",
  },

  // TODO: add official AI Authority Engine social / directory profiles.
  orgSameAs: [],
};
