const { cta, site } = require("../layout");
const graduates = require("../data/graduates");

const credential = site.certification.credential;
const nice = (d) =>
  new Date(d + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
const pageUrl = (g) => `${site.url}/certified/${g.slug}/`;
const kitPath = (g) => `/certified/${g.slug}/kit-${g.kit}/`;
const certPath = (g) => `/certificates/${g.slug}-${g.kit}.pdf`;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const host = (u) => u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const socialLabel = (u) => {
  const h = host(u);
  const map = [
    ["linkedin.com", "LinkedIn"], ["x.com", "X"], ["twitter.com", "X"], ["facebook.com", "Facebook"],
    ["instagram.com", "Instagram"], ["youtube.com", "YouTube"], ["tiktok.com", "TikTok"], ["threads.net", "Threads"],
  ];
  return (map.find(([d]) => h.includes(d)) || [null, h])[1];
};

function linkedInUrl(g) {
  const [y, m] = g.issued.split("-");
  const q = new URLSearchParams({
    startTask: "CERTIFICATION_NAME",
    name: credential,
    organizationId: "144100594", // AI Authority Engine LinkedIn company page
    issueYear: y,
    issueMonth: String(+m),
    certUrl: pageUrl(g),
    certId: g.id,
  });
  return `https://www.linkedin.com/profile/add?${q}`;
}

function embedCode(g) {
  return `<a href="${pageUrl(g)}" target="_blank" rel="noopener" title="Verify ${g.name}'s credential"><img src="${site.url}/assets/badge-sm.webp" alt="${credential}: ${g.name}, verified by ${site.name}" width="180" height="153"></a>`;
}

// ------------------------------------------------------------ directory page
const directory = {
  path: "/certified/",
  title: `${credential} Directory | ${site.name}`,
  description: `Directory of Certified AI Authority Specialists credentialed by AI Authority Engine. Verify any graduate's AI SEO certification by name or credential ID.`,
  h1: `${credential} Directory`,
  crumb: "Certified Directory",
  type: "CollectionPage",
  noByline: true,
  schema: [
    {
      "@type": "ItemList",
      name: `${credential} directory`,
      numberOfItems: graduates.length,
      itemListElement: graduates.map((g, i) => ({ "@type": "ListItem", position: i + 1, url: pageUrl(g), name: g.name })),
    },
  ],
  body: `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Official directory</p>
    <h1>${credential} Directory</h1>
    <p class="lede">Every professional listed here has completed the AI Authority Engine certification requirements and holds an active credential.</p>
  </div>
</section>

<section class="wrap answer-box">
  <h2>How to verify a certification</h2>
  <p><strong>Every ${credential} has a public verification page on aiauthorityengine.org showing their name, credential level, issue date, and unique credential ID.</strong> Search by name below or enter a credential ID (for example AIAE-L1-2026-0001). If a person or ID isn't listed here, the credential can't be verified. Questions: <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>.</p>
</section>

<section class="section">
  <div class="wrap">
    <div class="verify-tools" data-directory>
      <label class="field"><span>Search by name or agency</span><input type="search" placeholder="e.g. Jones" data-filter autocomplete="off"></label>
      <form class="field verify-form" data-verify>
        <span>Verify a credential ID</span>
        <div><input type="text" placeholder="AIAE-L1-2026-0001" required autocomplete="off"><button class="btn btn-glow" type="submit">Verify</button></div>
        <p class="verify-msg" aria-live="polite"></p>
      </form>
    </div>
    <ul class="grad-grid">
      ${graduates
        .map(
          (g) => `<li class="grad-card reveal" data-name="${esc((g.name + " " + (g.agency?.name || "")).toLowerCase())}" data-id="${g.id}">
        ${g.photo ? `<img class="grad-photo" src="${g.photo}" alt="" width="72" height="72" loading="lazy">` : `<img src="/assets/badge-sm.webp" alt="" width="72" height="61" loading="lazy">`}
        <div>
          <h2><a href="/certified/${g.slug}/">${g.name}</a></h2>
          <p>${credential} · Level ${g.level}</p>
          ${g.agency ? `<p class="grad-agency">${esc(g.agency.name)}</p>` : ""}
          <p class="meta">Issued ${nice(g.issued)} · ID ${g.id}</p>
        </div>
        <span class="verified">✓ Verified</span>
      </li>`
        )
        .join("\n      ")}
    </ul>
    <p class="dir-count">${graduates.length} active credential holders</p>
  </div>
</section>

<section class="wrap prose">
  <h2>About the credential</h2>
  <p>The ${credential} credential is awarded by ${site.name} to students who complete the <a href="/ai-seo-certification/">AI SEO certification</a> program taught by <a href="/cory-long/">Cory Long</a>, including the required coursework. Holders are trained in answer engine optimization, entity authority, structured data, and AI visibility audits: the skills needed to help businesses get recommended by ChatGPT, Gemini, Perplexity, and Google AI Overviews.</p>
</section>
${cta("Become a Certified AI Authority Specialist")}
`,
};

// ------------------------------------------------------------ public verification pages
const profiles = graduates.map((g) => {
  const url = pageUrl(g);
  const links = [
    ...(g.website ? [[g.website, host(g.website).startsWith("about.me") ? "About Me" : "Personal website"]] : []),
    ...(g.socials || []).map((u) => [u, socialLabel(u)]),
  ];
  const agencyLinks = g.agency
    ? [...(g.agency.url ? [[g.agency.url, host(g.agency.url).includes("facebook.com") ? "Facebook" : "Website"]] : []),
       ...(g.agency.socials || []).map((u) => [u, socialLabel(u)])]
    : [];
  const sameAs = [g.website, ...(g.socials || [])].filter(Boolean);
  const hasProfile = g.photo || g.agency || g.website || (g.socials && g.socials.length) || (g.press && g.press.length);

  return {
    path: `/certified/${g.slug}/`,
    title: `${g.name}, ${credential} | Verified`,
    description: `${g.name}${g.agency ? ` of ${g.agency.name}` : ""} is a ${credential} (Level ${g.level}), credentialed by AI Authority Engine on ${nice(g.issued)}. Credential ID ${g.id}.`,
    h1: g.name,
    crumb: g.name,
    type: "ProfilePage",
    about: `/certified/${g.slug}/#person`,
    noByline: true,
    datePublished: g.issued,
    schema: [
      {
        "@type": "Person",
        "@id": url + "#person",
        name: g.name,
        url,
        ...(g.photo ? { image: site.url + g.photo } : {}),
        ...(g.agency ? { worksFor: { "@type": "Organization", name: g.agency.name, ...(g.agency.url ? { url: g.agency.url } : {}), ...(g.agency.socials && g.agency.socials.length ? { sameAs: g.agency.socials } : {}), ...(g.press && g.press.length ? { subjectOf: g.press.map((x) => ({ "@type": "NewsArticle", headline: x.title, url: x.url, ...(x.outlet ? { publisher: { "@type": "Organization", name: x.outlet } } : {}) })) } : {}) } } : {}),
        ...(sameAs.length ? { sameAs } : {}),
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          "@id": url + "#credential",
          name: credential,
          identifier: g.id,
          educationalLevel: `Level ${g.level}`,
          credentialCategory: "certificate",
          dateCreated: g.issued,
          url,
          recognizedBy: { "@id": site.url + "/#organization" },
          isBasedOn: { "@id": site.url + "/ai-seo-certification/#credential" },
        },
      },
    ],
    body: `
<section class="page-head">
  <div class="wrap grad-head">
    ${
      g.photo
        ? `<div class="grad-portrait"><img src="${g.photo}" alt="${esc(g.name)}" width="200" height="200"><img class="mini-badge" src="/assets/badge-sm.webp" alt="" width="84" height="72"></div>`
        : `<img class="tilt" src="/assets/badge-sm.webp" alt="${credential} badge" width="200" height="171">`
    }
    <div>
      <p class="eyebrow">Credential verification</p>
      <h1>${g.name}</h1>
      <p class="lede">${credential} · Level ${g.level}${g.agency ? ` · ${esc(g.agency.name)}` : ""}</p>
      <span class="verified big">✓ Verified by ${site.name}</span>
    </div>
  </div>
</section>

<section class="wrap answer-box">
  <h2>Credential status: active</h2>
  <p><strong>${g.name}${g.agency ? ` of ${esc(g.agency.name)}` : ""} is a ${credential} (Level ${g.level}), credentialed by ${site.name} on ${nice(g.issued)}.</strong> This credential was awarded after fulfilling the Level ${g.level} certification requirements of AI Authority Engine, demonstrating practical knowledge in AI search visibility, business authority assessment, and evidence-based optimization strategies. The program is taught by Cory Long.</p>
</section>

<section class="section">
  <div class="wrap ${hasProfile ? "split split-top" : ""}">
    <div>
      <h2>Credential details</h2>
      <dl class="facts">
        <dt>Holder</dt><dd>${g.name}</dd>
        <dt>Credential</dt><dd>${credential}</dd>
        <dt>Level</dt><dd>Level ${g.level}</dd>
        <dt>Issued</dt><dd><time datetime="${g.issued}">${nice(g.issued)}</time></dd>
        <dt>Credential ID</dt><dd><code>${g.id}</code></dd>
        <dt>Issuer</dt><dd><a href="/">${site.name}</a></dd>
        <dt>Program</dt><dd><a href="/ai-seo-certification/">AI SEO Certification</a>, taught by <a href="/cory-long/">Cory Long</a></dd>
        <dt>Status</dt><dd><span class="verified">✓ Active</span></dd>
      </dl>
    </div>
    ${
      hasProfile
        ? `<div class="share-card">
      <h2>Professional profile</h2>
      ${g.agency ? `<p class="agency"><span>Agency</span><b>${g.agency.url ? `<a href="${esc(g.agency.url)}" rel="noopener">${esc(g.agency.name)}</a>` : esc(g.agency.name)}</b></p>` : ""}
      ${agencyLinks.length > 1 || (g.agency && g.agency.socials) ? `<ul class="profile-links">${agencyLinks.map(([u, l]) => `<li><a href="${esc(u)}" rel="noopener">${esc(l)}<span>${esc(host(u))}</span></a></li>`).join("")}</ul>` : ""}
      ${links.length ? `${g.agency ? `<p class="agency profile-sub"><span>Personal</span></p>` : ""}<ul class="profile-links">${links.map(([u, l]) => `<li><a href="${esc(u)}" rel="noopener">${esc(l)}<span>${esc(host(u))}</span></a></li>`).join("")}</ul>` : ""}
      ${g.press && g.press.length ? `<p class="agency profile-sub"><span>In the news</span></p><ul class="profile-links">${g.press.map((x) => `<li><a href="${esc(x.url)}" rel="noopener">${esc(x.outlet || "News")}<span>${esc(x.title)}</span></a></li>`).join("")}</ul>` : ""}
    </div>`
        : ""
    }
  </div>
</section>

<section class="wrap prose">
  <h2>What this credential means</h2>
  <p>A ${credential} is trained in how AI answer engines such as ChatGPT, Gemini, Perplexity, and Google AI Overviews decide which businesses to recommend, and in the AI Authority Engine method for improving those outcomes: entity authority, answer engine optimization, structured data, and AI visibility audits. <a href="/certified/">View all credential holders</a>.</p>
</section>
${cta("Become a Certified AI Authority Specialist")}
`,
  };
});

// ------------------------------------------------------------ private share kits (unlisted, noindex)
const kits = graduates.map((g) => ({
  path: kitPath(g),
  title: `Your credential kit: ${g.name} | ${site.name}`,
  description: `Private credential kit for ${g.name}.`,
  h1: `${g.name}'s credential kit`,
  crumb: "Credential kit",
  noindex: true,
  noByline: true,
  body: `
<section class="page-head">
  <div class="wrap grad-head">
    <img class="tilt" src="/assets/badge-sm.webp" alt="${credential} badge" width="200" height="171">
    <div>
      <p class="eyebrow">Private: for ${g.name} only</p>
      <h1>Congratulations, ${g.name.split(" ")[0]}!</h1>
      <p class="lede">You're officially a ${credential}. Here's everything you need to share your credential.</p>
    </div>
  </div>
</section>

<section class="wrap answer-box">
  <h2>Your credential</h2>
  <p><strong>${credential} · Level ${g.level} · ID ${g.id}</strong>, issued ${nice(g.issued)}. Your public verification page is <a href="/certified/${g.slug}/">${host(pageUrl(g))}</a>. Share that link anywhere you mention the credential. Please keep this kit page private.</p>
</section>

<section class="section">
  <div class="wrap kit-grid">
    <div class="share-card">
      <p class="eyebrow">Step 1</p>
      <h2>Download your certificate</h2>
      <p>Your official Certified AI Authority Specialist certificate, signed by Cory Long. Your credential ID (${g.id}) and verification page are shown above.</p>
      <a class="btn btn-glow" href="${certPath(g)}" download>Download certificate (PDF)</a>
    </div>
    <div class="share-card">
      <p class="eyebrow">Step 2</p>
      <h2>Add it to LinkedIn</h2>
      <p>Opens LinkedIn with your credential, issuer, date, ID, and verification link filled in. Just click Save.</p>
      <a class="btn btn-glow" href="${esc(linkedInUrl(g))}" target="_blank" rel="noopener">Add to LinkedIn</a>
    </div>
    <div class="share-card kit-wide">
      <p class="eyebrow">Step 3</p>
      <h2>Show your badge on your website</h2>
      <p>Paste this code into your website (footer, About page, or team page). The badge links to your verification page so clients can confirm it.</p>
      <div class="kit-embed">
        <img src="/assets/badge-sm.webp" alt="" width="150" height="128">
        <div>
          <textarea class="embed" readonly rows="5">${esc(embedCode(g))}</textarea>
          <button class="btn btn-sm" type="button" data-copy>Copy code</button>
        </div>
      </div>
    </div>
    <div class="share-card kit-wide">
      <p class="eyebrow">Step 4</p>
      <h2>Complete your directory profile</h2>
      <p>Send a square headshot, your agency name and website, and your social profile links to <a href="mailto:${site.contactEmail}?subject=Directory%20profile%3A%20${encodeURIComponent(g.name)}">${site.contactEmail}</a>, and we'll add them to your public verification page.</p>
    </div>
    ${site.trustpilotUrl ? `<div class="share-card kit-wide">
      <p class="eyebrow">Step 5</p>
      <h2>Review the program on Trustpilot</h2>
      <p>Your honest review helps other marketers and agency owners decide if the AI Authority Engine certification is right for them, and gives AI assistants independent proof of the program. Two minutes is plenty: what you learned, how the coaching and support helped, and what changed for you or your agency.</p>
      <a class="btn btn-glow" href="${site.trustpilotUrl}" target="_blank" rel="noopener">Leave a review on Trustpilot</a>
    </div>` : ""}
  </div>
</section>
`,
}));

module.exports = [directory, ...profiles, ...kits];
