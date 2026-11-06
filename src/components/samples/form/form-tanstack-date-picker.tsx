import { z } from "zod"
import { DatePicker } from "@/components/ui/date-picker"
import { Field } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { isFieldInvalid, useAppForm } from "@/components/ui/tanstack-form"
import { toast } from "@/components/ui/toast"

const schema = z.object({
  dob: z
    .date()
    .optional()
    .refine((value) => value !== undefined, "Please select your date of birth.")
    .refine((value) => value === undefined || value <= new Date(), "Date of birth can't be in the future.")
})

type FormValues = z.infer<typeof schema>

export default () => {
  const form = useAppForm({
    defaultValues: { dob: undefined } as FormValues,
    validators: { onChange: schema },
    onSubmit({ value }) {
      toast.add({ title: "You submitted:", description: value.dob?.toDateString() })
    }
  })

  return (
    <Form
      className="max-w-xs"
      onSubmit={(event) => {
        event.preventDefault()
        form.handleSubmit()
      }}
    >
      <form.AppField name="dob">
        {(field) => (
          <Field invalid={isFieldInvalid(field)} name={field.name}>
            <Field.Label>Date of birth</Field.Label>
            <DatePicker
              aria-invalid={isFieldInvalid(field)}
              onBlur={field.handleBlur}
              onChange={(date) => field.handleChange(date)}
              value={field.state.value}
            />
            <Field.Description>Your date of birth is used to calculate your age.</Field.Description>
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
