const { cta, site } = require("../layout");
const { quizHtml } = require("../components");

module.exports = {
  path: "/ai-visibility-quiz/",
  title: "Free AI Visibility Quiz: Is Your Business Ready for ChatGPT?",
  description:
    "Take the free 8-question AI visibility quiz to see how ready a business is to be recommended by ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
  h1: "AI Visibility Quiz",
  crumb: "AI Visibility Quiz",
  body: `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Free self-assessment</p>
    <h1>Is your business visible to AI?</h1>
    <p class="lede">Eight questions. Instant score. Your top three fixes for getting recommended by ChatGPT, Gemini, and Perplexity.</p>
  </div>
</section>
<section class="wrap answer-box">
  <h2>What this quiz measures</h2>
  <p><strong>The AI Authority Engine AI visibility quiz checks the signals AI assistants rely on when deciding which businesses to recommend</strong>: entity consistency, structured data, answer-first content, reviews, independent mentions, crawler access, and monitoring. It's based on the framework taught in the <a href="/ai-seo-certification/">AI SEO certification</a> by Cory Long.</p>
</section>
<section class="section"><div class="wrap">${quizHtml()}</div></section>
${cta()}
`,
};
