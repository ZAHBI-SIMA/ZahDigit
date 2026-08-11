import { Section } from "@/components/layout/Section";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/content/services";

const homepageSlugs = [
  "sites-web",
  "applications-web",
  "applications-mobiles",
  "solutions-sur-mesure",
];

export function ServicesSection() {
  const homepageServices = services.filter((service) =>
    homepageSlugs.includes(service.slug)
  );

  return (
    <Section tone="light">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-navy sm:text-4xl">
          Des solutions digitales pensées pour votre croissance.
        </h2>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {homepageServices.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </Section>
  );
}
