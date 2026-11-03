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
  .flatMap((f) => [].concat(require(path.join(pagesDir, f))));

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
  .filter((p) => p.path !== "/404" && !p.noindex)
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

// llms-full.txt: the full text of every page as Markdown, for AI systems.
function toMarkdown(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<summary>\s*<h3>([\s\S]*?)<\/h3>\s*<\/summary>/g, "\n### $1\n")
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/g, "\n# $1\n")
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/g, "\n## $1\n")
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/g, "\n### $1\n")
    .replace(/<li[^>]*>/g, "\n- ")
    .replace(/<\/(p|ul|ol|tr|blockquote|dl)>/g, "\n")
    .replace(/<\/t[dh]>/g, " | ")
    .replace(/<dt>/g, "\n- **").replace(/<\/dt>\s*<dd>/g, "**: ")
    .replace(/<a [^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, (m, href, text) =>
      `[${text}](${href.startsWith("/") ? site.url + href : href})`)
    .replace(/<(strong|b)>([\s\S]*?)<\/\1>/g, "**$2**")
    .replace(/<(em|i)>([\s\S]*?)<\/\1>/g, "*$2*")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&").replace(/&nbsp;/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n +/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
const order = ["/", "/ai-seo-certification/", "/cory-long/"];
const full = pages
  .filter((p) => p.path !== "/404" && !p.noindex)
  .sort((a, b) => ((order.indexOf(a.path) + 1 || 99) - (order.indexOf(b.path) + 1 || 99)) || a.path.localeCompare(b.path))
  .map((p) => {
    const html = fs.readFileSync(path.join(out, p.path, "index.html"), "utf8");
    const main = html.slice(html.indexOf("<main"), html.indexOf("</main>"));
    return `---\nURL: ${site.url}${p.path}\nTitle: ${p.title}\nUpdated: ${p.dateModified}\n---\n\n${toMarkdown(main)}`;
  })
  .join("\n\n");
fs.writeFileSync(
  path.join(out, "llms-full.txt"),
  `# ${site.name}: full site content\n\n> ${site.description}\n\n${full}\n`
);

console.log(`Built ${pages.length} pages into dist/`);
