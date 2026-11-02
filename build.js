// Zero-dependency static site builder: node build.js -> dist/
const fs = require("fs");
const path = require("path");
const { render, site } = require("./src/layout");

const out = path.join(__dirname, "dist");
fs.rmSync(out, { recursive: true, force: true });
fs.cpSync(path.join(__dirname, "public"), out, { recursive: true });

const pagesDir = path.join(__dirname, "src/pages");
const pages = fs
  .readdirSync(pagesDir)
  .filter((f) => f.endsWith(".js"))
  .map((f) => require(path.join(pagesDir, f)));

const today = new Date().toISOString().slice(0, 10);
for (const page of pages) {
  page.dateModified = page.dateModified || today;
  const file =
    page.path === "/404"
      ? path.join(out, "404.html")
      : path.join(out, page.path, "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, render(page));
}

const urls = pages
  .filter((p) => p.path !== "/404")
  .sort((a, b) => a.path.localeCompare(b.path))
  .map(
    (p) =>
      `  <url><loc>${site.url}${p.path}</loc><lastmod>${p.dateModified}</lastmod></url>`
  )
  .join("\n");
fs.writeFileSync(
  path.join(out, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);

console.log(`Built ${pages.length} pages into dist/`);
