import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Select } from "@/components/ui/select"
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
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { department: "" }
  })

  const onSubmit = (data: FormValues) => {
    toast.add({ title: "You submitted:", description: JSON.stringify(data) })
  }

  return (
    <Form className="max-w-xs" onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        control={form.control}
        name="department"
        render={({ field, fieldState }) => (
          <Field invalid={fieldState.invalid} name={field.name}>
            <Field.Label>Department</Field.Label>
            <Select
              items={departments}
              name={field.name}
              onValueChange={(value) => field.onChange(value ?? "")}
              value={field.value}
            >
              <Select.Trigger aria-invalid={fieldState.invalid} onBlur={field.onBlur}>
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
            <Field.Error match={fieldState.invalid}>{fieldState.error?.message}</Field.Error>
          </Field>
        )}
      />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
