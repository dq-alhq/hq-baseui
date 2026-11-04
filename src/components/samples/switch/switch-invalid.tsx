import { Field } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export default () => {
  return (
    <Field className="max-w-sm" invalid>
      <Field.Label>Accept terms and conditions</Field.Label>
      <Field.Description>You must accept the terms and conditions to continue.</Field.Description>
      <Switch />
    </Field>
  )
}
