import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const baseInputClasses =
  "w-full rounded-lg border border-light-gray bg-white px-4 py-2.5 text-sm text-navy placeholder:text-gray focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30 aria-[invalid=true]:border-red-500";

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn(baseInputClasses, className)} {...props} />
  )
);
Input.displayName = "Input";
