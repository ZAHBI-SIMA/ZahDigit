import { Section } from "@/components/layout/Section";
import { Breadcrumb, type BreadcrumbItem } from "@/components/ui/Breadcrumb";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: BreadcrumbItem[];
  children?: React.ReactNode;
}) {
  return (
    <Section tone="dark" className="pt-16 pb-16 sm:pt-20 sm:pb-20">
      {breadcrumb && <Breadcrumb items={breadcrumb} />}
      <div className={breadcrumb ? "mt-6" : undefined}>
        {eyebrow && (
          <p className="text-sm font-medium tracking-wide text-orange">{eyebrow}</p>
        )}
        <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
            {description}
          </p>
        )}
        {children}
      </div>
    </Section>
  );
}
