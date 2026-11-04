"use client"

import type { ComponentProps, ComponentPropsWithoutRef, ReactElement, RefAttributes } from "react"
import { Field as FieldPrimitive } from "@base-ui/react/field"
import { mergeProps } from "@base-ui/react/merge-props"
import { cn } from "cn"

function Textarea({
  className,
  ref,
  ...props
}: ComponentPropsWithoutRef<"textarea"> & RefAttributes<HTMLTextAreaElement>): ReactElement {
  return (
    <span
      className={
        cn(
          "border-input hover:border-ring placeholder:text-muted-foreground has-focus-visible:border-ring has-focus-visible:ring-ring/50 disabled:bg-input/50 has-aria-invalid:border-destructive has-aria-invalid:ring-destructive/20 dark:bg-input/30 dark:disabled:bg-input/80 dark:has-aria-invalid:border-destructive/50 dark:has-aria-invalid:ring-destructive/40 flex field-sizing-content min-h-16 w-full rounded-lg border bg-transparent text-base transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50 has-focus-visible:ring-3 has-aria-invalid:ring-3 md:text-sm",
          className
        ) || undefined
      }
      data-slot="textarea-control"
      slot="control"
    >
      <FieldPrimitive.Control
        defaultValue={props.defaultValue}
        disabled={props.disabled}
        id={props.id}
        name={props.name}
        ref={ref}
        render={(defaultProps: ComponentProps<"textarea">) => (
          <textarea
            className={cn(
              "text-foreground placeholder:text-muted-foreground field-sizing-content w-full rounded-[inherit] px-2.5 py-2 outline-hidden"
            )}
            data-slot="textarea"
            {...mergeProps(defaultProps, props)}
          />
        )}
        value={props.value}
      />
    </span>
  )
}

export { Textarea }
