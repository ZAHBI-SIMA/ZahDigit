import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";

type SectionTone = "light" | "dark" | "accent" | "neutral";

const toneClasses: Record<SectionTone, string> = {
  light: "bg-white text-navy",
  dark: "bg-navy text-white",
  accent: "bg-orange text-white",
  neutral: "bg-light-gray text-navy",
};

export function Section({
  id,
  tone = "light",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  tone?: SectionTone;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-24", toneClasses[tone], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
