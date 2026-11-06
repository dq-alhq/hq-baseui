"use client"

import { Form as FormPrimitive } from "@base-ui/react/form"
import { cn } from "cn"

function Form<FormValues extends Record<string, unknown> = Record<string, unknown>>({
  className,
  ...props
}: FormPrimitive.Props<FormValues>) {
  return <FormPrimitive className={cn("flex w-full flex-col gap-6", className)} data-slot="form" {...props} />
}

export { Form }
