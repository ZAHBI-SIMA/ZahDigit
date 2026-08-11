import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: React.ReactNode;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => (
    <label htmlFor={id} className="flex items-start gap-3 text-sm text-gray">
      <input
        ref={ref}
        id={id}
        type="checkbox"
        className={cn(
          "mt-0.5 h-4 w-4 shrink-0 rounded border-light-gray text-orange focus:ring-2 focus:ring-orange/30",
          className
        )}
        {...props}
      />
      <span>{label}</span>
    </label>
  )
);
Checkbox.displayName = "Checkbox";
