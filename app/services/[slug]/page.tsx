import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { MethodSection } from "@/components/sections/MethodSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { services, getServiceBySlug } from "@/content/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.name}
        description={service.description}
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      <Section tone="light">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">
            Ce que couvre ce service
          </h2>
        </div>
        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          {service.items.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-light-gray bg-white px-5 py-4 text-sm font-medium text-navy"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <MethodSection title="Notre approche pour ce service." />
      <TechStackSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
