# aiauthorityengine.org

Static website for **AI Authority Engine**, the AI SEO certification and training program taught by Cory Long.

## How it works

- `site.config.js`: core brand facts (name, URLs, certification, Cory Long's profile links). Edit once; used everywhere.
- `src/pages/*.js`: one file per page (title, meta description, FAQs, body HTML).
- `src/layout.js`: shared header, footer, and JSON-LD schema graph (Organization, Person, Course, Credential, FAQPage, HowTo, Breadcrumbs).
- `public/`: copied as-is (CSS, images, `robots.txt`, `llms.txt`, `.htaccess`).
- `node build.js` writes the finished site to `dist/` and generates `sitemap.xml`. No dependencies.

Preview locally:

```bash
node build.js && npx serve dist
```

## Deploying

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and rsyncs `dist/` to SiteGround over SSH.

Required GitHub Actions secrets:

| Secret | Value |
|---|---|
| `SG_HOST` | SiteGround SSH hostname (Site Tools → Devs → SSH Keys Manager → Credentials) |
| `SG_USER` | SSH username |
| `SG_PORT` | SSH port (usually `18765`) |
| `SG_SSH_KEY` | Private key (full text, including BEGIN/END lines) |
| `SG_SSH_PASSPHRASE` | Key passphrase (only if the key has one; SiteGround-generated keys do) |
| `SG_PATH` | Web root, e.g. `www/aiauthorityengine.org/public_html` |

The rsync uses `--delete`, so anything in the web root that isn't part of this site will be removed (except `.well-known/` and `cgi-bin/`).
