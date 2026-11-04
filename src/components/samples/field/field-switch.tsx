import { Field } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export default () => {
  return (
    <Field className="w-fit">
      <Field.Label>Multi-factor authentication</Field.Label>
      <Switch />
    </Field>
  )
}
