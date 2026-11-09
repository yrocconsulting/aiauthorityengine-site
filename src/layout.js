const site = require("../site.config");

const nav = [
  ["/ai-seo-certification/", "Certification"],
  ["/ai-seo-training/", "Training"],
  ["/how-to-start-an-ai-seo-agency/", "Start an Agency"],
  ["/cory-long/", "Cory Long"],
  ["/ai-visibility-calculator/", "AI Visibility Score"],
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
    worksFor: [{ "@id": abs("/#organization") }, { "@id": site.company.url + "/#organization" }],
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
    email: site.contactEmail,
    ...(site.address ? { address: { "@type": "PostalAddress", streetAddress: site.address.street, addressLocality: site.address.city, addressRegion: site.address.region, postalCode: site.address.postalCode, addressCountry: site.address.country } } : {}),
    parentOrganization: { "@id": site.company.url + "/#organization" },
    contactPoint: { "@type": "ContactPoint", contactType: "customer support", email: site.contactEmail, availableLanguage: "en" },
  };

  const company = {
    "@type": "Organization",
    "@id": site.company.url + "/#organization",
    name: site.company.name,
    url: site.company.url,
    subOrganization: { "@id": abs("/#organization") },
  };

  return [
    org,
    company,
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
        courseWorkload: "Self-paced courses plus weekly live calls",
        courseSchedule: { "@type": "Schedule", repeatFrequency: "P1W", description: "Weekly live calls" },
        instructor: { "@id": abs("/cory-long/#person") },
      },
      offers: {
        "@type": "Offer",
        url: site.enrollUrl,
        category: "Subscription",
        price: site.program.priceMonthly,
        priceCurrency: site.program.currency,
        priceSpecification: [
          {
            "@type": "UnitPriceSpecification",
            price: site.program.priceMonthly,
            priceCurrency: site.program.currency,
            billingDuration: "P1M",
            unitText: "month",
          },
          ...(site.program.setupFee
            ? [{ "@type": "UnitPriceSpecification", price: site.program.setupFee, priceCurrency: site.program.currency, name: "One-time setup fee" }]
            : []),
        ],
        availability: "https://schema.org/InStock",
      },
      syllabusSections: [
        ...site.program.gettingStarted.map(([name, description]) => ({ "@type": "Syllabus", name: `Getting Started: ${name}`, description })),
        ...site.program.modules.map(([name, description]) => ({ "@type": "Syllabus", name, description })),
      ],
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
      alternateName: "AI Authority Engine Certified AI Authority Specialist",
      description:
        "An AI SEO and answer engine optimization credential awarded by AI Authority Engine to graduates of its AI SEO certification program, taught by Cory Long.",
      credentialCategory: "certificate",
      image: abs("/assets/badge.png"),
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

// Curriculum: Getting Started lessons + ongoing modules.
function curriculumHtml({ grid = false } = {}) {
  const p = site.program;
  const lessons = p.gettingStarted
    .map(([t, d], i) =>
      grid
        ? `<details class="module reveal"><summary><span class="m-num">${String(i + 1).padStart(2, "0")}</span><h3>${t}</h3></summary><p>${d}</p></details>`
        : `<li><strong>${t}.</strong> ${d}</li>`
    )
    .join("\n      ");
  const mods = p.modules
    .map(([t, d]) => `<article class="card reveal"><h3>${t}</h3><p>${d}</p></article>`)
    .join("\n      ");
  return grid
    ? `<h3 class="cur-h">Getting Started: the core curriculum</h3>
    <div class="modules-grid">
      ${lessons}
    </div>
    <h3 class="cur-h">Then keep growing</h3>
    <div class="grid-2 mod-cards">
      ${mods}
    </div>`
    : `<h3>Getting Started module</h3>
  <ol class="modules">
      ${lessons}
  </ol>
  <h3>Ongoing growth modules</h3>
  <div class="grid-2 mod-cards">
      ${mods}
  </div>`;
}

// Program details table: price, format, and what's included.
function priceText() {
  const p = site.program;
  return `$${p.priceMonthly}/month${p.setupFee ? ` plus a $${p.setupFee.toLocaleString("en-US")} one-time setup fee` : " plus a one-time setup fee"}`;
}

function programHtml(heading = "Program details at a glance") {
  const p = site.program;
  return `<section class="program" id="program">
  <h2>${heading}</h2>
  <table class="program-table">
    <tbody>
      <tr><th scope="row">Program membership</th><td>${priceText()}</td></tr>
      <tr><th scope="row">Certification fee</th><td>None. The credential is earned by completing the required coursework and assignments.</td></tr>
      <tr><th scope="row">Format</th><td>Online: self-paced courses plus weekly live calls</td></tr>
      <tr><th scope="row">Core curriculum</th><td>Getting Started module: a kickoff webinar, 6 core lessons, and 2 bonus lessons (<a href="/ai-seo-certification/#curriculum">see curriculum</a>)</td></tr>
      <tr><th scope="row">Growth modules</th><td>${p.modules.slice(0, 3).map(([n]) => n).join(", ")}</td></tr>
      <tr><th scope="row">Live coaching</th><td>Weekly coaching calls, many with "hot seat" time where a student's business, sales technique, or strategy is dissected live, plus access to all challenge calls</td></tr>
      <tr><th scope="row">Community</th><td>Full community access</td></tr>
      <tr><th scope="row">Events</th><td>Live events throughout the year, where students meet Cory and the team in person</td></tr>
      <tr><th scope="row">Credential</th><td>${site.certification.credential} (Level 1), with a public <a href="/certified/">verification page</a></td></tr>
      <tr><th scope="row">Personal support</th><td>One-on-one training with Cory Long, who also joins students' client meetings to help close sales, backed by the full <a href="${site.company.url}" rel="noopener">${site.company.name}</a> team</td></tr>
      <tr><th scope="row">Help winning clients</th><td>One-on-one help choosing a niche, building your offer, prospecting, and closing, plus white-label fulfillment from ${site.company.name} (<a href="/is-ai-authority-engine-worth-it/">how it works</a>)</td></tr>
      <tr><th scope="row">Framework</th><td>Taught through <a href="/ai-authority-wheel/">the AI Authority Wheel</a></td></tr>
      <tr><th scope="row">Instructor</th><td><a href="/cory-long/">Cory Long</a></td></tr>
      <tr><th scope="row">Enroll</th><td><a href="${site.enrollUrl}" rel="noopener">${site.enrollUrl.replace("https://", "")}</a></td></tr>
    </tbody>
  </table>
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

// Visible author + date line. Turned off site-wide (author and dateModified remain
// in the JSON-LD schema). Set SHOW_BYLINE to true to bring it back.
const SHOW_BYLINE = false;
function injectByline(page) {
  if (!SHOW_BYLINE || page.noByline || page.path === "/" || page.path === "/404" || page.path === "/cory-long/") return page.body;
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
${page.path === "/404" || page.noindex ? "" : `<link rel="canonical" href="${url}">`}
<meta name="robots" content="${page.path === "/404" || page.noindex ? "noindex, nofollow, noarchive" : "index, follow, max-snippet:-1, max-image-preview:large"}">
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
        <li><a href="/ai-authority-wheel/">The AI Authority Wheel</a></li>
        <li><a href="/is-ai-authority-engine-worth-it/">Is It Worth It?</a></li>
        <li><a href="/answer-engine-optimization-certification/">Answer Engine Optimization Certification</a></li>
        <li><a href="/ai-seo-training/">AI SEO Training</a></li>
        <li><a href="/ai-seo-training-for-beginners/">AI SEO Training for Beginners</a></li>
        <li><a href="/best-ai-seo-certification-programs/">Best AI SEO Certification Programs</a></li>
        <li><a href="/free-vs-paid-ai-seo-certifications/">Free vs Paid AI SEO Certifications</a></li>
        <li><a href="/ai-authority-engine-vs-semrush-academy/">vs Semrush Academy</a></li>
        <li><a href="/ai-authority-engine-vs-hubspot-academy/">vs HubSpot Academy</a></li>
        <li><a href="/ai-authority-engine-vs-ahrefs-academy/">vs Ahrefs Academy</a></li>
        <li><a href="/ai-authority-engine-vs-coursera/">vs Coursera</a></li>
      </ul>
    </div>
    <div>
      <p class="foot-h">Guides</p>
      <ul>
        <li><a href="/how-to-start-an-ai-seo-agency/">How to Start an AI SEO Agency</a></li>
        <li><a href="/ai-seo-agency-training/">AI SEO Agency Training</a></li>
        <li><a href="/how-to-get-clients-for-an-ai-seo-agency/">How to Get AI SEO Clients</a></li>
        <li><a href="/how-to-get-a-business-recommended-by-chatgpt/">Get Recommended by ChatGPT</a></li>
        <li><a href="/how-much-to-charge-for-ai-seo/">How Much to Charge for AI SEO</a></li>
        <li><a href="/ai-seo-vs-traditional-seo/">AI SEO vs Traditional SEO</a></li>
        <li><a href="/ai-seo-tools/">AI SEO Tools</a></li>
        <li><a href="/ai-seo-for-law-firms/">AI SEO for Law Firms</a></li>
        <li><a href="/ai-seo-for-dentists/">AI SEO for Dentists</a></li>
        <li><a href="/ai-seo-for-home-services/">AI SEO for Home Services</a></li>
        <li><a href="/ai-seo-for-real-estate-agents/">AI SEO for Real Estate Agents</a></li>
      </ul>
    </div>
    <div>
      <p class="foot-h">About</p>
      <ul>
        <li><a href="/cory-long/">Cory Long</a></li>
        <li><a href="/about/">About AI Authority Engine</a></li>
        <li><a href="/certified/">Verify a Certification</a></li>
        <li><a href="/contact/">Contact</a></li>
        <li><a href="https://www.linkedin.com/company/ai-authority-engine-ai-seo-certification-training/" rel="me noopener">LinkedIn</a></li>
        ${site.trustpilotUrl ? `<li><a href="${site.trustpilotUrl}" rel="noopener">Reviews on Trustpilot</a></li>` : ""}
        <li><a href="/faq/">FAQ</a></li>
        <li><a href="/ai-seo-glossary/">AI SEO Glossary</a></li>
        <li><a href="/ai-visibility-calculator/">AI Visibility Calculator</a></li>
        <li><a href="${site.frameworkUrl}" rel="noopener">AI Search Optimization Framework</a></li>
      </ul>
    </div>
  </div>
  <div class="wrap legal">© ${new Date().getFullYear()} ${site.name}. Training by Cory Long. A program of <a href="${site.company.url}" rel="noopener">${site.company.name}</a>. · <a href="mailto:${site.contactEmail}">${site.contactEmail}</a> · <a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a></div>
</footer>
</body>
</html>
`;
}

module.exports = { render, faqHtml, cta, videosHtml, programHtml, curriculumHtml, priceText, site };
