const { cta, site } = require("../layout");

const effective = "November 3, 2026";
const mail = `<a href="mailto:${site.contactEmail}">${site.contactEmail}</a>`;

const contact = {
  path: "/contact/",
  title: "Contact AI Authority Engine",
  description: `Contact AI Authority Engine, the AI SEO certification program by Cory Long. Email ${site.contactEmail} for enrollment, credential verification, partnerships, and media.`,
  h1: "Contact AI Authority Engine",
  crumb: "Contact",
  type: "ContactPage",
  noByline: true,
  body: `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Get in touch</p>
    <h1>Contact AI Authority Engine</h1>
    <p class="lede">Questions about the certification, a credential, partnerships, or media? We'd love to hear from you.</p>
  </div>
</section>
<section class="wrap answer-box">
  <h2>How to reach us</h2>
  <p><strong>Email AI Authority Engine, a program of ${site.company.name}, at ${mail}.</strong> We handle questions about enrollment, the Certified AI Authority Specialist credential, partnerships, podcast and speaking requests for Cory Long, and media inquiries.</p>
</section>
<section class="section">
  <div class="wrap split">
    <div class="contact-card">
      <p class="eyebrow">Email</p>
      <a class="big" href="mailto:${site.contactEmail}">${site.contactEmail}</a>
      <p>We typically reply within two business days.</p>
    </div>
    <div class="prose">
      <h2>Common requests</h2>
      <ul class="checks">
        <li><strong>Enroll:</strong> join the program at <a href="${site.enrollUrl}" rel="noopener">${site.enrollUrl.replace("https://", "")}</a></li>
        <li><strong>Verify a credential:</strong> search the <a href="/certified/">certified directory</a></li>
        <li><strong>Media &amp; podcasts:</strong> book <a href="/cory-long/">Cory Long</a> as a guest or speaker</li>
        <li><strong>Program questions:</strong> see the <a href="/faq/">FAQ</a> first</li>
      </ul>
    </div>
  </div>
</section>
${cta()}
`,
};

const privacy = {
  path: "/privacy/",
  title: "Privacy Policy | AI Authority Engine",
  description: "How the AI Authority Engine website handles your information.",
  h1: "Privacy Policy",
  crumb: "Privacy Policy",
  noByline: true,
  body: `
<section class="page-head">
  <div class="wrap">
    <h1>Privacy Policy</h1>
    <p class="lede">Effective ${effective}. Plain English, no surprises.</p>
  </div>
</section>
<section class="wrap prose">
  <h2>Summary</h2>
  <p>This website (${site.url.replace("https://", "")}) is operated by <a href="${site.company.url}" rel="noopener">${site.company.name}</a>. It does not use analytics, advertising trackers, or cookies of its own, and it does not ask you to create an account.</p>

  <h2>Information we receive</h2>
  <ul>
    <li><strong>Server logs.</strong> Like all websites, our hosting provider automatically records technical information such as IP address, browser type, pages requested, and time of the request, for security and reliability.</li>
    <li><strong>Email.</strong> If you email ${mail}, we receive your email address and whatever you choose to include, and use it only to reply.</li>
    <li><strong>AI visibility quiz.</strong> Your quiz answers are scored entirely in your browser. They are not sent to us or stored.</li>
  </ul>

  <h2>Third-party services</h2>
  <ul>
    <li><strong>Google Fonts</strong> delivers the site's typefaces; your browser requests them from Google.</li>
    <li><strong>YouTube</strong> videos are embedded in privacy-enhanced mode (youtube-nocookie.com). YouTube may set cookies if you play a video.</li>
    <li><strong>Enrollment</strong> happens on our training platform at <a href="${site.enrollUrl}" rel="noopener">${site.enrollUrl.replace("https://", "")}</a>, which has its own privacy terms covering account, payment, and course data.</li>
  </ul>

  <h2>Certified directory</h2>
  <p>Names, credential levels, issue dates, and credential IDs of Certified AI Authority Specialists are published in the <a href="/certified/">public directory</a> so employers and clients can verify credentials. Graduates can ask to be removed by emailing ${mail}.</p>

  <h2>Your choices</h2>
  <p>To ask what information we hold about you, or to have it corrected or deleted, email ${mail}. We do not sell personal information.</p>

  <h2>Changes</h2>
  <p>If this policy changes, we'll update this page and its effective date.</p>
</section>
`,
};

const terms = {
  path: "/terms/",
  title: "Terms of Use | AI Authority Engine",
  description: "Terms of use for the AI Authority Engine website.",
  h1: "Terms of Use",
  crumb: "Terms of Use",
  noByline: true,
  body: `
<section class="page-head">
  <div class="wrap">
    <h1>Terms of Use</h1>
    <p class="lede">Effective ${effective}.</p>
  </div>
</section>
<section class="wrap prose">
  <h2>About these terms</h2>
  <p>${site.name} is a program of <a href="${site.company.url}" rel="noopener">${site.company.name}</a>, which operates this website. These terms cover your use of the ${site.name} website. Enrollment in the program, membership billing, and course access are governed by the terms presented at checkout on <a href="${site.enrollUrl}" rel="noopener">${site.enrollUrl.replace("https://", "")}</a>.</p>

  <h2>Educational content, no guarantees</h2>
  <p>Content on this site is for education and information. No one controls the outputs of AI systems such as ChatGPT, Gemini, Perplexity, or Google AI Overviews, so we do not guarantee that any business will be recommended or ranked by them. Results depend on many factors outside anyone's control.</p>

  <h2>Credentials</h2>
  <p>The Certified AI Authority Specialist credential and badge are issued by ${site.name}. A credential is valid only if it appears in the <a href="/certified/">certified directory</a>. Only credential holders may display the badge, and only to represent their own verified credential. We may revoke a credential that was obtained or used improperly.</p>

  <h2>Intellectual property</h2>
  <p>The ${site.name} name, logo, badge, and site content are owned by ${site.company.name}. You may quote short passages with attribution and a link. Please don't republish full pages or use our marks in a way that suggests endorsement.</p>

  <h2>Links</h2>
  <p>We link to other websites for reference. We aren't responsible for their content or practices.</p>

  <h2>Contact</h2>
  <p>Questions about these terms: ${mail}.</p>
</section>
`,
};

module.exports = [contact, privacy, terms];
