import { Field } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default () => {
  return (
    <Field.Group className="w-full max-w-sm">
      <Field className="rounded-lg border p-3" render={<Label />}>
        <Field.Label>Share across devices</Field.Label>
        <Field.Description>Focus is shared across devices, and turns off when you leave the app.</Field.Description>
        <Switch />
      </Field>
      <Field className="rounded-lg border p-3" render={<Label />}>
        <Field.Label>Enable notifications</Field.Label>
        <Field.Description>Receive notifications when focus mode is enabled or disabled.</Field.Description>
        <Switch defaultChecked />
      </Field>
    </Field.Group>
  )
}
