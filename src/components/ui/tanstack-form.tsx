"use client"

import type { ComponentProps, ReactElement } from "react"
import { createFormHook, createFormHookContexts } from "@tanstack/react-form"
import { Button } from "./button"
import { Field } from "./field"

const { fieldContext, formContext, useFieldContext, useFormContext } = createFormHookContexts()

type FieldLike = {
  state: { meta: { isTouched: boolean; isValid: boolean } }
}

/** A field is invalid once it was touched (blurred or submitted) and has validation errors. */
function isFieldInvalid(field: FieldLike): boolean {
  return field.state.meta.isTouched && !field.state.meta.isValid
}

function getErrorMessages(errors: unknown[]): string[] {
  return errors
    .map((error) => (typeof error === "string" ? error : (error as { message?: string } | undefined)?.message))
    .filter((message): message is string => Boolean(message))
}

function FieldMessage({ className }: { className?: string }): ReactElement {
  const field = useFieldContext()
  const messages = getErrorMessages(field.state.meta.errors)

  return (
    <Field.Error className={className} match={isFieldInvalid(field)}>
      {messages.join(", ")}
    </Field.Error>
  )
}

function SubmitButton({ children, ...props }: Omit<ComponentProps<typeof Button>, "type">): ReactElement {
  const form = useFormContext()

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button disabled={isSubmitting} loading={isSubmitting} type="submit" {...props}>
          {children}
        </Button>
      )}
    </form.Subscribe>
  )
}

const { useAppForm, withForm } = createFormHook({
  fieldComponents: {
    Message: FieldMessage
  },
  formComponents: {
    Submit: SubmitButton
  },
  fieldContext,
  formContext
})

export { isFieldInvalid, useAppForm, useFieldContext, useFormContext, withForm }
