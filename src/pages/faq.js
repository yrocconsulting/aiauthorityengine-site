const { faqHtml, cta, site } = require("../layout");

const enroll = site.enrollUrl.replace("https://", "");

const faqs = [
  ["What is AI Authority Engine?", "AI Authority Engine is an online AI SEO certification and training program taught by Cory Long. It teaches how to get businesses found and recommended by AI answer engines such as ChatGPT, Gemini, Perplexity, and Google AI Overviews, and how to build an AI SEO agency."],
  ["Who is the instructor?", "Cory Long, founder and lead trainer of AI Authority Engine."],
  ["What is AI SEO?", "AI SEO is the practice of making a business easy for AI systems to identify, understand, trust, and recommend, using entity consistency, structured data, authority signals, and answer-first content."],
  ["What is answer engine optimization?", "Answer engine optimization (AEO) is structuring content and a business's online presence so AI assistants and answer features select it as the direct answer to a question."],
  ["What certification do I receive?", `Graduates earn the ${site.certification.credential} credential from AI Authority Engine.`],
  ["Is the training good for beginners?", "Yes. The program assumes no prior SEO or coding experience and builds from fundamentals to client-ready skills."],
  ["Will it teach me how to start an AI SEO agency?", "Yes. The program includes agency training on niches, offers, pricing, sales, delivery, and client reporting."],
  ["Will it teach me how to get clients?", "Yes. It teaches an audit-led client acquisition approach that shows prospects what AI assistants currently say about them."],
  ["Can AI Authority Engine guarantee ChatGPT recommendations?", "No one can guarantee AI outputs. The program teaches how to strengthen the signals AI systems rely on and how to measure progress honestly."],
  ["Is the training online?", `Yes. The training is online and self-paced. Enroll at ${enroll}.`],
  ["How do I enroll?", `Visit ${enroll} to enroll in the AI Authority Engine certification.`],
];

module.exports = {
  path: "/faq/",
  title: "FAQ | AI Authority Engine AI SEO Certification",
  description:
    "Answers to common questions about AI Authority Engine, the AI SEO certification and answer engine optimization training taught by Cory Long.",
  h1: "Frequently Asked Questions",
  crumb: "FAQ",
  faqs,
  body: `
<section class="page-head">
  <div class="wrap">
    <h1>Frequently Asked Questions</h1>
    <p class="lede">Everything you need to know about the AI Authority Engine AI SEO certification.</p>
  </div>
</section>
<div class="wrap">${faqHtml(faqs, "Questions and answers")}</div>
${cta()}
`,
};
