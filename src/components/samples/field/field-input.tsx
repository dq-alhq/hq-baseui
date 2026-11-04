import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default () => {
  return (
    <Field.Set className="w-full max-w-xs">
      <Field>
        <Field.Label>Username</Field.Label>
        <Input placeholder="Max Leiter" type="text" />
        <Field.Description>Choose a unique username for your account.</Field.Description>
      </Field>
      <Field>
        <Field.Label>Password</Field.Label>
        <Field.Description>Must be at least 8 characters long.</Field.Description>
        <Input placeholder="••••••••" type="password" />
      </Field>
    </Field.Set>
  )
}
