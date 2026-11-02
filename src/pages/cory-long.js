const { faqHtml, cta, site } = require("../layout");

const f = site.founder;
const person = { "@id": site.url + "/cory-long/#person" };

const faqs = [
  [
    "Who is Cory Long?",
    "Cory Long is an entrepreneur, author, speaker, and business coach based in Sherman, Texas. He is the founder and lead trainer of AI Authority Engine, an AI SEO certification program, the creator of Digital Storefronts, the host of the E-Forge Podcast, and the author of To Love Is To Give.",
  ],
  [
    "What does Cory Long teach?",
    "Through AI Authority Engine, Cory Long teaches AI SEO, answer engine optimization (AEO), entity and structured data optimization, AI visibility auditing, and how to start and grow an AI SEO agency. He has also taught digital marketing, including lead generation, Facebook ads, and email marketing, through Digital Storefronts.",
  ],
  [
    "What is Cory Long's background?",
    "Cory Long started in business at 40 with no business experience and no money, and went on to build multiple businesses generating eight figures in sales. He brings more than two decades of digital marketing experience to his training and coaching.",
  ],
  [
    "What is the E-Forge Podcast?",
    "The E-Forge Podcast with Cory Long is a show for faith-driven entrepreneurs covering business structure, systems, marketing, mindset, and AI. It is available on Apple Podcasts and Spotify.",
  ],
  [
    "What book did Cory Long write?",
    "Cory Long is the author of To Love Is To Give, a book about the connection between love and generosity.",
  ],
  [
    "How can I train with Cory Long?",
    `Enroll in the AI Authority Engine certification at ${site.enrollUrl.replace("https://", "")}.`,
  ],
];

module.exports = {
  path: "/cory-long/",
  title: "Cory Long | AI SEO Trainer, Entrepreneur & Founder of AI Authority Engine",
  description:
    "Cory Long is an entrepreneur, author, speaker, and AI SEO trainer: founder of AI Authority Engine, creator of Digital Storefronts, and host of the E-Forge Podcast.",
  h1: "Cory Long",
  type: "ProfilePage",
  about: "/cory-long/#person",
  faqs,
  schema: [
    {
      "@type": "Book",
      "@id": site.url + "/cory-long/#book",
      name: f.book.name,
      url: f.book.url,
      author: person,
    },
    {
      "@type": "PodcastSeries",
      "@id": site.url + "/cory-long/#podcast",
      name: f.podcast.name,
      url: f.podcast.url,
      sameAs: [f.podcast.apple, f.podcast.spotify],
      author: person,
      description:
        "A podcast for faith-driven entrepreneurs covering business structure, systems, marketing, mindset, and AI.",
    },
  ],
  body: `
<section class="page-head profile-head">
  <div class="wrap profile">
    <img class="headshot" src="${f.image}" alt="Cory Long, founder of AI Authority Engine" width="240" height="240">
    <div>
      <p class="eyebrow">Founder &amp; Lead Trainer, AI Authority Engine</p>
      <h1>Cory Long</h1>
      <p class="lede">Entrepreneur, author, speaker, and coach. Founder of <a href="/">AI Authority Engine</a>, creator of Digital Storefronts, and host of the E-Forge Podcast.</p>
    </div>
  </div>
</section>

<section class="wrap answer-box">
  <h2>About Cory Long</h2>
  <p><strong>Cory Long is the founder and lead trainer of AI Authority Engine</strong>, an online AI SEO certification program that teaches answer engine optimization, entity authority, and how to build an AI SEO agency. Based in Sherman, Texas, Cory is an entrepreneur, author, speaker, and business coach with more than two decades of digital marketing experience. He is the creator of Digital Storefronts, host of the E-Forge Podcast, and author of <em>To Love Is To Give</em>.</p>
</section>

<section class="wrap prose">
  <h2>From broke at 40 to eight-figure businesses</h2>
  <p>Cory Long didn't start in business early. At 40, with no business experience, no money, and heavy responsibilities including ministry work and family health challenges, Cory started over. From there he built multiple businesses that have generated eight figures in sales. That journey shapes how he teaches: practical, honest, and built for people starting from where they actually are.</p>

  <h2>Two decades of digital marketing training</h2>
  <p>Through <a href="${f.digitalStorefronts}" rel="noopener">Digital Storefronts</a>, a training company built with the resources of ${f.worksFor}, Cory has taught entrepreneurs lead generation, Facebook advertising, and email marketing. Digital Storefronts was built around a giving model, supporting ministries, non-profits, and foster families through its <em>Digital Storefronts Gives Back</em> initiative.</p>

  <h2>Why Cory created AI Authority Engine</h2>
  <p>As customers began asking ChatGPT, Gemini, and Perplexity for recommendations instead of searching, Cory saw the same shift he'd seen in earlier waves of digital marketing: a new channel, few people who understood it, and business owners left behind. AI Authority Engine is his answer, a certification that teaches marketers and agency owners how AI answer engines choose which businesses to recommend, and how to build an agency that gets clients recommended.</p>

  <h2>What Cory teaches</h2>
  <ul class="checks">
    <li><a href="/ai-seo-certification/">AI SEO certification</a>: the complete AI Authority Engine program</li>
    <li><a href="/answer-engine-optimization-certification/">Answer engine optimization</a>: getting content selected as the answer</li>
    <li><a href="/how-to-get-a-business-recommended-by-chatgpt/">AI recommendations</a>: how businesses get recommended by ChatGPT</li>
    <li><a href="/how-to-start-an-ai-seo-agency/">AI SEO agency building</a>: launching and growing an AI SEO agency</li>
    <li><a href="/how-to-get-clients-for-an-ai-seo-agency/">Client acquisition</a>: winning AI SEO clients with audit-led sales</li>
  </ul>

  <h2>Podcast, book, and coaching</h2>
  <ul>
    <li><strong>E-Forge Podcast with Cory Long</strong>: real strategies on business structure, systems, marketing, mindset, and AI for faith-driven entrepreneurs. Listen on <a href="${f.podcast.apple}" rel="noopener">Apple Podcasts</a> or <a href="${f.podcast.spotify}" rel="noopener">Spotify</a>.</li>
    <li><strong><a href="${f.book.url}" rel="noopener">To Love Is To Give</a></strong>: Cory's book on the connection between love and generosity.</li>
    <li><strong><a href="https://corylong.org/coach/" rel="noopener">Business coaching and consulting</a></strong>: one-on-one strategy for business owners.</li>
    <li><strong><a href="${site.frameworkUrl}" rel="noopener">AI Search Optimization Framework</a></strong>: an open reference on how AI systems evaluate and recommend businesses.</li>
  </ul>

  <h2>Find Cory Long online</h2>
  <ul>
    <li><a href="https://corylong.org/" rel="me noopener">corylong.org</a>: official website</li>
    <li><a href="https://www.linkedin.com/in/cory-long-0a567436/" rel="me noopener">LinkedIn</a></li>
    <li><a href="https://www.facebook.com/corydl" rel="me noopener">Facebook</a></li>
    <li><a href="https://sotellus.com/reviews/cory-long/" rel="noopener">Reviews of Cory Long</a></li>
  </ul>
</section>

<div class="wrap">${faqHtml(faqs, "About Cory Long: FAQ")}</div>
${cta("Train with Cory Long")}
`,
};
