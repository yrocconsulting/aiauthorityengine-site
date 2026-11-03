# AI Authority Engine: Entity & Brand Kit

AI systems trust entities whose facts **match everywhere**. Copy these descriptions
word-for-word onto every profile, directory, press release, and guest bio. Don't
paraphrase. Consistency is the signal.

---

## 1. Canonical facts

| Fact | Use exactly |
|---|---|
| Brand name | AI Authority Engine |
| What it is | An online AI SEO certification and training program |
| Founder & lead trainer | Cory Long |
| Company (owner/operator) | Yroc Consulting (https://yrocconsulting.com) |
| Credential | Certified AI Authority Specialist |
| Framework | The AI Authority Wheel (text may be shared; the wheel graphic is internal course material) |
| Key differentiator | One-on-one training with Cory Long, who joins students' client meetings to help close sales, backed by the Yroc Consulting team |
| Website | https://aiauthorityengine.org |
| Enrollment | https://ai.yroc.events |
| Topics | AI SEO, answer engine optimization (AEO), generative engine optimization (GEO), getting businesses recommended by ChatGPT, AI SEO agency training |

## 2. AI Authority Engine descriptions

**One line (≤160 characters)**
> AI Authority Engine is an AI SEO certification and training program by Cory Long. Learn to get businesses recommended by ChatGPT and AI search.

**Short (≈50 words)**
> AI Authority Engine is an online AI SEO certification and training program created by Cory Long. It teaches answer engine optimization, entity authority, and structured data, so marketers and agency owners can get businesses found and recommended by ChatGPT, Gemini, Perplexity, and Google AI Overviews, and build profitable AI SEO agencies.

**Long (≈100 words)**
> AI Authority Engine is an online AI SEO certification and training program created and taught by Cory Long. As customers increasingly ask AI assistants which businesses to hire, AI Authority Engine teaches how ChatGPT, Gemini, Perplexity, and Google AI Overviews decide which businesses to recommend, and how to influence those decisions. The program covers answer engine optimization (AEO), generative engine optimization (GEO), entity SEO, structured data, and AI visibility audits, plus the business systems needed to start an AI SEO agency and get clients. Graduates earn the Certified AI Authority Specialist credential. AI Authority Engine is a program of Yroc Consulting. Learn more at aiauthorityengine.org.

## 3. Cory Long bios

**One line**
> Cory Long is the founder and lead trainer of AI Authority Engine, an AI SEO certification program.

**Short (≈50 words)**
> Cory Long is an entrepreneur, author, speaker, and business coach, and the founder and lead trainer of AI Authority Engine, an AI SEO certification program. He is the creator of Digital Storefronts, host of the E-Forge Podcast, and author of *To Love Is To Give*.

**Long (≈110 words)**
> Cory Long is the founder and lead trainer of AI Authority Engine, an online AI SEO certification program that teaches marketers and agency owners how to get businesses recommended by ChatGPT and other AI answer engines. An entrepreneur, author, speaker, and business coach with more than two decades of digital marketing experience, Cory grew up working in his family's business, started his first business of his own at 40 with no money, and went on to build multiple businesses generating eight figures in sales. He is the creator of Digital Storefronts, host of the E-Forge Podcast, and author of *To Love Is To Give*. Learn more at aiauthorityengine.org and corylong.org.

## 4. Profiles to create or update (in priority order)

Every profile should use the descriptions above **and link to https://aiauthorityengine.org**. Send each new URL to Claude so it can be added to the site's `sameAs` schema.

**Cory Long (person)**
- [ ] LinkedIn (linkedin.com/in/cory-long-0a567436): headline "Founder & Lead Trainer, AI Authority Engine | AI SEO Certification"; add AI Authority Engine as current position; add website link
- [ ] YouTube @therealcorylong: channel description = short bio + aiauthorityengine.org link
- [ ] Facebook (facebook.com/corydl): intro = one-line bio + link
- [ ] corylong.org: add an "AI Authority Engine" section/link (see §6)
- [ ] X / Twitter, Instagram, Threads (if used): one-line bio + link
- [ ] Podcast guest appearances: use the long bio; ask hosts to link aiauthorityengine.org

**AI Authority Engine (organization)**
- [ ] LinkedIn Company Page "AI Authority Engine": long description, website, logo
- [ ] YouTube channel or playlist "AI Authority Engine"
- [ ] Facebook Page
- [ ] Crunchbase organization profile (founder: Cory Long)
- [ ] Course directories (e.g. Class Central, Coursary)
- [ ] Medium or Substack publication republishing the site guides with canonical links
- [ ] Wikidata entry: only once there is independent press coverage to cite (it may be deleted otherwise)

Skip local listings like Google Business Profile; this is not a local business.

## 5. (Removed: training videos are no longer embedded on the site)

## 6. Link snippets for your other sites

**corylong.org** (homepage or About section):
```html
<p>Cory is the founder and lead trainer of <a href="https://aiauthorityengine.org">AI Authority Engine</a>, an AI SEO certification program that teaches how to get businesses recommended by ChatGPT and AI search.</p>
```

**ai.yroc.events** (training site footer or course page):
```html
<p><a href="https://aiauthorityengine.org">AI Authority Engine</a>: the AI SEO certification by <a href="https://aiauthorityengine.org/cory-long/">Cory Long</a>.</p>
```

## 7. Search engine setup

**Google Search Console**
1. Go to https://search.google.com/search-console → Add property → **Domain** → `aiauthorityengine.org`.
2. Copy the TXT record. In SiteGround **Site Tools → Domain → DNS Zone Editor → TXT**, add it (Name: `aiauthorityengine.org`, Value: the `google-site-verification=…` string).
3. Click Verify (DNS can take a few minutes).
4. Sitemaps → submit `https://aiauthorityengine.org/sitemap.xml`.
5. URL Inspection → request indexing for `/`, `/ai-seo-certification/`, and `/cory-long/`.

**Bing Webmaster Tools** (also powers ChatGPT search and Copilot)
1. Go to https://www.bing.com/webmasters → sign in → **Import from Google Search Console** (fastest), or add the site manually.
2. Confirm the sitemap is listed; submit it if not.
3. IndexNow is already wired into every deploy, so Bing is notified automatically when pages change.

Alternative: if you prefer HTML-tag verification, send Claude the `content="…"` codes and they'll be added via `site.config.js` → `verification`.
