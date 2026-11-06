import type { Form as FormPrimitive } from "@base-ui/react/form"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

type FormState = {
  serverErrors?: FormPrimitive.Props["errors"]
}

// Mark this as a Server Function with `'use server'` in a supporting framework like Next.js
async function submitForm(_previousState: FormState, formData: FormData): Promise<FormState> {
  // Mimic a server response
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const username = formData.get("username") as string | null

  if (username === "admin") {
    return { serverErrors: { username: "'admin' is reserved for system use" } }
  }

  // 50% chance the username is taken
  if (Math.random() > 0.5) {
    return { serverErrors: { username: `${username} is unavailable` } }
  }

  return {}
}

export default () => {
  const [state, formAction, loading] = useActionState(submitForm, {})

  return (
    <Form action={formAction} className="max-w-xs" errors={state.serverErrors}>
      <Field name="username">
        <Field.Label>Username</Field.Label>
        <Input defaultValue="admin" placeholder="Enter a username" required />
        <Field.Error />
      </Field>
      <Button disabled={loading} loading={loading} type="submit">
        Submit
      </Button>
    </Form>
  )
}
