import { Field } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export default () => {
  return (
    <div className="max-w-xs">
      <Field>
        <Field.Label>Share across devices</Field.Label>
        <Field.Description>Focus is shared across devices, and turns off when you leave the app.</Field.Description>
        <Switch />
      </Field>
    </div>
  )
}
