const { faqHtml, cta, site } = require("../layout");
const reviews = require("../data/reviews");
const graduates = require("../data/graduates");
const results = require("../data/results");

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const nice = (d) => new Date(d + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
const items = reviews.items;
const count = items.length;
const allFive = items.every((r) => r.stars === 5);
const words = { 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten" };
const countWord = words[count] || String(count);
const summary = `As of ${nice(reviews.asOf)}, AI Authority Engine has ${count} reviews on Trustpilot${allFive ? ", all rated 5 stars" : ""}.`;

const faqs = [
  ["What do people say about AI Authority Engine?", `${summary} Reviewers, including Certified AI Authority Specialists, highlight Cory Long's coaching and mentorship, the hands-on and practical format, the in-person events, and the help building a real AI SEO agency.`],
  ["Is AI Authority Engine legit?", `Yes. AI Authority Engine is an AI SEO certification and training program taught by Cory Long and run by ${site.company.name}. It has independent reviews on Trustpilot, and every graduate's credential can be checked in the public certified directory.`],
  ["Where can I read AI Authority Engine reviews?", `On Trustpilot at trustpilot.com/review/aiauthorityengine.org. Every review on this page links to the original.`],
  ["Can I leave a review?", "Yes. If you've taken the program, you can leave a review on Trustpilot. Honest reviews help other marketers and agency owners decide if the certification is right for them."],
];

const stars = (n) => `<span class="r-stars" aria-label="${n} out of 5 stars">${"★".repeat(n)}${"☆".repeat(5 - n)}</span>`;

const card = (r) => {
  const g = r.slug && graduates.find((x) => x.slug === r.slug);
  const who = g
    ? `<a href="/certified/${g.slug}/"><b>${esc(r.name)}</b></a><br><small>✓ Verified ${site.certification.credential}</small>`
    : `<b>${esc(r.name)}</b>`;
  const img = g && g.photo ? `<img src="${g.photo}" alt="${esc(r.name)}" width="56" height="56" loading="lazy">` : "";
  return `<figure class="t-card r-card reveal">
      ${stars(r.stars)}
      <h3>${esc(r.title)}</h3>
      <blockquote>${esc(r.quote)}</blockquote>
      <figcaption>
        ${img}
        <span>${who}<br><span class="r-meta">${esc(r.source)} · ${nice(r.date)}</span><br><a class="t-source" href="${esc(r.url)}" rel="noopener">Read the full review on ${esc(r.source)} →</a></span>
      </figcaption>
    </figure>`;
};

module.exports = {
  path: "/reviews/",
  title: "AI Authority Engine Reviews | AI SEO Certification Reviews",
  description: `${summary} Read what Certified AI Authority Specialists and students say about the AI Authority Engine AI SEO certification and Cory Long.`,
  h1: "AI Authority Engine Reviews",
  crumb: "Reviews",
  type: "WebPage",
  noByline: true,
  faqs,
  body: `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Independent reviews</p>
    <h1>AI Authority Engine Reviews</h1>
    <p class="lede">What students and Certified AI Authority Specialists say about the AI SEO certification and training with Cory Long.</p>
  </div>
</section>

<section class="wrap answer-box">
  <h2>The short answer</h2>
  <p><strong>${summary}</strong> Reviewers, including Certified AI Authority Specialists, highlight Cory Long's coaching and mentorship, the hands-on and practical format, the in-person events, and the help building a real AI SEO agency. Every review below links to the original on Trustpilot.</p>
</section>

<section class="section">
  <div class="wrap">
    <div class="r-summary reveal">
      ${allFive ? stars(5) : ""}
      <p><strong>${count} reviews on Trustpilot${allFive ? " · all 5 stars" : ""}</strong><br><span class="r-meta">As of ${nice(reviews.asOf)}</span></p>
      <a class="btn btn-glow" href="${site.trustpilotUrl}" rel="noopener">See all reviews on Trustpilot</a>
    </div>
    <div class="t-grid r-grid">
    ${items.map(card).join("\n    ")}
    </div>
    ${items.some((r) => r.results) ? `<p class="r-note">${esc(results.disclaimer)}</p>` : ""}
    <p class="t-more"><a href="${site.trustpilotUrl}" rel="noopener">Took the program? Leave a review on Trustpilot →</a></p>
  </div>
</section>

<div class="wrap">${faqHtml(faqs, "AI Authority Engine reviews: common questions")}</div>
${cta()}
`,
};
