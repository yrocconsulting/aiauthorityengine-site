const site = require("../site.config");

const nav = [
  ["/ai-seo-certification/", "Certification"],
  ["/ai-seo-training/", "Training"],
  ["/how-to-start-an-ai-seo-agency/", "Start an Agency"],
  ["/how-to-get-clients-for-an-ai-seo-agency/", "Get Clients"],
  ["/cory-long/", "Cory Long"],
  ["/faq/", "FAQ"],
];

const abs = (p) => site.url + p;

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
    worksFor: { "@id": abs("/#organization") },
    knowsAbout: [
      "AI SEO",
      "Answer engine optimization",
      "Generative engine optimization",
      "Entity SEO",
      "Structured data",
      "AI search visibility",
      "Digital marketing agency growth",
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
  <h2>Ready to get certified in AI SEO?</h2>
  <p>Learn the exact system Cory Long uses to get businesses recommended by AI answer engines, and how to sell it as an agency service.</p>
  <a class="btn btn-lg" href="${site.enrollUrl}" rel="noopener">${text}</a>
</section>`;
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
          author: { "@id": abs("/cory-long/#person") },
          publisher: { "@id": abs("/#organization") },
        }
      : {}),
    ...(page.type === "ProfilePage" ? { mainEntity: { "@id": abs(page.about) } } : {}),
    ...(page.dateModified ? { dateModified: page.dateModified } : {}),
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
  if (page.schema) graph.push(...page.schema);

  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
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
<meta property="og:image" content="${abs("/assets/og.png")}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/assets/style.css">
<link rel="alternate" type="text/plain" href="/llms.txt" title="LLM summary">
<script type="application/ld+json">${json}</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="/"><img src="${site.logo}" alt="" width="32" height="32"><span>${site.name}</span></a>
    <nav aria-label="Main">
      <ul>
        ${nav
          .map(
            ([href, label]) =>
              `<li><a href="${href}"${href === page.path ? ' aria-current="page"' : ""}>${label}</a></li>`
          )
          .join("\n        ")}
      </ul>
    </nav>
    <a class="btn btn-sm" href="${site.enrollUrl}" rel="noopener">Enroll</a>
  </div>
</header>
<main id="main">
${page.body}
</main>
<footer class="site-footer">
  <div class="wrap footer-grid">
    <div>
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

module.exports = { render, faqHtml, cta, site };
