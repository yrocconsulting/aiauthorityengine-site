const { cta, priceText, site } = require("../layout");

module.exports = {
  path: "/about/",
  title: "About AI Authority Engine | AI SEO Certification & Training",
  description:
    "About AI Authority Engine: the AI SEO certification and training program founded by Cory Long to teach answer engine optimization and AI SEO agency building.",
  h1: "About AI Authority Engine",
  crumb: "About",
  type: "AboutPage",
  body: `
<section class="page-head">
  <div class="wrap">
    <h1>About AI Authority Engine</h1>
    <p class="lede">We teach people how to make businesses visible, trusted, and recommended in AI search.</p>
  </div>
</section>

<section class="wrap answer-box">
  <h2>At a glance</h2>
  <dl class="facts">
    <dt>Name</dt><dd>AI Authority Engine</dd>
    <dt>What it is</dt><dd>An online AI SEO certification and training program</dd>
    <dt>Founder &amp; lead trainer</dt><dd><a href="/cory-long/">Cory Long</a></dd>
    <dt>Company</dt><dd>A program of <a href="${site.company.url}" rel="noopener">${site.company.name}</a></dd>
    <dt>Credential</dt><dd>${site.certification.credential}</dd>
    <dt>Topics</dt><dd>AI SEO, answer engine optimization, generative engine optimization, entity SEO, structured data, AI SEO agency building</dd>
    <dt>Format</dt><dd>Online: self-paced courses plus weekly live calls, challenge calls, community, and live events</dd>
    <dt>Program membership</dt><dd>${priceText()}</dd>
    <dt>Certification fee</dt><dd>None; earned by completing the required work</dd>
    <dt>Contact</dt><dd><a href="mailto:${site.contactEmail}">${site.contactEmail}</a></dd>
    <dt>Enrollment</dt><dd><a href="${site.enrollUrl}" rel="noopener">${site.enrollUrl.replace("https://", "")}</a></dd>
    <dt>Website</dt><dd>${site.url.replace("https://", "")}</dd>
  </dl>
</section>

<section class="wrap prose">
  <h2>Our mission</h2>
  <p>Search is shifting from lists of links to direct answers. When AI assistants recommend a business, they name only a few. AI Authority Engine exists to train the people who help businesses earn those recommendations, honestly and sustainably.</p>

  <h2>Who's behind AI Authority Engine</h2>
  <p>AI Authority Engine is built and operated by <a href="${site.company.url}" rel="noopener">${site.company.name}</a>, an AI optimization, SEO, and brand visibility company. The curriculum is created and taught by <a href="/cory-long/">Cory Long</a>. ${site.company.name} also maintains the open <a href="${site.frameworkUrl}" rel="noopener">AI Search Optimization Framework</a>.</p>

  <h2>What we believe</h2>
  <ul class="checks">
    <li><strong>Clarity beats tricks.</strong> AI systems reward businesses that are easy to understand and verify.</li>
    <li><strong>Trust is earned off-site.</strong> What others say about a business matters as much as what it says about itself.</li>
    <li><strong>No guarantees, real measurement.</strong> No one controls AI outputs; we teach how to improve the signals and track the results.</li>
    <li><strong>Open knowledge.</strong> Our <a href="${site.frameworkUrl}" rel="noopener">AI Search Optimization Framework</a> is freely available.</li>
  </ul>
</section>
${cta()}
`,
};
