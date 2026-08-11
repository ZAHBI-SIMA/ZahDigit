export type TechStackGroup = {
  label: string;
  items: string[];
};

export const techStack: TechStackGroup[] = [
  { label: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { label: "Backend", items: ["Node.js", "API REST", "PostgreSQL", "Supabase"] },
  { label: "Emails", items: ["Resend"] },
  { label: "Analytics", items: ["Google Analytics 4", "Google Search Console"] },
  { label: "Hébergement", items: ["Vercel"] },
];
