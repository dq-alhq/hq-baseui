import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default () => {
  return (
    <Field disabled>
      <Field.Label>Email</Field.Label>
      <Input placeholder="Email" type="email" />
      <Field.Description>This field is currently disabled.</Field.Description>
    </Field>
  )
}
