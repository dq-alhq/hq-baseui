import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/ui/date-picker"
import { Field } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
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
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { dob: undefined }
  })

  const onSubmit = (data: FormValues) => {
    toast.add({ title: "You submitted:", description: data.dob?.toDateString() })
  }

  return (
    <Form className="max-w-xs" onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        control={form.control}
        name="dob"
        render={({ field, fieldState }) => (
          <Field invalid={fieldState.invalid} name={field.name}>
            <Field.Label>Date of birth</Field.Label>
            <DatePicker
              aria-invalid={fieldState.invalid}
              onBlur={field.onBlur}
              onChange={field.onChange}
              value={field.value}
            />
            <Field.Description>Your date of birth is used to calculate your age.</Field.Description>
            <Field.Error match={fieldState.invalid}>{fieldState.error?.message}</Field.Error>
          </Field>
        )}
      />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
