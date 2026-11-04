// Certified AI Authority Specialists. Add new graduates at the end.
//
// Required:
//   name, slug, level, issued (YYYY-MM-DD)
//   id     AIAE-L{level}-{year}-{sequence}. Never reuse or change an id once issued.
//   kit    random private token for the graduate's share-kit page and certificate file.
//          Generate with: node -e "console.log(require('crypto').randomBytes(6).toString('hex'))"
//          Never publish or change it once sent to the graduate.
//
// Optional (shown on their public verification page when present):
//   photo    path to a square headshot in public/assets/graduates/, e.g. "/assets/graduates/stephen-jones.jpg"
//   agency   { name: "Agency Name", url: "https://agency.com" }
//   website  personal website, if different from the agency
//   socials  official profile URLs, e.g. ["https://www.linkedin.com/in/...", "https://x.com/..."]
//
// Certificates: the OFFICIAL certificate PDF (designed by Yroc Consulting) goes in
// public/certificates/<slug>-<kit>.pdf. Use the same issued date as the official certificate.
// Only if no official PDF exists yet, `node scripts/make-certificates.js` makes a placeholder
// (it skips files that already exist; never run it with --force, which would overwrite official ones).
module.exports = [
  {
    name: "Stephen Jones", slug: "stephen-jones", level: 1, issued: "2026-11-02", id: "AIAE-L1-2026-0001", kit: "5d0e1d25d51e",
    photo: "/assets/graduates/stephen-jones.jpg",
    agency: { name: "Rockstaff Consulting", url: "https://rockstaffconsulting.com/" },
    website: "https://about.me/meetstephenjones",
    socials: ["https://www.linkedin.com/in/stephen-jones-b52b3618a/"],
  },
  {
    name: "Mark Hadley", slug: "mark-hadley", level: 1, issued: "2026-11-02", id: "AIAE-L1-2026-0002", kit: "0de9896a9c81",
    photo: "/assets/graduates/mark-hadley.jpg",
    agency: { name: "Skyrunner Consulting", url: "https://www.skyrunnerpro.com/" },
    website: "https://about.me/markhadley",
    socials: ["https://www.linkedin.com/in/markhadley79/"],
  },
  {
    name: "Andrea Katen", slug: "andrea-katen", level: 1, issued: "2026-11-02", id: "AIAE-L1-2026-0003", kit: "b0a7620399df",
    photo: "/assets/graduates/andrea-katen.jpg",
    agency: { name: "Avenity Business Solutions", url: "https://www.avenitybusinesssolutions.com/" },
    website: "https://about.me/andrea.katen",
    socials: ["https://www.linkedin.com/in/andreakaten"],
  },
  {
    name: "Brian Driggs", slug: "brian-driggs", level: 1, issued: "2026-11-02", id: "AIAE-L1-2026-0004", kit: "84644a844087",
    photo: "/assets/graduates/brian-driggs.jpg",
    agency: { name: "Social Funnel Marketing", url: "https://socialfunnelmarketing.com/" },
    socials: ["https://www.linkedin.com/in/brian-driggs-995409173/"],
  },
  // TODO: add photo, agency, website, and socials when received.
  {
    name: "Jason Keirstein", slug: "jason-keirstein", level: 1, issued: "2026-11-02", id: "AIAE-L1-2026-0005", kit: "d896a7163e68",
    photo: "/assets/graduates/jason-keirstein.jpg",
    agency: { name: "5 Talents Services", url: "https://www.facebook.com/5TalentsServices/" },
    socials: ["https://www.linkedin.com/in/jason-kierstein-138866/"],
  },
  { name: "Aaron Johnson", slug: "aaron-johnson", level: 1, issued: "2026-11-02", id: "AIAE-L1-2026-0006", kit: "bdf73acdd48d" },
];
