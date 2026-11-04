import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default () => {
  return (
    <Field>
      <Field.Label>Username</Field.Label>
      <Input placeholder="Enter your username" type="text" />
      <Field.Description>Choose a unique username for your account.</Field.Description>
    </Field>
  )
}
