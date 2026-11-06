import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { isFieldInvalid, useAppForm } from "@/components/ui/tanstack-form"
import { toast } from "@/components/ui/toast"

const schema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters.").max(30, "Username is too long."),
  email: z.email("Enter a valid email address.")
})

type FormValues = z.infer<typeof schema>

export default () => {
  const form = useAppForm({
    defaultValues: { username: "", email: "" } as FormValues,
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
      <form.AppField name="username">
        {(field) => (
          <Field invalid={isFieldInvalid(field)} name={field.name}>
            <Field.Label>Username</Field.Label>
            <Input
              autoComplete="off"
              onBlur={field.handleBlur}
              onChange={(event) => field.handleChange(event.target.value)}
              placeholder="shadcn"
              value={field.state.value}
            />
            <Field.Description>This is your public display name.</Field.Description>
            <field.Message />
          </Field>
        )}
      </form.AppField>
      <form.AppField name="email">
        {(field) => (
          <Field invalid={isFieldInvalid(field)} name={field.name}>
            <Field.Label>Email</Field.Label>
            <Input
              autoComplete="off"
              onBlur={field.handleBlur}
              onChange={(event) => field.handleChange(event.target.value)}
              placeholder="john@example.com"
              type="email"
              value={field.state.value}
            />
            <field.Message />
          </Field>
        )}
      </form.AppField>
      <div className="flex gap-2">
        <Button onClick={() => form.reset()} type="button" variant="outline">
          Reset
        </Button>
        <form.AppForm>
          <form.Submit>Submit</form.Submit>
        </form.AppForm>
      </div>
    </Form>
  )
}
