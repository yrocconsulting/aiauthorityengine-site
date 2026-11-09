// Fair, sourced comparison pages. Competitor facts come from each provider's own
// public pages, checked on the date below. Re-check them periodically; offerings change.
const { faqHtml, cta, priceText, site } = require("../layout");

const CHECKED = "November 3, 2026";
const CHECKED_ISO = "2026-11-03";

// What AI Authority Engine offers (shared across all comparisons).
const aiae = {
  price: `${priceText()}. No separate certification fee.`,
  format: "Self-paced lessons plus weekly coaching calls with hot-seat reviews, challenge calls, 30-day implementation sprints, a full community, and live events",
  ai: "Built entirely around AI search: AI authority, AI presence, reviews and trust signals, AI-optimized pages, schema, press and brand mentions, Wikidata and Grokipedia",
  agency: "Core focus: getting clients, client onboarding automation, white-label deliverables, and fulfillment for an AI SEO agency",
  credential: "Certified AI Authority Specialist (Level 1), earned by completing required coursework and assignments, with a public verification page and credential ID",
  instructor: "Cory Long, founder of AI Authority Engine",
  support: "One-on-one help from Cory Long and the Yroc Consulting team to choose a niche, build an offer, find prospects, and close clients (Cory has joined students' sales meetings), plus white-label fulfillment from Yroc",
};

const competitors = [
  {
    slug: "semrush-academy",
    name: "Semrush Academy",
    short: "Semrush Academy",
    sourceUrl: "https://www.semrush.com/academy/courses/seo",
    sourceName: "Semrush Academy: SEO courses",
    price: "Free (\"All of our courses and resources are 100% free\")",
    format: "Self-paced video courses, typically around 40 minutes to an hour each",
    ai: "Includes AI-focused courses such as \"AI Search Operating System\" and \"On-Page SEO and AI Search Essentials with Semrush\"",
    agency: "Offers \"Getting Started with Semrush for Agencies\", focused on using Semrush in an agency",
    credential: "Certificate of completion after quizzes and exams, endorsed by Semrush Academy and the course instructor",
    support: "Self-paced course; one-on-one coaching is not listed on the course page",
    instructor: "Various instructors, including Semrush team members",
    strengths: [
      "Completely free, with a large catalog across SEO and marketing",
      "Short, focused courses you can finish in about an hour",
      "Excellent if you use, or plan to use, Semrush's tools",
      "AI search courses that introduce the basics",
    ],
    chooseThem: "you want free, short courses and you work in the Semrush toolset",
    chooseUs: "you want to build or grow an AI SEO agency with live coaching, implementation sprints, and a verifiable credential",
  },
  {
    slug: "hubspot-academy",
    name: "HubSpot Academy",
    short: "HubSpot Academy",
    sourceUrl: "https://academy.hubspot.com/courses/seo-training",
    sourceName: "HubSpot Academy: AEO Fundamentals",
    price: "Free certification course",
    format: "Self-paced video course: \"AEO Fundamentals\", 2 hours 20 minutes, 7 lessons",
    ai: "Covers answer engines, planning content for AI visibility, optimizing for AI citations with structure and schema, and measuring AEO",
    agency: "Not the focus of the AEO course; HubSpot Academy is centered on marketing, sales, and service skills",
    credential: "Free HubSpot Academy certification on completion",
    support: "Self-paced course; one-on-one coaching is not listed on the course page",
    instructor: "HubSpot Academy",
    strengths: [
      "Free, well-produced, and widely recognized",
      "A solid introduction to answer engine optimization in about two hours",
      "Pairs well with HubSpot's broader marketing courses",
    ],
    chooseThem: "you want a free, two-hour introduction to answer engine optimization",
    chooseUs: "you want to apply AI SEO for real clients and build an agency around it, with ongoing coaching and community",
  },
  {
    slug: "ahrefs-academy",
    name: "Ahrefs Academy",
    short: "Ahrefs Academy",
    sourceUrl: "https://ahrefs.com/academy",
    sourceName: "Ahrefs Academy",
    price: "Free courses, including the AEO Course and SEO Course for Beginners",
    format: "Self-paced video courses; the AEO Course is 12 lessons (about 1 hour 26 minutes)",
    ai: "A free Answer Engine Optimization (AEO) Course on how AI search works, plus training on Ahrefs' Brand Radar for AI visibility",
    agency: "Not the focus; courses center on SEO skills and using Ahrefs' tools",
    credential: "Offers an AEO certification exam (50 questions) and an Ahrefs tools certification exam",
    support: "Self-paced course; one-on-one coaching is not listed on the course page",
    instructor: "Ahrefs team",
    strengths: [
      "Free, practical courses from a respected SEO tool company",
      "A dedicated AEO course and AEO certification exam",
      "Great if you use Ahrefs' tools such as Brand Radar",
    ],
    chooseThem: "you want free AEO training and a test-based certification, especially if you use Ahrefs",
    chooseUs: "you want hands-on implementation, live coaching, and a complete system for running an AI SEO agency",
  },
  {
    slug: "coursera",
    name: "Coursera (UC Davis SEO Specialization)",
    short: "Coursera",
    sourceUrl: "https://www.coursera.org/specializations/seo",
    sourceName: "Coursera: Search Engine Optimization (SEO) Specialization, UC Davis",
    price: "Paid enrollment through Coursera (included with Coursera Plus; financial aid may be available)",
    format: "5-course self-paced series; about 2 months at 10 hours a week",
    ai: "The specialization page lists Google's algorithms, Core Web Vitals, E-E-A-T, and rich results; it does not list AI search topics",
    agency: "Not the focus; an academic SEO curriculum",
    credential: "Shareable Coursera certificate from the University of California, Davis",
    support: "Self-paced course; one-on-one coaching is not listed on the course page",
    instructor: "Eric Enge and Rebekah May (UC Davis)",
    strengths: [
      "A university-branded certificate",
      "A structured, in-depth traditional SEO curriculum",
      "Taught by well-known SEO practitioners",
    ],
    chooseThem: "you want a university-branded certificate in traditional SEO",
    chooseUs: "you want training built specifically for AI search and for running an AI SEO agency",
  },
];

const rows = [
  ["Cost", "price"],
  ["Format", "format"],
  ["AI search coverage", "ai"],
  ["Agency / business training", "agency"],
  ["Credential", "credential"],
  ["Personal support", "support"],
  ["Instructor", "instructor"],
];

const esc = (s) => s.replace(/&/g, "&amp;");

const pages = competitors.map((c) => {
  const path = `/ai-authority-engine-vs-${c.slug}/`;
  const faqs = [
    [`Is AI Authority Engine better than ${c.short}?`, `It depends on your goal. Choose ${c.short} if ${c.chooseThem}. Choose AI Authority Engine if ${c.chooseUs}.`],
    [`Is ${c.short} free?`, `${c.price.replace(/\(.*?\)/g, "").trim()}, according to ${c.short}'s own pages as of ${CHECKED}. AI Authority Engine is ${priceText()}; the certification itself has no separate fee.`],
    [`Can I take ${c.short} and AI Authority Engine?`, `Yes. Many people start with a free or introductory course to learn the basics, then join AI Authority Engine to implement AI SEO for clients with coaching and a community.`],
    [`What makes AI Authority Engine different from ${c.short}?`, `AI Authority Engine is an ongoing program rather than a standalone course: weekly coaching calls with hot-seat reviews, challenge calls, 30-day implementation sprints, a community, and training on running an AI SEO agency, taught by Cory Long. Graduates earn the Certified AI Authority Specialist credential, which is publicly verifiable.`],
  ];
  return {
    path,
    title: `AI Authority Engine vs ${c.short}: AI SEO Training Compared`,
    description: `An honest comparison of AI Authority Engine and ${c.name}: cost, format, AI search coverage, agency training, and credentials. Updated ${CHECKED}.`,
    h1: `AI Authority Engine vs ${c.short}`,
    crumb: `vs ${c.short}`,
    type: "Article",
    datePublished: CHECKED_ISO,
    faqs,
    sources: [[c.sourceName, c.sourceUrl], ["AI Authority Engine program details", site.url + "/ai-seo-certification/"]],
    body: `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Honest comparison</p>
    <h1>AI Authority Engine vs ${c.short}</h1>
    <p class="lede">Both can help you learn AI search. They're built for different goals. Here's how to choose.</p>
  </div>
</section>

<section class="wrap answer-box">
  <h2>The short answer</h2>
  <p><strong>Choose ${c.short} if ${c.chooseThem}. Choose AI Authority Engine if ${c.chooseUs}.</strong> ${c.short} offers ${c.price.toLowerCase().startsWith("free") ? "free, self-paced courses" : "self-paced coursework"}; AI Authority Engine is an ongoing program taught by Cory Long, with weekly live calls, implementation sprints, a community, and the publicly verifiable Certified AI Authority Specialist credential.</p>
</section>

<section class="wrap prose">
  <h2>Side-by-side comparison</h2>
  <table class="compare vs-table">
    <thead><tr><th></th><th>${esc(c.name)}</th><th>AI Authority Engine</th></tr></thead>
    <tbody>
      ${rows.map(([label, key]) => `<tr><td>${label}</td><td>${esc(c[key])}</td><td>${esc(aiae[key])}</td></tr>`).join("\n      ")}
    </tbody>
  </table>
  <p class="small">${c.short} details are from <a href="${c.sourceUrl}" rel="noopener">${c.short}'s own public pages</a> as of ${CHECKED}. Offerings change, so check their site for the latest. ${c.short} is a trademark of its respective owner; AI Authority Engine is not affiliated with or endorsed by it.</p>

  <h2>Where ${c.short} shines</h2>
  <ul class="checks">
    ${c.strengths.map((s) => `<li>${s}</li>`).join("\n    ")}
  </ul>

  <h2>Where AI Authority Engine is different</h2>
  <ul class="checks">
    <li><strong>Built for AI search, not adapted to it.</strong> The <a href="/ai-seo-certification/#curriculum">Getting Started curriculum</a> covers AI authority, AI presence, reviews and trust signals, AI-optimized pages, schema, press and brand mentions, and Wikidata.</li>
    <li><strong>A real person in your corner.</strong> One-on-one training with Cory Long, who has even joined students' client meetings to help close sales, backed by the full Yroc Consulting team.</li>
    <li><strong>Help winning and delivering clients.</strong> Yroc Consulting is the white-label fulfillment partner behind client accounts that students have signed. <a href="/is-ai-authority-engine-worth-it/">See how it works</a>.</li>
    <li><strong>Beyond the fundamentals.</strong> Hands-on implementation through <a href="/ai-authority-wheel/">the AI Authority Wheel</a>, with weekly hot-seat coaching calls, challenge calls, 30-day sprints, and in-person live events.</li>
    <li><strong>The agency side.</strong> Getting clients, onboarding automation, white-label deliverables, and fulfillment, through the Optimization Lab.</li>
    <li><strong>A credential you have to earn.</strong> Certified AI Authority Specialists complete required coursework and assignments, and every credential is publicly verifiable in the <a href="/certified/">certified directory</a>.</li>
    <li><strong>A named practitioner.</strong> Taught by <a href="/cory-long/">Cory Long</a>.</li>
  </ul>

  <h2>Can you do both?</h2>
  <p>Yes, and it's a smart path. Use a free or introductory course to learn the vocabulary, then join AI Authority Engine to put AI SEO to work for real businesses with coaching and a community behind you. See <a href="/free-vs-paid-ai-seo-certifications/">free vs paid AI SEO certifications</a> and the <a href="/best-ai-seo-certification-programs/">best AI SEO certification programs</a>.</p>
</section>
<div class="wrap">${faqHtml(faqs, `AI Authority Engine vs ${c.short}: FAQ`)}</div>
${cta()}
`,
  };
});

// ------------------------------------------------------------ free vs paid guide
const fpFaqs = [
  ["Are there free AI SEO certifications?", "Yes. As of November 2026, HubSpot Academy (AEO Fundamentals), Semrush Academy (including AI Search Operating System and On-Page SEO and AI Search Essentials), and Ahrefs Academy (AEO Course and AEO certification exam) offer free AI search training with certificates or certification exams."],
  ["Is a free AI SEO certification enough to get clients?", "A free certification shows you've learned the basics. Clients care about results, so what matters is whether you can implement AI SEO and show progress. Paid programs like AI Authority Engine add coaching, implementation support, and business training to close that gap."],
  ["When is a paid AI SEO program worth it?", "When you plan to sell AI SEO as a service. Live coaching, implementation sprints, a community, and agency business training can shorten the path to paying clients."],
  ["What does AI Authority Engine cost?", `AI Authority Engine membership is ${priceText()}. There's no separate fee for the Certified AI Authority Specialist credential; it's earned by completing the required work.`],
];
const freeVsPaid = {
  path: "/free-vs-paid-ai-seo-certifications/",
  title: "Free vs Paid AI SEO Certifications: Which Do You Need?",
  description: "Free AI SEO certifications from HubSpot, Semrush, and Ahrefs vs paid programs like AI Authority Engine: what each gives you and when to choose which.",
  h1: "Free vs Paid AI SEO Certifications",
  crumb: "Free vs Paid AI SEO Certifications",
  type: "Article",
  datePublished: CHECKED_ISO,
  faqs: fpFaqs,
  sources: competitors.map((c) => [c.sourceName, c.sourceUrl]),
  body: `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Buyer's guide</p>
    <h1>Free vs Paid AI SEO Certifications</h1>
    <p class="lede">Free courses teach the concepts. Paid programs help you apply them and build a business. Here's how to decide.</p>
  </div>
</section>

<section class="wrap answer-box">
  <h2>The short answer</h2>
  <p><strong>Start with a free AI SEO course if you're exploring; choose a paid program if you plan to sell AI SEO to clients.</strong> HubSpot Academy, Semrush Academy, and Ahrefs Academy all offer free AI search training with certificates or certification exams. Paid programs such as AI Authority Engine add what free courses usually don't: live coaching, implementation support, a community, and training on running an AI SEO agency.</p>
</section>

<section class="wrap prose">
  <h2>Free AI SEO training options (as of ${CHECKED})</h2>
  <table class="compare">
    <thead><tr><th>Program</th><th>Cost</th><th>AI search coverage</th><th>Credential</th></tr></thead>
    <tbody>
      ${competitors
        .filter((c) => c.slug !== "coursera")
        .map((c) => `<tr><td><a href="/ai-authority-engine-vs-${c.slug}/">${esc(c.name)}</a></td><td>${esc(c.price)}</td><td>${esc(c.ai)}</td><td>${esc(c.credential)}</td></tr>`)
        .join("\n      ")}
    </tbody>
  </table>

  <h2>Paid options</h2>
  <table class="compare">
    <thead><tr><th>Program</th><th>Cost</th><th>What you get</th></tr></thead>
    <tbody>
      <tr><td><a href="/ai-authority-engine-vs-coursera/">${esc(competitors[3].name)}</a></td><td>${esc(competitors[3].price)}</td><td>${esc(competitors[3].format)}; ${esc(competitors[3].credential)}</td></tr>
      <tr><td><a href="/ai-seo-certification/">AI Authority Engine</a></td><td>${priceText()}; no separate certification fee</td><td>AI-search curriculum, weekly coaching calls with hot-seat reviews, challenge calls, 30-day sprints, community, live events, agency training, and the publicly verifiable Certified AI Authority Specialist credential</td></tr>
    </tbody>
  </table>
  <p class="small">Competitor details are from each provider's own public pages as of ${CHECKED}; check their sites for current offerings. Trademarks belong to their respective owners.</p>

  <h2>What free courses do well</h2>
  <ul class="checks">
    <li>Teach the vocabulary and core concepts of AI search quickly</li>
    <li>Cost nothing, so they're a low-risk way to explore</li>
    <li>Often pair with a company's own tools</li>
  </ul>

  <h2>What a paid program adds</h2>
  <ul class="checks">
    <li><strong>Implementation:</strong> doing the work on real businesses, with feedback</li>
    <li><strong>Live coaching:</strong> answers to your specific situations, every week</li>
    <li><strong>Business training:</strong> pricing, getting clients, and delivering at scale</li>
    <li><strong>A community:</strong> peers working through the same challenges</li>
    <li><strong>A credential you earn through work</strong>, not just a quiz</li>
  </ul>

  <h2>Our recommendation</h2>
  <p>If you're curious about AI search, take a free course this week. If you want to turn AI SEO into income for yourself or your agency, that's what <a href="/ai-seo-certification/">AI Authority Engine</a> is built for. Compare it directly with <a href="/ai-authority-engine-vs-semrush-academy/">Semrush Academy</a>, <a href="/ai-authority-engine-vs-hubspot-academy/">HubSpot Academy</a>, <a href="/ai-authority-engine-vs-ahrefs-academy/">Ahrefs Academy</a>, and <a href="/ai-authority-engine-vs-coursera/">Coursera</a>.</p>
</section>
<div class="wrap">${faqHtml(fpFaqs, "Free vs paid: FAQ")}</div>
${cta()}
`,
};

module.exports = [...pages, freeVsPaid];
