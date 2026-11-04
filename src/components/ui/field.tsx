"use client"

import type { ComponentProps, ReactElement, ReactNode } from "react"
import { Field as FieldPrimitive } from "@base-ui/react/field"
import { Fieldset as FieldsetPrimitive } from "@base-ui/react/fieldset"
import { cn } from "cn"
import { Separator } from "./separator"

function Fieldset({ className, ...props }: FieldsetPrimitive.Root.Props): ReactElement {
  return <FieldsetPrimitive.Root className={cn("flex flex-col gap-4", className)} data-slot="field-set" {...props} />
}
function Legend({
  className,
  children,
  description,
  ...props
}: FieldsetPrimitive.Legend.Props & { description?: ReactNode }): ReactElement {
  return (
    <FieldsetPrimitive.Legend
      className={cn("text-foreground mb-1.5 font-medium", className)}
      data-slot="field-legend"
      {...props}
    >
      {children}
      {description && (
        <p className="text-muted-foreground text-left text-sm leading-normal font-normal text-balance">{description}</p>
      )}
    </FieldsetPrimitive.Legend>
  )
}

function FieldGroup({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("group/field-group @container/field-group flex w-full flex-col gap-4", className)}
      data-slot="field-group"
      {...props}
    />
  )
}

function Field({ className, ...props }: FieldPrimitive.Root.Props): ReactElement {
  return (
    <FieldPrimitive.Root
      className={cn(
        "group/field hover:not-data-disabled:not-in-data-disabled:**:[[slot=control]]:border-ring! flex w-full flex-col items-start gap-2 text-sm",
        "[&_label+p]:-mt-1 [&>.sr-only]:w-auto *:[[slot=control]]:not-[[role=checkbox],[role=switch],[role=radio]]:w-full",
        "has-[[role=checkbox],[role=radio],[role=switch]]:grid has-[[role=checkbox],[role=radio],[role=switch]]:**:data-[slot=description]:row-start-2",
        "has-[:is([role=checkbox],[role=radio],[role=switch]):first-child]:grid-cols-[auto_1fr] has-[:is([role=checkbox],[role=radio],[role=switch]):first-child]:**:data-[slot=description]:col-start-2 has-[:is([role=checkbox],[role=radio],[role=switch]):first-child]:**:data-[slot=description]:row-start-2",
        "has-[:is([type=checkbox],[type=radio],[type=switch]):last-child]:grid-cols-[1fr_auto]",
        className
      )}
      data-slot="field"
      {...props}
    />
  )
}

function Label({ className, ...props }: FieldPrimitive.Label.Props): ReactElement {
  return (
    <FieldPrimitive.Label
      className={cn(
        "text-foreground data-invalid:text-destructive inline-flex items-center gap-2 text-sm/4 font-medium data-disabled:opacity-50",
        className
      )}
      data-slot="field-label"
      {...props}
    />
  )
}

function FieldItem({ className, ...props }: FieldPrimitive.Item.Props): ReactElement {
  return <FieldPrimitive.Item className={cn("flex", className)} data-slot="field-item" {...props} />
}

function Description({ className, ...props }: FieldPrimitive.Description.Props): ReactElement {
  return (
    <FieldPrimitive.Description
      className={cn(
        "text-muted-foreground data-invalid:text-destructive data-focused:text-foreground text-xs transition-[color] data-disabled:opacity-50",
        className
      )}
      data-slot="description"
      {...props}
    />
  )
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children?: React.ReactNode
}) {
  return (
    <div
      className={cn("relative h-5 text-sm", className)}
      data-content={!!children}
      data-slot="field-separator"
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          className="bg-background text-muted-foreground relative mx-auto block w-fit px-2"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  )
}

function FieldFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("relative flex items-center justify-end gap-2", className)}
      data-slot="field-footer"
      {...props}
    />
  )
}

function FieldError({ className, ...props }: FieldPrimitive.Error.Props): ReactElement {
  return (
    <FieldPrimitive.Error
      className={cn("text-destructive-foreground text-xs", className)}
      data-slot="field-error"
      {...props}
    />
  )
}

const FieldValidity: typeof FieldPrimitive.Validity = FieldPrimitive.Validity
const FieldControl: typeof FieldPrimitive.Control = FieldPrimitive.Control

Field.Label = Label
Field.Item = FieldItem
Field.Description = Description
Field.Error = FieldError
Field.Validity = FieldValidity
Field.Set = Fieldset
Field.Legend = Legend
Field.Group = FieldGroup
Field.Separator = FieldSeparator
Field.Footer = FieldFooter
Field.Control = FieldControl

export { Description, Field, FieldControl, FieldError, FieldFooter, FieldItem, Fieldset, FieldValidity, Label, Legend }
