const site = require("../site.config");

const nav = [
  ["/ai-seo-certification/", "Certification"],
  ["/ai-seo-training/", "Training"],
  ["/how-to-start-an-ai-seo-agency/", "Start an Agency"],
  ["/how-to-get-clients-for-an-ai-seo-agency/", "Get Clients"],
  ["/cory-long/", "Cory Long"],
  ["/ai-visibility-quiz/", "AI Score Quiz"],
  ["/faq/", "FAQ"],
];

const abs = (p) => site.url + p;
const BUILD = Date.now().toString(36);

// Entity graph shared by every page. Stable @ids let each page reference the
// same Organization / Person / Course instead of redefining them.
function baseGraph() {
  const person = {
    "@type": "Person",
    "@id": abs("/cory-long/#person"),
    name: site.founder.name,
    jobTitle: site.founder.jobTitle,
    url: abs("/cory-long/"),
    image: abs(site.founder.image),
    worksFor: [
      { "@id": abs("/#organization") },
      { "@type": "Organization", name: site.founder.worksFor },
    ],
    description:
      "Cory Long is an entrepreneur, author, speaker, business coach, and AI SEO trainer. He is the founder and lead trainer of AI Authority Engine, creator of Digital Storefronts, host of the E-Forge Podcast, and author of To Love Is To Give.",
    knowsAbout: [
      "AI SEO",
      "Answer engine optimization",
      "Generative engine optimization",
      "Entity SEO",
      "Structured data",
      "AI search visibility",
      "Digital marketing agency growth",
      "Digital marketing training",
      "Lead generation",
      "Facebook advertising",
      "Email marketing",
      "Business coaching",
    ],
  };
  if (site.founder.sameAs.length) person.sameAs = site.founder.sameAs;

  const org = {
    "@type": "EducationalOrganization",
    "@id": abs("/#organization"),
    name: site.name,
    url: abs("/"),
    logo: abs(site.logo),
    description: site.description,
    founder: { "@id": abs("/cory-long/#person") },
    sameAs: [site.frameworkUrl, ...site.orgSameAs],
  };

  return [
    org,
    person,
    {
      "@type": "WebSite",
      "@id": abs("/#website"),
      url: abs("/"),
      name: site.name,
      publisher: { "@id": abs("/#organization") },
    },
  ];
}

function courseSchema() {
  return [
    {
      "@type": "Course",
      "@id": abs("/ai-seo-certification/#course"),
      name: site.certification.name,
      alternateName: [
        "AI SEO Certification",
        "AI SEO Training",
        "Answer Engine Optimization Certification",
      ],
      description:
        "An AI SEO certification program that teaches answer engine optimization, entity authority, structured data, and the business systems needed to start and grow an AI SEO agency.",
      url: abs("/ai-seo-certification/"),
      provider: { "@id": abs("/#organization") },
      instructor: { "@id": abs("/cory-long/#person") },
      educationalCredentialAwarded: { "@id": abs("/ai-seo-certification/#credential") },
      inLanguage: "en",
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseWorkload: "Self-paced",
        instructor: { "@id": abs("/cory-long/#person") },
      },
      offers: {
        "@type": "Offer",
        url: site.enrollUrl,
        category: "Paid",
        availability: "https://schema.org/InStock",
      },
      teaches: [
        "AI SEO",
        "Answer engine optimization (AEO)",
        "Generative engine optimization (GEO)",
        "How to get a business recommended by ChatGPT",
        "Entity and knowledge graph optimization",
        "Schema markup for AI search",
        "How to start an AI SEO agency",
        "How to get clients for an AI SEO agency",
      ],
    },
    {
      "@type": "EducationalOccupationalCredential",
      "@id": abs("/ai-seo-certification/#credential"),
      name: site.certification.credential,
      credentialCategory: "certificate",
      recognizedBy: { "@id": abs("/#organization") },
      competencyRequired: [
        "AI SEO strategy",
        "Answer engine optimization",
        "Structured data implementation",
        "AI visibility auditing",
      ],
    },
  ];
}

function videoSchema() {
  return site.videos.map((v) => ({
    "@type": "VideoObject",
    "@id": abs("/videos/#" + v.id),
    name: v.name,
    description: v.description,
    thumbnailUrl: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
    contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
    ...(v.uploadDate ? { uploadDate: v.uploadDate } : {}),
    author: { "@id": abs("/cory-long/#person") },
    publisher: { "@id": abs("/#organization") },
  }));
}

function videosHtml(heading = "Watch Cory Long's live AI training") {
  return `<section class="videos">
  <h2>${heading}</h2>
  <div class="video-grid">
    ${site.videos
      .map(
        (v) => `<figure>
      <div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${v.id}" title="${v.name}" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
      <figcaption><strong>${v.name}</strong><br>${v.description}</figcaption>
    </figure>`
      )
      .join("\n    ")}
  </div>
</section>`;
}

function faqSchema(faqs, path) {
  return {
    "@type": "FAQPage",
    "@id": abs(path + "#faq"),
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a.replace(/<[^>]+>/g, "") },
    })),
  };
}

function faqHtml(faqs, heading = "Frequently asked questions") {
  return `<section class="faq" id="faq">
  <h2>${heading}</h2>
  ${faqs
    .map(
      ([q, a]) => `<details>
    <summary><h3>${q}</h3></summary>
    <p>${a}</p>
  </details>`
    )
    .join("\n  ")}
</section>`;
}

function cta(text = "Enroll in the AI Authority Engine certification") {
  return `<section class="cta">
  <div class="wrap cta-inner">
    <img class="cta-badge tilt" src="/assets/badge-sm.webp" alt="AI Authority Engine certification badge" width="300" height="256" loading="lazy">
    <div>
      <p class="eyebrow">Build · Rank · Grow</p>
      <h2>Ready to get certified in AI SEO?</h2>
      <p>Learn the exact system Cory Long uses to get businesses recommended by AI answer engines, and how to sell it as an agency service.</p>
      <a class="btn btn-lg btn-glow" href="${site.enrollUrl}" rel="noopener">${text}</a>
    </div>
  </div>
</section>`;
}

// Visible author + freshness signals, placed right after the page heading block.
function injectByline(page) {
  if (page.path === "/" || page.path === "/404" || page.path === "/cory-long/") return page.body;
  const d = page.dateModified || site.published;
  const nice = new Date(d + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
  const byline = `<div class="wrap byline"><img src="${site.founder.image}" alt="" width="40" height="40"><p>By <a href="/cory-long/" rel="author">${site.founder.name}</a>, founder of ${site.name} · Updated <time datetime="${d}">${nice}</time></p></div>`;
  // Place after the answer box (or the page heading when there is none).
  const re = page.body.includes('class="wrap answer-box"')
    ? /(<section class="wrap answer-box">[\s\S]*?<\/section>)/
    : /(<\/section>)/;
  return page.body.replace(re, `$1\n${byline}`);
}

function sourcesHtml(page) {
  if (!page.sources) return "";
  return `<section class="wrap sources"><h2>Sources and further reading</h2><ul>${page.sources
    .map(([name, url]) => `<li><a href="${url}" rel="noopener">${name}</a></li>`)
    .join("")}</ul></section>`;
}

function render(page) {
  const url = abs(page.path);
  const graph = [...baseGraph()];
  graph.push({
    "@type": page.type || "WebPage",
    "@id": url + "#webpage",
    url,
    name: page.title,
    description: page.description,
    isPartOf: { "@id": abs("/#website") },
    about: { "@id": abs(page.about || "/#organization") },
    ...(page.type === "Article"
      ? {
          headline: page.h1,
          mainEntityOfPage: { "@id": url + "#webpage" },
          image: abs("/assets/og.jpg"),
          author: { "@id": abs("/cory-long/#person") },
          publisher: { "@id": abs("/#organization") },
        }
      : {}),
    ...(page.type === "ProfilePage" ? { mainEntity: { "@id": abs(page.about) } } : {}),
    datePublished: page.datePublished || site.published,
    ...(page.dateModified ? { dateModified: page.dateModified } : {}),
    inLanguage: "en",
    ...(page.sources ? { citation: page.sources.map(([name, url]) => ({ "@type": "CreativeWork", name, url })) } : {}),
  });
  if (page.path !== "/" && page.path !== "/404") {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
        { "@type": "ListItem", position: 2, name: page.crumb || page.h1, item: url },
      ],
    });
  }
  if (page.course) graph.push(...courseSchema());
  if (page.faqs) graph.push(faqSchema(page.faqs, page.path));
  if (page.videos) graph.push(...videoSchema());
  if (page.schema) graph.push(...page.schema);

  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });

  return `<!doctype html>
<html lang="en" class="no-js">
<head>
<meta charset="utf-8">
<script>document.documentElement.className="js"</script>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${page.title}</title>
<meta name="description" content="${page.description}">
${page.path === "/404" ? "" : `<link rel="canonical" href="${url}">`}
<meta name="robots" content="${page.path === "/404" ? "noindex" : "index, follow, max-snippet:-1, max-image-preview:large"}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${site.name}">
<meta property="og:title" content="${page.title}">
<meta property="og:description" content="${page.description}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${abs("/assets/og.jpg")}">
<meta name="twitter:card" content="summary_large_image">
${site.verification.google ? `<meta name="google-site-verification" content="${site.verification.google}">\n` : ""}${site.verification.bing ? `<meta name="msvalidate.01" content="${site.verification.bing}">\n` : ""}<meta name="author" content="${site.founder.name}">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<meta name="theme-color" content="#050914">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Exo+2:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="/assets/style.css?v=${BUILD}">
<script src="/assets/site.js?v=${BUILD}" defer></script>
<link rel="alternate" type="text/plain" href="/llms.txt" title="LLM summary">
<script type="application/ld+json">${json}</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="/"><img src="${site.logo}" alt="" width="45" height="30"><span><b>AI Authority</b> Engine</span></a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="main-nav" aria-label="Menu"><span></span><span></span><span></span></button>
    <nav aria-label="Main" id="main-nav">
      <ul>
        ${nav
          .map(
            ([href, label]) =>
              `<li><a href="${href}"${href === page.path ? ' aria-current="page"' : ""}>${label}</a></li>`
          )
          .join("\n        ")}
      </ul>
    </nav>
    <a class="btn btn-sm btn-glow" href="${site.enrollUrl}" rel="noopener">Get Certified</a>
  </div>
</header>
<main id="main">
${injectByline(page)}
${sourcesHtml(page)}
</main>
<footer class="site-footer">
  <div class="wrap footer-grid">
    <div>
      <img class="foot-badge" src="/assets/badge-sm.webp" alt="Certified AI Authority Specialist badge from AI Authority Engine" width="140" height="119" loading="lazy">
      <p class="brand-foot">${site.name}</p>
      <p>${site.description}</p>
    </div>
    <div>
      <p class="foot-h">Program</p>
      <ul>
        <li><a href="/ai-seo-certification/">AI SEO Certification</a></li>
        <li><a href="/answer-engine-optimization-certification/">Answer Engine Optimization Certification</a></li>
        <li><a href="/ai-seo-training/">AI SEO Training</a></li>
        <li><a href="/ai-seo-training-for-beginners/">AI SEO Training for Beginners</a></li>
        <li><a href="/best-ai-seo-certification-programs/">Best AI SEO Certification Programs</a></li>
      </ul>
    </div>
    <div>
      <p class="foot-h">Guides</p>
      <ul>
        <li><a href="/how-to-start-an-ai-seo-agency/">How to Start an AI SEO Agency</a></li>
        <li><a href="/ai-seo-agency-training/">AI SEO Agency Training</a></li>
        <li><a href="/how-to-get-clients-for-an-ai-seo-agency/">How to Get AI SEO Clients</a></li>
        <li><a href="/how-to-get-a-business-recommended-by-chatgpt/">Get Recommended by ChatGPT</a></li>
      </ul>
    </div>
    <div>
      <p class="foot-h">About</p>
      <ul>
        <li><a href="/cory-long/">Cory Long</a></li>
        <li><a href="/about/">About AI Authority Engine</a></li>
        <li><a href="/faq/">FAQ</a></li>
        <li><a href="/ai-seo-glossary/">AI SEO Glossary</a></li>
        <li><a href="/videos/">Videos</a></li>
        <li><a href="/ai-visibility-quiz/">AI Visibility Quiz</a></li>
        <li><a href="${site.frameworkUrl}" rel="noopener">AI Search Optimization Framework</a></li>
      </ul>
    </div>
  </div>
  <div class="wrap legal">© ${new Date().getFullYear()} ${site.name}. Training by Cory Long.</div>
</footer>
</body>
</html>
`;
}

module.exports = { render, faqHtml, cta, videosHtml, site };
