const { cta, videosHtml, site } = require("../layout");

module.exports = {
  path: "/videos/",
  title: "AI SEO Training Videos with Cory Long | AI Authority Engine",
  description:
    "Watch Cory Long's live AI SEO training: how AI answer engines recommend businesses and how to build an AI SEO agency, from AI Authority Engine.",
  h1: "AI SEO Training Videos",
  crumb: "Videos",
  type: "CollectionPage",
  videos: true,
  body: `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Watch &amp; learn</p>
    <h1>AI SEO Training Videos</h1>
    <p class="lede">Recordings of Cory Long's live AI training. See the AI Authority Engine approach before you enroll.</p>
  </div>
</section>
<section class="wrap answer-box">
  <h2>About these videos</h2>
  <p><strong>These are recordings of live AI training sessions taught by Cory Long, founder of AI Authority Engine.</strong> Watch them to see Cory's teaching style, then explore the <a href="/ai-seo-certification/">AI SEO certification</a>.</p>
</section>
<div class="wrap">${videosHtml("Live training recordings")}</div>
${cta()}
`,
};
