"use client"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui/react/checkbox-group"
import { IconCheck } from "@tabler/icons-react"
import { cn } from "cn"

function CheckboxGroup({ className, ...props }: CheckboxGroupPrimitive.Props) {
  return (
    <CheckboxGroupPrimitive
      className={cn("grid w-full gap-2 in-data-[slot=field-set]:-mt-3", className)}
      data-slot="checkbox-group"
      {...props}
    />
  )
}

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props): React.ReactElement {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        "border-input hover:border-ring dark:bg-input/30 aria-invalid:data-checked:bg-destructive focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 data-checked:bg-primary text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary group-has-data-focus-visible/field:border-ring group-has-data-focus-visible/field:ring-ring/50 aria-invalid:data-checked:border-destructive dark:aria-invalid:data-checked:bg-destructive aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 peer relative flex size-4 shrink-0 items-center justify-center rounded-sm border transition-colors outline-none group-disabled/field:cursor-not-allowed group-disabled/field:opacity-50 group-has-disabled/field:opacity-50 group-has-data-focus-visible/field:ring-3 focus-visible:ring-3 aria-invalid:ring-3 [&>svg]:size-3.5",
        className
      )}
      data-slot="checkbox"
      slot="control"
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className="grid place-content-center transition-none [&>svg]:size-3.5 data-checked:*:[[slot=checked]]:flex data-indeterminate:*:[[slot=indeterminate]]:flex"
        data-slot="checkbox-indicator"
      >
        <IconCheck className="hidden" slot="checked" />
        <IconCheck className="hidden" slot="indeterminate" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

Checkbox.Group = CheckboxGroup
CheckboxGroup.Item = Checkbox

export { Checkbox, Checkbox as CheckboxGroupItem, CheckboxGroup }
