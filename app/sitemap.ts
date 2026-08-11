import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/content/services";
import { projects } from "@/content/realisations";

const staticRoutes = [
  "",
  "/services",
  "/realisations",
  "/methode",
  "/a-propos",
  "/contact",
  "/mentions-legales",
  "/politique-confidentialite",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const projectRoutes = projects.map((project) => `/realisations/${project.slug}`);
  const routes = [...staticRoutes, ...serviceRoutes, ...projectRoutes];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
