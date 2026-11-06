import { z } from "zod"
import { Checkbox } from "@/components/ui/checkbox"
import { Field } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { isFieldInvalid, useAppForm } from "@/components/ui/tanstack-form"
import { toast } from "@/components/ui/toast"

const schema = z.object({
  terms: z.boolean().refine((value) => value, "You must accept the terms and conditions.")
})

type FormValues = z.infer<typeof schema>

export default () => {
  const form = useAppForm({
    defaultValues: { terms: false } as FormValues,
    validators: { onChange: schema },
    onSubmit({ value }) {
      toast.add({ title: "You submitted:", description: JSON.stringify(value) })
    }
  })

  return (
    <Form
      className="max-w-sm"
      onSubmit={(event) => {
        event.preventDefault()
        form.handleSubmit()
      }}
    >
      <form.AppField name="terms">
        {(field) => (
          <Field invalid={isFieldInvalid(field)} name={field.name}>
            <Checkbox
              checked={field.state.value}
              onBlur={field.handleBlur}
              onCheckedChange={(checked) => field.handleChange(checked)}
            />
            <Field.Label>Accept terms and conditions</Field.Label>
            <Field.Description>You agree to our Terms of Service and Privacy Policy.</Field.Description>
            <field.Message />
          </Field>
        )}
      </form.AppField>
      <form.AppForm>
        <form.Submit>Submit</form.Submit>
      </form.AppForm>
    </Form>
  )
}
