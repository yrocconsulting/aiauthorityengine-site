const { cta, site } = require("../layout");
const graduates = require("../data/graduates");

const credential = site.certification.credential;
const nice = (d) =>
  new Date(d + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
const pageUrl = (g) => `${site.url}/certified/${g.slug}/`;

function linkedInUrl(g) {
  const [y, m] = g.issued.split("-");
  const q = new URLSearchParams({
    startTask: "CERTIFICATION_NAME",
    name: credential,
    organizationName: site.name,
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

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

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
      itemListElement: graduates.map((g, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: pageUrl(g),
        name: g.name,
      })),
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
      <label class="field"><span>Search by name</span><input type="search" placeholder="e.g. Jones" data-filter autocomplete="off"></label>
      <form class="field verify-form" data-verify>
        <span>Verify a credential ID</span>
        <div><input type="text" placeholder="AIAE-L1-2026-0001" required autocomplete="off"><button class="btn btn-glow" type="submit">Verify</button></div>
        <p class="verify-msg" aria-live="polite"></p>
      </form>
    </div>
    <ul class="grad-grid">
      ${graduates
        .map(
          (g) => `<li class="grad-card reveal" data-name="${g.name.toLowerCase()}" data-id="${g.id}">
        <img src="/assets/badge-sm.webp" alt="" width="72" height="61" loading="lazy">
        <div>
          <h2><a href="/certified/${g.slug}/">${g.name}</a></h2>
          <p>${credential} · Level ${g.level}</p>
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

// ------------------------------------------------------------ graduate pages
const profiles = graduates.map((g) => {
  const url = pageUrl(g);
  return {
    path: `/certified/${g.slug}/`,
    title: `${g.name}, ${credential} | Verified`,
    description: `${g.name} is a ${credential} (Level ${g.level}), credentialed by AI Authority Engine on ${nice(g.issued)}. Credential ID ${g.id}.`,
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
    <img class="tilt" src="/assets/badge-sm.webp" alt="${credential} badge" width="200" height="171">
    <div>
      <p class="eyebrow">Credential verification</p>
      <h1>${g.name}</h1>
      <p class="lede">${credential} · Level ${g.level}</p>
      <span class="verified big">✓ Verified by ${site.name}</span>
    </div>
  </div>
</section>

<section class="wrap answer-box">
  <h2>Credential status: active</h2>
  <p><strong>${g.name} is a ${credential} (Level ${g.level}), credentialed by ${site.name} on ${nice(g.issued)}.</strong> This credential was awarded after completing the AI Authority Engine AI SEO certification program taught by Cory Long, including all required coursework.</p>
</section>

<section class="section">
  <div class="wrap split">
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
    <div class="share-card">
      <h2>For ${g.name.split(" ")[0]}</h2>
      <p>Share your credential and link back to this verification page.</p>
      <div class="share-actions">
        <a class="btn btn-glow" href="${esc(linkedInUrl(g))}" target="_blank" rel="noopener">Add to LinkedIn</a>
        <a class="btn btn-ghost" href="/certificates/${g.slug}.pdf" download>Download certificate (PDF)</a>
      </div>
      <h3>Website badge</h3>
      <p class="small">Paste this code on your website to display your verified badge:</p>
      <textarea class="embed" readonly rows="4">${esc(embedCode(g))}</textarea>
      <button class="btn btn-sm" type="button" data-copy>Copy code</button>
    </div>
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

module.exports = [directory, ...profiles];
