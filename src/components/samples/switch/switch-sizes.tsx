import { Field } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export default () => {
  return (
    <Field.Group className="w-full max-w-40">
      <Field>
        <Switch size="sm" />
        <Field.Label>Small</Field.Label>
      </Field>
      <Field>
        <Switch size="default" />
        <Field.Label>Default</Field.Label>
      </Field>
    </Field.Group>
  )
}
