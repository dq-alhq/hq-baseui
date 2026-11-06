import { useState } from "react"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/toast"

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  age: z.coerce.number("Age must be a number").positive("Age must be a positive number")
})

export default () => {
  const [errors, setErrors] = useState<Record<string, string[]>>({})

  return (
    <Form
      className="max-w-xs"
      errors={errors}
      onFormSubmit={(formValues) => {
        const result = schema.safeParse(formValues)

        if (!result.success) {
          setErrors(z.flattenError(result.error).fieldErrors as Record<string, string[]>)
          return
        }

        setErrors({})
        toast.add({ title: "You submitted:", description: JSON.stringify(result.data) })
      }}
    >
      <Field name="name">
        <Field.Label>Name</Field.Label>
        <Input placeholder="Enter name" />
        <Field.Error />
      </Field>
      <Field name="age">
        <Field.Label>Age</Field.Label>
        <Input placeholder="Enter age" />
        <Field.Error />
      </Field>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
