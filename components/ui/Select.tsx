import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  placeholder?: string;
  options: readonly string[];
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, placeholder, options, ...props }, ref) => (
    <select
      ref={ref}
      defaultValue=""
      className={cn(
        "w-full rounded-lg border border-light-gray bg-white px-4 py-2.5 text-sm text-navy focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30 aria-[invalid=true]:border-red-500",
        className
      )}
      {...props}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
);
Select.displayName = "Select";
