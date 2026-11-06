import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/toast"

const schema = z.object({
  twoFactor: z.boolean().refine((value) => value, "Two-factor authentication is required for this account.")
})

type FormValues = z.infer<typeof schema>

export default () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { twoFactor: false }
  })

  const onSubmit = (data: FormValues) => {
    toast.add({ title: "You submitted:", description: JSON.stringify(data) })
  }

  return (
    <Form className="max-w-sm" onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        control={form.control}
        name="twoFactor"
        render={({ field, fieldState }) => (
          <Field invalid={fieldState.invalid} name={field.name}>
            <Field.Label>Multi-factor authentication</Field.Label>
            <Switch checked={field.value} onBlur={field.onBlur} onCheckedChange={field.onChange} />
            <Field.Description>Enable multi-factor authentication to secure your account.</Field.Description>
            <Field.Error match={fieldState.invalid}>{fieldState.error?.message}</Field.Error>
          </Field>
        )}
      />
      <Button type="submit">Save</Button>
    </Form>
  )
}
