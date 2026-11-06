import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

async function submitForm(value: string) {
  // Mimic a server response
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    const url = new URL(value)

    if (url.hostname.endsWith("example.com")) {
      return { error: "The example domain is not allowed" }
    }
  } catch {
    return { error: "This is not a valid URL" }
  }

  return { success: true }
}

export default () => {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  return (
    <Form
      className="max-w-xs"
      errors={errors}
      onSubmit={async (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const value = formData.get("url") as string

        setLoading(true)
        const response = await submitForm(value)
        setErrors(response.error ? { url: response.error } : {})
        setLoading(false)
      }}
    >
      <Field name="url">
        <Field.Label>Homepage</Field.Label>
        <Input placeholder="https://example.com" required type="url" />
        <Field.Error />
      </Field>
      <Button disabled={loading} loading={loading} type="submit">
        Submit
      </Button>
    </Form>
  )
}
