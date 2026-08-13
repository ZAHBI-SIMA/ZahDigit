export const siteConfig = {
  name: "ZahDigit",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.zahdigit.com",
  description:
    "Nous concevons des sites web, applications web et mobiles modernes, performants et adaptés aux objectifs de votre entreprise.",
  locale: "fr_FR",
  ogImage: "/og-image.jpg",
  keywords: [
    "agence digitale",
    "agence web",
    "création site web",
    "développement application mobile",
    "développement application web",
    "agence digitale Abidjan",
    "agence web Côte d'Ivoire",
    "UI/UX design",
  ],
} as const;
