export type CaseStudy = {
  slug: string;
  title: string;
  role: string;
  period: string;
  summary: string;
  problem: string;
  approach: string[];
  outcome: string[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  // Paths under /public, e.g. "/projects/venus-aesthetics/booking.png".
  // Empty until real screenshots are captured from the live deployments.
  images?: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "venus-aesthetics",
    title: "Venus Aesthetics — booking & business platform",
    role: "Product manager & full-stack engineer",
    period: "2026",
    summary:
      "A real client's makeup artistry business, taken from a requirements doc to a live booking engine and admin dashboard running on self-hosted infrastructure.",
    problem:
      "A working makeup artist needed a public booking flow and a way to manage services, availability, and client bookings without relying on back-and-forth messaging. Early discovery corrected an initial assumption going in — this is a makeup artistry business, not a spa — which shaped the service catalog, the consultation-required flow for bridal work, and the tone of the public site.",
    approach: [
      "Ran client discovery against a real requirements document, rebuilding the service catalog and booking rules around how the business actually operates rather than a generic template.",
      "Designed a live-slot booking engine (Next.js App Router + Postgres via Drizzle) that computes open slots from availability rules, blackout dates, service duration, and a minimum-notice window, with bridal/photoshoot bookings routed into a consultation-required path instead of a self-serve slot.",
      "Built a two-person admin dashboard behind Clerk-gated auth (role-based, no public sign-up) covering services, availability, bookings, gallery, testimonials, and clients — all as real CRUD against the production database, not a mocked demo.",
      "Chose to self-host Postgres and file storage on the client's existing Linux box instead of managed services (Neon, Vercel Blob) to cut ongoing cost, which meant owning the operational tradeoffs directly: database-role/schema-ownership issues on Postgres 15+, a deploy script that preserves `.env` and upload directories across redeploys, and systemd-managed app processes.",
      "Guarded the booking write path with a database transaction that re-checks for slot conflicts at insert time, so two people booking the same slot simultaneously can't both win.",
    ],
    outcome: [
      "A live public booking flow and a fully functional two-person admin dashboard, both verified end-to-end against the real production database at every phase rather than demoed against mock data.",
      "Self-hosted infrastructure (Postgres, file storage, app hosting) running at a fraction of the cost of an equivalent managed-service stack.",
      "Public site and admin dashboard both live and in active use.",
    ],
    stack: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Drizzle ORM",
      "Postgres (self-hosted)",
      "Clerk",
      "Linux / systemd",
    ],
  },
  {
    slug: "azubi-learner-automation",
    title: "Learner-tracking automation at Azubi Africa",
    role: "Product Manager, Community and Courses",
    period: "Sep 2021 — Jul 2023",
    summary:
      "Co-designed curriculum and learner-tracking automation that cut dropout rates by over 50% across Azubi Africa's technical training programs.",
    problem:
      // Pending: real detail on the specific dropout drivers and the shape of
      // the automation only Paul has — drafted from resume content, flag for
      // his review/expansion before this goes live.
      "Azubi Africa's technical training programs were losing learners partway through the curriculum, and the team lacked a systematic way to spot at-risk learners early enough to intervene.",
    approach: [
      "Co-designed a revised curriculum structure alongside learner-tracking automation to surface engagement and progress signals earlier in the program.",
      // Pending: what the automation actually tracked and how trainers acted
      // on it — fill in with the real workflow.
      "Used those signals to guide trainer intervention and support for at-risk learners before they disengaged.",
      "Managed a team of trainers and technical talent delivering the revised curriculum.",
    ],
    outcome: [
      "Cut dropout rates by over 50% across the programs this applied to.",
      "Grew community reach on LinkedIn by 1000% over the same period.",
    ],
    stack: ["Curriculum design", "Program management", "Learner analytics"],
  },
];
