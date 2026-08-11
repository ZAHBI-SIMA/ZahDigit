import Link from "next/link";
import type { Service } from "@/content/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-light-gray bg-white p-8 transition-shadow duration-300 hover:shadow-lg">
      <h3 className="text-xl font-semibold text-navy">{service.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-gray">{service.description}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {service.items.map((item) => (
          <li
            key={item}
            className="rounded-full bg-light-gray px-3 py-1 text-xs font-medium text-navy"
          >
            {item}
          </li>
        ))}
      </ul>
      <Link
        href={`/services/${service.slug}`}
        className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-orange hover:underline"
      >
        Découvrir le service →
      </Link>
    </div>
  );
}
