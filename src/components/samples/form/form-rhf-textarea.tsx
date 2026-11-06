import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/toast"

const schema = z.object({
  bio: z.string().min(10, "Bio must be at least 10 characters.").max(200, "Bio must be at most 200 characters.")
})

type FormValues = z.infer<typeof schema>

export default () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { bio: "" }
  })

  const onSubmit = (data: FormValues) => {
    toast.add({ title: "You submitted:", description: data.bio })
  }

  return (
    <Form className="max-w-sm" onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        control={form.control}
        name="bio"
        render={({ field, fieldState }) => (
          <Field invalid={fieldState.invalid} name={field.name}>
            <Field.Label>Bio</Field.Label>
            <Textarea {...field} placeholder="Tell us a little bit about yourself" />
            <Field.Description>{field.value.length}/200 characters</Field.Description>
            <Field.Error match={fieldState.invalid}>{fieldState.error?.message}</Field.Error>
          </Field>
        )}
      />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
