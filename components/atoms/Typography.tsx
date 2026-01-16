import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export const H1 = ({ className, children, ...props }: TypographyProps) => (
  <h1
    className={cn("text-4xl md:text-5xl font-serif font-bold text-primary-brown leading-tight", className)}
    {...props}
  >
    {children}
  </h1>
)

export const H2 = ({ className, children, ...props }: TypographyProps) => (
  <h2
    className={cn("text-3xl md:text-4xl font-serif font-semibold text-primary-brown leading-snug", className)}
    {...props}
  >
    {children}
  </h2>
)

export const H3 = ({ className, children, ...props }: TypographyProps) => (
  <h3 className={cn("text-xl md:text-2xl font-serif font-medium text-primary-brown", className)} {...props}>
    {children}
  </h3>
)

export const Subtitle = ({ className, children, ...props }: TypographyProps) => (
  <p className={cn("text-lg md:text-xl font-sans text-primary-orange", className)} {...props}>
    {children}
  </p>
)

export const Body = ({ className, children, ...props }: TypographyProps) => (
  <p className={cn("text-base font-sans text-primary-brown leading-relaxed text-pretty", className)} {...props}>
    {children}
  </p>
)

export const Quote = ({ className, children, ...props }: TypographyProps) => (
  <blockquote
    className={cn(
      "text-lg font-serif italic text-primary-brown/80 border-l-4 border-primary-orange pl-4 py-2",
      className,
    )}
    {...props}
  >
    {children}
  </blockquote>
)
