export const siteConfig = {
  name: "Paul Mensah",
  title: "Software Engineer",
  tagline: "I build reliable, well-crafted software and enjoy solving problems end to end.",
  email: "paul.mensah@amalitechtraining.org",
  location: "Ghana",
  social: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
  },
};

export const about = {
  heading: "About me",
  paragraphs: [
    "Replace this paragraph with a short introduction: what you do, what you care about, and what kind of work you're looking for.",
    "Add a second paragraph here with more background — your journey so far, what you're currently learning, or what makes your approach distinct.",
  ],
};

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Your Role",
    organization: "Company / Organization",
    period: "2024 — Present",
    description:
      "Describe your responsibilities and impact in this role. Focus on outcomes, not just tasks.",
  },
  {
    role: "Previous Role",
    organization: "Previous Company",
    period: "2023 — 2024",
    description: "Describe what you did and what you learned or achieved.",
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "REST APIs"] },
  { category: "Tools", items: ["Git", "Docker", "Vercel"] },
];

export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Web Application Development",
    description: "Describe a service you offer, e.g. building full-stack web apps end to end.",
  },
  {
    title: "Technical Consulting",
    description: "Describe another service, e.g. code review, architecture advice, or audits.",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Add a real testimonial from a colleague, manager, or client here.",
    author: "Name",
    role: "Role, Company",
  },
];
