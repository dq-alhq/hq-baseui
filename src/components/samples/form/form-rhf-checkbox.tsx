import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Field } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { toast } from "@/components/ui/toast"

const schema = z.object({
  terms: z.boolean().refine((value) => value, "You must accept the terms and conditions.")
})

type FormValues = z.infer<typeof schema>

export default () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { terms: false }
  })

  const onSubmit = (data: FormValues) => {
    toast.add({ title: "You submitted:", description: JSON.stringify(data) })
  }

  return (
    <Form className="max-w-sm" onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        control={form.control}
        name="terms"
        render={({ field, fieldState }) => (
          <Field invalid={fieldState.invalid} name={field.name}>
            <Checkbox checked={field.value} onBlur={field.onBlur} onCheckedChange={field.onChange} />
            <Field.Label>Accept terms and conditions</Field.Label>
            <Field.Description>You agree to our Terms of Service and Privacy Policy.</Field.Description>
            <Field.Error match={fieldState.invalid}>{fieldState.error?.message}</Field.Error>
          </Field>
        )}
      />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
