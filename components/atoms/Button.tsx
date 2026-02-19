import { type ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-6 py-3 rounded-lg font-sans font-medium transition-all duration-200 cursor-pointer",
          "focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2",
          "shadow-md hover:shadow-lg",
          {
            "bg-primary-orange text-white hover:scale-105 hover:brightness-110": variant === "primary",
            "bg-neutral-taupe text-primary-brown hover:bg-primary-brown hover:text-white": variant === "secondary",
            "bg-transparent text-primary-brown hover:text-primary-orange underline underline-offset-4 shadow-none":
              variant === "ghost",
          },
          className,
        )}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"
