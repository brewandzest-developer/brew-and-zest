import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full px-8 py-4 text-sm font-medium transition-all duration-300",
        
        variant === "primary" &&
          "bg-[#161414] text-white hover:-translate-y-1",

        variant === "secondary" &&
          "border border-[#161414] hover:bg-[#161414] hover:text-white",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}