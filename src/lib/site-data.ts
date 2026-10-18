export const siteConfig = {
  name: "Paul Solomon",
  title: "Product Manager & Cloud Engineer",
  tagline:
    "I build cloud infrastructure, products, and the teams that run them — with a background spanning software engineering, technical training, and operations.",
  // No public contact email confirmed yet — set one up before publishing
  // contact details, don't fabricate or guess one.
  email: null as string | null,
  location: "Accra, Ghana",
  social: {
    github: "https://github.com/3rdsenin",
    linkedin: "https://www.linkedin.com/in/paultsolomon/",
  },
};

export const about = {
  heading: "About me",
  paragraphs: [
    "I'm a product manager and software/cloud engineer with a background spanning technical training, operations, and full-stack development. I've built healthtech products on AWS, led technical training programs that pushed certification pass rates above 90%, and managed cross-functional teams delivering go-to-market strategy for technical training products.",
    "I hold a First Class BSc in Information Technology from Methodist University College, Ghana, and I'm AWS Certified (Cloud Practitioner and Solutions Architect) alongside Microsoft Azure and Power Platform fundamentals. I care about building systems and teams that scale — whether that's cloud infrastructure, a training curriculum, or a product roadmap.",
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
    role: "Amazon Training Partner Product and Sales Manager",
    organization: "Azubi Pro Inc.",
    period: "Dec 2022 — Jul 2023",
    description:
      "Led market research and go-to-market strategy for new technical training and certification products, managing cross-functional teams and client, learner, and instructor relationships.",
  },
  {
    role: "Product Manager, Community and Courses",
    organization: "Azubi Africa Inc.",
    period: "Sep 2021 — Jul 2023",
    description:
      "Co-designed curriculum and learner-tracking automation that cut dropout rates by over 50%, managed a team of trainers and technical talent, and grew community reach on LinkedIn by 1000%.",
  },
  {
    role: "Operations Officer",
    organization: "Annies Chakula Inc.",
    period: "May 2017 — Dec 2022",
    description:
      "Standardized and automated payroll, supply chain, and production processes, cutting losses by 25%, while building CRM and recruitment processes that kept customer ratings in the 90th percentile.",
  },
  {
    role: "Software and Cloud Engineer",
    organization: "GetInnotized Inc.",
    period: "Jul 2020 — Jul 2022",
    description:
      "Built and shipped a healthtech product's frontend and backend, architected cost-optimized AWS infrastructure (EC2, Lambda, S3, IAM, CloudWatch), and deployed environments with Terraform and CI/CD via Git and Heroku.",
  },
  {
    role: "Technical Trainer",
    organization: "Azubi Africa Inc.",
    period: "Sep 2020 — Jul 2021",
    description:
      "Delivered cloud engineering training and technical demos, taught AWS-based backup/restore automation and solution architecture, and ran Train-the-Trainer programs with a 90% learner certification pass rate.",
  },
  {
    role: "Software Engineer Trainee",
    organization: "Azubi Africa Inc.",
    period: "Mar 2020 — Jun 2020",
    description:
      "Selected from 1,200+ applicants for an intensive software development program; built a team web application for an event-management client using React, Node.js, and Microsoft Azure.",
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
};

export const education: EducationItem[] = [
  {
    degree: "BSc, Information Technology",
    institution: "Methodist University College, Ghana",
    period: "May 2017",
    detail: "First Class Honours",
  },
];

export const certifications: string[] = [
  "AWS Certified Solutions Architect",
  "AWS Certified Cloud Practitioner",
  "AWS Certified CloudOps Engineer - Associate",
  "Microsoft Azure Fundamentals",
  "Microsoft Power Platform Fundamentals",
  "Enterprise Design Thinking",
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Cloud & Infrastructure",
    items: ["AWS (EC2, Lambda, S3, IAM, CloudWatch)", "Microsoft Azure", "Docker", "Kubernetes", "Terraform"],
  },
  {
    category: "Development",
    items: ["JavaScript", "Python", "Bash", "React.js", "Node.js"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Platform & Leadership",
    items: [
      "Systems Administration (Windows & Linux)",
      "CI/CD (Git, Heroku)",
      "Technical Training & Team Leadership",
      "Design Thinking",
    ],
  },
];

export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Cloud Architecture & Advisory",
    description:
      "Advisory on AWS/Azure cloud architecture, cost optimization, and infrastructure-as-code (Terraform) for teams scaling their platform.",
  },
  {
    title: "Technical Training & Enablement",
    description:
      "Curriculum design, trainer enablement, and certification program delivery for technical teams and learning organizations.",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

// No real testimonials collected yet — leave empty rather than invent one.
export const testimonials: Testimonial[] = [];
