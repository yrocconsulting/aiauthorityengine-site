// Interactive components. Every component renders its full text as static HTML
// (so AI crawlers and no-JS visitors get the content); site.js only enhances it.
const { site } = require("./layout");

// ---------------------------------------------------------------- simulator
function simulatorHtml() {
  return `<div class="sim" data-sim>
  <div class="sim-bar">
    <span class="dots"><i></i><i></i><i></i></span>
    <span class="sim-title">AI Assistant</span>
    <div class="sim-toggle" role="tablist" aria-label="Compare AI answers">
      <button role="tab" aria-selected="true" data-state="before">Before AI SEO</button>
      <button role="tab" aria-selected="false" data-state="after">After AI SEO</button>
    </div>
  </div>
  <div class="sim-body">
    <div class="msg user"><span data-typed>Who's the best roofing company in my area?</span></div>
    <div class="msg ai" data-panel="before">
      <p>Here are three highly rated roofing companies near you:</p>
      <ol>
        <li><b>Competitor A Roofing</b>: 4.8★ from 600+ reviews, frequently recommended</li>
        <li><b>Competitor B Exteriors</b>: featured in local news, strong review history</li>
        <li><b>Competitor C Roofing Co.</b>: specializes in storm damage repair</li>
      </ol>
      <p class="sim-note">Your business isn't mentioned. The AI couldn't confidently identify or verify it.</p>
    </div>
    <div class="msg ai" data-panel="after" hidden>
      <p>Here are three highly rated roofing companies near you:</p>
      <ol>
        <li class="you"><b>Your Business</b>: consistently reviewed, clear services and pricing, cited by trusted local sources</li>
        <li><b>Competitor A Roofing</b>: 4.8★ from 600+ reviews</li>
        <li><b>Competitor B Exteriors</b>: strong review history</li>
      </ol>
      <p class="sim-note good">Clear entity, structured data, and corroborating sources put your business in the answer.</p>
    </div>
  </div>
  <p class="sim-caption">Illustrative example of how AI SEO changes an AI assistant's recommendation.</p>
</div>`;
}

// ---------------------------------------------------------------- quiz
const quiz = [
  ["Are your business name, description, and contact details identical on your website and every online profile?", "Make your name, description, and details identical everywhere. AI systems trust entities whose facts agree."],
  ["Does your website use structured data (schema markup) to describe your organization and key people?", "Add Organization and Person schema so machines can read who you are, what you offer, and who is behind it."],
  ["Do your main pages answer customer questions directly in the first paragraph?", "Rewrite key pages answer-first: state the answer in the opening sentence, then add detail."],
  ["Do you have recent, detailed reviews on trusted third-party platforms?", "Build a steady flow of detailed reviews on platforms your customers and AI systems trust."],
  ["Has your business been mentioned by independent sources (press, podcasts, industry sites) in the last year?", "Earn independent mentions through digital PR, podcasts, and industry publications. AI weighs what others say about you."],
  ["Does your robots.txt allow AI crawlers like OAI-SearchBot, GPTBot, ClaudeBot, and PerplexityBot?", "Allow AI crawlers in robots.txt. If they can't read your site, they can't recommend you."],
  ["Have you checked what ChatGPT, Gemini, and Perplexity say about your business in the last 90 days?", "Run an AI visibility audit: ask the assistants your customers' questions and record what they say."],
  ["Do you publish content that answers the specific questions your customers ask AI assistants?", "Publish pages and FAQs built around the exact questions customers ask AI assistants."],
];

function quizHtml() {
  return `<div class="quiz" data-quiz>
  <div class="quiz-head">
    <p class="eyebrow">Free self-assessment</p>
    <h2 id="quiz">What's your AI Visibility Score?</h2>
    <p>Answer 8 quick questions to see how ready a business is to be recommended by ChatGPT, Gemini, and Perplexity.</p>
  </div>
  <form class="quiz-form">
    <div class="quiz-progress" aria-hidden="true"><span></span></div>
    ${quiz
      .map(
        ([q, tip], i) => `<fieldset class="quiz-q" data-tip="${tip.replace(/"/g, "&quot;")}">
      <legend><span class="qn">${String(i + 1).padStart(2, "0")}</span>${q}</legend>
      <div class="opts">
        <label><input type="radio" name="q${i}" value="2" required><span>Yes</span></label>
        <label><input type="radio" name="q${i}" value="1"><span>Partly</span></label>
        <label><input type="radio" name="q${i}" value="0"><span>No</span></label>
      </div>
    </fieldset>`
      )
      .join("\n    ")}
    <button class="btn btn-lg btn-glow" type="submit">Get my score</button>
  </form>
  <div class="quiz-result" hidden aria-live="polite">
    <div class="score-ring"><svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="52" class="track"/><circle cx="60" cy="60" r="52" class="bar"/></svg><div><b data-score>0</b><span>/100</span></div></div>
    <div class="result-text">
      <h3 data-tier></h3>
      <p data-summary></p>
      <h4>Your top fixes</h4>
      <ol data-tips></ol>
      <div class="result-cta">
        <a class="btn btn-glow" href="${site.enrollUrl}" rel="noopener">Learn to fix this: get certified</a>
        <button class="btn btn-ghost" type="button" data-retake>Retake</button>
      </div>
    </div>
  </div>
  <noscript><p>Tip: every "No" or "Partly" above is a gap in your AI visibility. The AI SEO certification teaches how to close each one.</p></noscript>
</div>`;
}

// ---------------------------------------------------------------- engines marquee
function enginesHtml() {
  const e = ["ChatGPT", "Google AI Overviews", "Gemini", "Perplexity", "Claude", "Microsoft Copilot", "Google AI Mode", "Meta AI"];
  const row = e.map((x) => `<span>${x}</span>`).join("");
  return `<div class="engines" aria-label="AI answer engines covered: ${e.join(", ")}">
  <p>Get businesses recommended across every major AI answer engine</p>
  <div class="marquee"><div class="track">${row}${row}</div></div>
</div>`;
}

module.exports = { simulatorHtml, quizHtml, enginesHtml };
