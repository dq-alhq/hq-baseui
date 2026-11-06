import { z } from "zod"
import { Field } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"
import { isFieldInvalid, useAppForm } from "@/components/ui/tanstack-form"
import { toast } from "@/components/ui/toast"

const schema = z.object({
  twoFactor: z.boolean().refine((value) => value, "Two-factor authentication is required for this account.")
})

type FormValues = z.infer<typeof schema>

export default () => {
  const form = useAppForm({
    defaultValues: { twoFactor: false } as FormValues,
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
      <form.AppField name="twoFactor">
        {(field) => (
          <Field invalid={isFieldInvalid(field)} name={field.name}>
            <Field.Label>Multi-factor authentication</Field.Label>
            <Switch
              checked={field.state.value}
              onBlur={field.handleBlur}
              onCheckedChange={(checked) => field.handleChange(checked)}
            />
            <Field.Description>Enable multi-factor authentication to secure your account.</Field.Description>
            <field.Message />
          </Field>
        )}
      </form.AppField>
      <form.AppForm>
        <form.Submit>Save</form.Submit>
      </form.AppForm>
    </Form>
  )
}
