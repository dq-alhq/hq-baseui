import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/toast"

const schema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters.").max(30, "Username is too long."),
  email: z.email("Enter a valid email address.")
})

type FormValues = z.infer<typeof schema>

export default () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { username: "", email: "" }
  })

  const onSubmit = (data: FormValues) => {
    toast.add({ title: "You submitted:", description: JSON.stringify(data) })
  }

  return (
    <Form className="max-w-sm" onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        control={form.control}
        name="username"
        render={({ field, fieldState }) => (
          <Field invalid={fieldState.invalid} name={field.name}>
            <Field.Label>Username</Field.Label>
            <Input {...field} autoComplete="off" placeholder="shadcn" />
            <Field.Description>This is your public display name.</Field.Description>
            <Field.Error match={fieldState.invalid}>{fieldState.error?.message}</Field.Error>
          </Field>
        )}
      />
      <Controller
        control={form.control}
        name="email"
        render={({ field, fieldState }) => (
          <Field invalid={fieldState.invalid} name={field.name}>
            <Field.Label>Email</Field.Label>
            <Input {...field} autoComplete="off" placeholder="john@example.com" type="email" />
            <Field.Error match={fieldState.invalid}>{fieldState.error?.message}</Field.Error>
          </Field>
        )}
      />
      <div className="flex gap-2">
        <Button onClick={() => form.reset()} type="button" variant="outline">
          Reset
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  )
}
