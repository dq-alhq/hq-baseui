import { z } from "zod"
import { Field } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { isFieldInvalid, useAppForm } from "@/components/ui/tanstack-form"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/toast"

const schema = z.object({
  bio: z.string().min(10, "Bio must be at least 10 characters.").max(200, "Bio must be at most 200 characters.")
})

type FormValues = z.infer<typeof schema>

export default () => {
  const form = useAppForm({
    defaultValues: { bio: "" } as FormValues,
    validators: { onChange: schema },
    onSubmit({ value }) {
      toast.add({ title: "You submitted:", description: value.bio })
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
      <form.AppField name="bio">
        {(field) => (
          <Field invalid={isFieldInvalid(field)} name={field.name}>
            <Field.Label>Bio</Field.Label>
            <Textarea
              onBlur={field.handleBlur}
              onChange={(event) => field.handleChange(event.target.value)}
              placeholder="Tell us a little bit about yourself"
              value={field.state.value}
            />
            <Field.Description>{field.state.value.length}/200 characters</Field.Description>
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
