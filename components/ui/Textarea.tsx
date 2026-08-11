import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    rows={5}
    className={cn(
      "w-full rounded-lg border border-light-gray bg-white px-4 py-2.5 text-sm text-navy placeholder:text-gray focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30 aria-[invalid=true]:border-red-500",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
