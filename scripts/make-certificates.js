// Generates a print-ready certificate PDF for every graduate in src/data/graduates.js
// Output: public/certificates/<slug>.pdf (deployed with the site).
// Usage: node scripts/make-certificates.js            (all graduates, skips existing)
//        node scripts/make-certificates.js --force    (regenerate all)
// Requires Playwright with Chromium (npm i -D playwright && npx playwright install chromium).
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");
const site = require("../site.config");
const graduates = require("../src/data/graduates");

const root = path.join(__dirname, "..");
const outDir = path.join(root, "public/certificates");
const force = process.argv.includes("--force");
const b64 = (p) => fs.readFileSync(path.join(root, p)).toString("base64");
const font = (family, file, weight = 400) =>
  `@font-face{font-family:"${family}";font-weight:${weight};src:url(data:font/woff2;base64,${b64("scripts/fonts/" + file)}) format("woff2")}`;

const fonts = [
  font("Exo 2", "Exo-2-wght-800.woff2", 800),
  font("Inter", "Inter-wght-400.woff2", 400),
  font("Inter", "Inter-wght-600.woff2", 600),
  font("Great Vibes", "Great-Vibes.woff2", 400),
].join("");

const badge = `data:image/webp;base64,${b64("public/assets/badge.webp")}`;
const nice = (d) =>
  new Date(d + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

const html = (g) => `<!doctype html><html><head><meta charset="utf-8"><style>
${fonts}
@page { size: 11in 8.5in; margin: 0; }
* { box-sizing: border-box; margin: 0; }
body { width: 11in; height: 8.5in; font-family: Inter, sans-serif; color: #0b1640; background: #fff; }
.frame { position: absolute; inset: .32in; border: 3px solid #0b1640; border-radius: 6px; padding: .1in; }
.inner { height: 100%; border: 1.5px solid #1f8bff; border-radius: 3px; position: relative; overflow: hidden;
  background: radial-gradient(5in 3.2in at 50% 0%, rgba(31,139,255,.10), transparent 70%), #fff; }
.corner { position: absolute; width: 1.1in; height: 1.1in; border: 3px solid #1f8bff; }
.tl { top: .18in; left: .18in; border-right: 0; border-bottom: 0; }
.tr { top: .18in; right: .18in; border-left: 0; border-bottom: 0; }
.bl { bottom: .18in; left: .18in; border-right: 0; border-top: 0; }
.br { bottom: .18in; right: .18in; border-left: 0; border-top: 0; }
.content { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; text-align: center; padding: .42in .9in .4in; }
.badge { width: 2.15in; }
.org { font-family: "Exo 2"; font-weight: 800; letter-spacing: .32em; font-size: 12pt; color: #1f8bff; margin-top: .06in; }
h1 { font-family: "Exo 2"; font-weight: 800; font-size: 33pt; letter-spacing: .02em; margin-top: .06in; color: #0b1640; }
.lvl { font-weight: 600; letter-spacing: .3em; font-size: 10pt; color: #5b6b8a; margin-top: .02in; }
.certify { font-size: 12pt; color: #3a4a6b; margin-top: .2in; }
.name { font-family: "Great Vibes"; font-size: 50pt; line-height: 1.05; color: #0b1640; margin-top: .02in; padding: 0 .4in; border-bottom: 1.5px solid #c7d3ea; min-width: 6in; }
.text { font-size: 11pt; line-height: 1.5; color: #3a4a6b; max-width: 7.6in; margin-top: .14in; }
.foot { display: flex; justify-content: space-between; align-items: flex-end; width: 100%; margin-top: auto; }
.sig { width: 2.7in; text-align: center; }
.sig .s { font-family: "Great Vibes"; font-size: 28pt; line-height: 1; color: #0b1640; }
.sig .line { border-top: 1.5px solid #0b1640; margin-top: .04in; padding-top: .05in; font-size: 9.5pt; font-weight: 600; }
.sig .role { font-size: 8.5pt; color: #5b6b8a; }
.meta { width: 2.7in; text-align: center; font-size: 8.5pt; color: #3a4a6b; line-height: 1.55; }
.meta b { color: #0b1640; }
.id { font-family: "Exo 2"; font-weight: 800; font-size: 10.5pt; letter-spacing: .06em; color: #1f8bff; }
</style></head><body>
<div class="frame"><div class="inner">
  <div class="corner tl"></div><div class="corner tr"></div><div class="corner bl"></div><div class="corner br"></div>
  <div class="content">
    <img class="badge" src="${badge}">
    <div class="org">AI AUTHORITY ENGINE</div>
    <h1>${site.certification.credential.toUpperCase()}</h1>
    <div class="lvl">LEVEL ${g.level} CERTIFICATION</div>
    <div class="certify">This certifies that</div>
    <div class="name">${g.name}</div>
    <div class="text">has successfully completed the AI Authority Engine certification program and its required coursework in AI SEO, answer engine optimization, entity authority, and AI visibility, and is hereby recognized as a ${site.certification.credential}.</div>
    <div class="foot">
      <div class="sig"><div class="s">${site.founder.name}</div><div class="line">${site.founder.name}</div><div class="role">Founder &amp; Lead Trainer, AI Authority Engine</div></div>
      <div class="meta">Issued <b>${nice(g.issued)}</b><br>Credential ID<br><span class="id">${g.id}</span></div>
      <div class="meta">Verify this credential at<br><b>${site.url.replace("https://", "")}/certified/${g.slug}</b></div>
    </div>
  </div>
</div></div>
</body></html>`;

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const g of graduates) {
    const file = path.join(outDir, `${g.slug}.pdf`);
    if (fs.existsSync(file) && !force) { console.log(`skip  ${g.slug} (exists)`); continue; }
    await page.setContent(html(g), { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({ path: file, width: "11in", height: "8.5in", printBackground: true, pageRanges: "1" });
    if (process.argv.includes("--png")) await page.setViewportSize({ width: 1056, height: 816 }), await page.screenshot({ path: file.replace(/\.pdf$/, ".preview.png") });
    console.log(`made  ${path.relative(root, file)}`);
  }
  await browser.close();
})();
