import { cn } from "@/lib/utils";

export function Accordion({
  items,
  className,
}: {
  items: { question: string; answer: string }[];
  className?: string;
}) {
  return (
    <div className={cn("divide-y divide-light-gray", className)}>
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-navy marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange">
            {item.question}
            <span
              aria-hidden="true"
              className="shrink-0 text-xl leading-none text-orange transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-gray">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
