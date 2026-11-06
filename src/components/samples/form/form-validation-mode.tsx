import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export default () => {
  return (
    <Form className="max-w-xs" validationMode="onBlur">
      <Field name="email">
        <Field.Label>Email</Field.Label>
        <Input placeholder="john@example.com" required type="email" />
        <Field.Description>Validated when the input loses focus.</Field.Description>
        <Field.Error />
      </Field>
      <Field name="password">
        <Field.Label>Password</Field.Label>
        <Input minLength={8} required type="password" />
        <Field.Description>At least 8 characters.</Field.Description>
        <Field.Error />
      </Field>
      <Button type="submit">Create account</Button>
    </Form>
  )
}
