import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const badgeVariants = cva(
  "group/badge focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground border-primary hover:bg-primary/80",
        secondary: "bg-secondary border-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "bg-destructive/10 border-destructive/10 dark:border-destructive/20 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20",
        success:
          "text-primary-foreground border-[oklch(from_var(--primary)_l_0.5_145)] bg-[oklch(from_var(--primary)_l_0.5_145)] hover:bg-[oklch(from_var(--primary)_l_0.5_145)]/80",
        warning:
          "text-primary-foreground border-[oklch(from_var(--primary)_l_1_100)] bg-[oklch(from_var(--primary)_l_1_100)] hover:bg-[oklch(from_var(--primary)_l_1_100)]/80 dark:border-[oklch(from_var(--primary)_l_1_100)]/70 dark:bg-[oklch(from_var(--primary)_l_1_100)]/70 dark:hover:bg-[oklch(from_var(--primary)_l_1_100)]/80",
        info: "text-primary-foreground border-[oklch(from_var(--primary)_l_0.4_304)] bg-[oklch(from_var(--primary)_l_0.4_304)] hover:bg-[oklch(from_var(--primary)_l_0.4_304)]/80",
        outline: "border-border text-foreground hover:bg-muted hover:text-muted-foreground",
        ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50 border-transparent",
        link: "text-primary border-transparent underline-offset-4 hover:underline"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
)

function Badge({
  className,
  variant = "primary",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className)
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant
    }
  })
}

export { Badge, badgeVariants }
