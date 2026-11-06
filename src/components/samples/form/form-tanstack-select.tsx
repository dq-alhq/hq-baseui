import { z } from "zod"
import { Field } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Select } from "@/components/ui/select"
import { isFieldInvalid, useAppForm } from "@/components/ui/tanstack-form"
import { toast } from "@/components/ui/toast"

const departments = [
  { label: "Choose department", value: "" },
  { label: "Engineering", value: "engineering" },
  { label: "Design", value: "design" },
  { label: "Marketing", value: "marketing" },
  { label: "Sales", value: "sales" }
]

const schema = z.object({
  department: z.string().min(1, "Please select a department.")
})

type FormValues = z.infer<typeof schema>

export default () => {
  const form = useAppForm({
    defaultValues: { department: "" } as FormValues,
    validators: { onChange: schema },
    onSubmit({ value }) {
      toast.add({ title: "You submitted:", description: JSON.stringify(value) })
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
      <form.AppField name="department">
        {(field) => (
          <Field invalid={isFieldInvalid(field)} name={field.name}>
            <Field.Label>Department</Field.Label>
            <Select
              items={departments}
              name={field.name}
              onValueChange={(value) => field.handleChange((value as string | null) ?? "")}
              value={field.state.value}
            >
              <Select.Trigger aria-invalid={isFieldInvalid(field)} onBlur={field.handleBlur}>
                <Select.Value />
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  {departments.map((item) => (
                    <Select.Item key={item.value} value={item.value}>
                      {item.label}
                    </Select.Item>
                  ))}
                </Select.Group>
              </Select.Content>
            </Select>
            <Field.Description>Select your department or area of work.</Field.Description>
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
