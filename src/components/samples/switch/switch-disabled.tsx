import { Field } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export default () => {
  return (
    <Field className="w-fit" disabled>
      <Switch />
      <Field.Label>Disabled</Field.Label>
    </Field>
  )
}
