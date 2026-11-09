const { faqHtml, cta, programHtml, priceText, site } = require("../layout");
const { testimonialsHtml } = require("../components");
const results = require("../data/results");

const n = results.whiteLabelAccounts;
const nWord = { 9: "nine" }[n] || String(n);

const faqs = [
  ["Is AI Authority Engine worth the cost?", `It is if your goal is to build an AI SEO agency with paying clients, not just earn a certificate. Membership is ${priceText()}. What sets it apart is hands-on help: Cory Long and the Yroc Consulting team work with students one-on-one, help them win clients, have joined students' sales meetings, and can provide white-label fulfillment. Yroc currently fulfills ${nWord} client accounts signed by students. Results vary and are not guaranteed.`],
  ["How much coaching do I get?", "Every week there are live coaching calls, many with hot-seat time where Cory and the team dissect a student's business, sales technique, or strategy. On top of that, Cory Long and the Yroc Consulting team work with students one-on-one on choosing a niche, building a first AI SEO service, prospecting, and closing clients, and Cory has joined students' client meetings to help them close. Students also meet Cory and the team in person at live events throughout the year."],
  ["Will Cory Long help me get clients?", "Yes. Helping students land clients is central to the program. Cory works with students one-on-one on prospecting and sales and has joined students' client meetings to help them make the sale."],
  ["What results have students had?", `Yroc Consulting is currently the white-label fulfillment partner behind ${nWord} client accounts that AI Authority Engine students have signed. ${results.example.text} ${results.disclaimer}`],
  ["Can I talk to Cory before enrolling?", `Yes. Email ${site.contactEmail} to set up a conversation before you join, and ask him how he'd take you from where you are to your first paying client.`],
  ["Do I need SEO experience?", "No. The program starts from the fundamentals, and the one-on-one support is there for the business side too, from choosing a niche to closing your first client."],
];

module.exports = {
  path: "/is-ai-authority-engine-worth-it/",
  title: "Is AI Authority Engine Worth It? Cost, Support, and Student Results",
  description: `Is AI Authority Engine worth it? What ${priceText()} gets you, the one-on-one help from Cory Long and Yroc Consulting, and how students are landing paying AI SEO clients.`,
  h1: "Is AI Authority Engine Worth It?",
  crumb: "Is It Worth It?",
  type: "Article",
  faqs,
  body: `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Straight answers</p>
    <h1>Is AI Authority Engine Worth It?</h1>
    <p class="lede">Your goal isn't a certificate. It's a business with paying clients. Here's exactly how AI Authority Engine helps you get there.</p>
  </div>
</section>

<section class="wrap answer-box">
  <h2>The short answer</h2>
  <p><strong>AI Authority Engine is worth it if you want to build an AI SEO agency with paying clients, and you want a mentor in your corner while you do it.</strong> Membership is ${priceText()}. Unlike a course library, Cory Long and the Yroc Consulting team work with students one-on-one, help them land clients, have joined students' sales meetings, and can handle white-label fulfillment. Today Yroc is the fulfillment partner behind ${nWord} client accounts that students have signed.</p>
</section>

<section class="section">
  <div class="wrap">
    <div class="sec-head reveal">
      <p class="eyebrow">Student results</p>
      <h2>Students are signing paying clients</h2>
    </div>
    <div class="stats">
      <div class="stat reveal"><b>${n}</b><span>client accounts signed by AI Authority Engine students, with Yroc Consulting as their white-label fulfillment partner</span></div>
      <div class="stat reveal"><b>${results.example.clients}</b><span>clients signed by one student's agency</span></div>
      <div class="stat reveal"><b>${results.example.revenue}+</b><span>brought in by that student's agency selling the AI SEO services he learned in the program</span></div>
    </div>
    <p class="stat-note">${results.example.text}</p>
    <p class="disclaimer">${results.disclaimer}</p>
  </div>
</section>

<section class="wrap prose">
  <h2>Exactly what personal support includes</h2>
  <p>This is the part most programs leave you to figure out alone. In AI Authority Engine, <a href="/cory-long/">Cory Long</a> and the team at <a href="${site.company.url}" rel="noopener">${site.company.name}</a> work with you one-on-one to take you from zero to a paying client:</p>
  <ol class="steps">
    ${results.support.map(([t, d]) => `<li><h3>${t}</h3><p>${d}</p></li>`).join("\n    ")}
  </ol>
  <h3>How the coaching works</h3>
  <ul class="checks">
    <li><strong>Weekly coaching calls.</strong> Many include "hot seat" time, where Cory and the team dissect a student's business, sales technique, or strategy live, so everyone learns from real situations.</li>
    <li><strong>One-on-one help.</strong> Direct support from Cory and the Yroc Consulting team on your niche, your offer, your prospects, and your sales conversations.</li>
    <li><strong>Help on client meetings.</strong> Cory has joined students' client meetings to help them close the sale.</li>
    <li><strong>In person at live events.</strong> Students meet Cory and the team face to face at live events throughout the year.</li>
  </ul>
  <p>Along the way you have the full program behind you: the <a href="/ai-seo-certification/#curriculum">Getting Started curriculum</a>, the Optimization Lab, challenge calls, 30-day sprints, the community, and live events, all taught through <a href="/ai-authority-wheel/">the AI Authority Wheel</a>.</p>

  <h2>What white-label fulfillment means for you</h2>
  <p>New agency owners often worry about delivering the work once they win a client. Yroc Consulting can partner with you as a white-label fulfillment team: you own the client relationship, and Yroc helps deliver the AI SEO work behind the scenes. You can sell with confidence from day one and grow your own delivery skills as you go. Today Yroc fulfills ${nWord} client accounts that AI Authority Engine students have signed.</p>
</section>

<div class="wrap">${programHtml("What the investment covers")}</div>

<section class="wrap prose">
  <h2>Is it right for you?</h2>
  <ul class="checks">
    <li><strong>A great fit</strong> if you want to start or grow an AI SEO agency, you're ready to do the work, and you want a mentor who will help you land and keep clients.</li>
    <li><strong>Probably not the fit</strong> if you only want a quick introduction to AI search. A free course is a better first step; see <a href="/free-vs-paid-ai-seo-certifications/">free vs paid AI SEO certifications</a>.</li>
  </ul>

  <h2>Talk to Cory before you enroll</h2>
  <p>The best way to decide is a conversation. Email <a href="mailto:${site.contactEmail}?subject=Talk%20to%20Cory%20before%20enrolling">${site.contactEmail}</a> and ask Cory how he would take you from where you are today to your first paying client.</p>
  <a class="btn btn-glow" href="mailto:${site.contactEmail}?subject=Talk%20to%20Cory%20before%20enrolling">Request a conversation with Cory</a>
</section>

<div class="wrap">${testimonialsHtml()}</div>
<div class="wrap">${faqHtml(faqs, "Is it worth it? FAQ")}</div>
${cta()}
`,
};
