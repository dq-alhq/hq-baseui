import { Field } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export default () => {
  return (
    <div className="max-w-xs">
      <Field>
        <Switch />
        <Field.Label>Airplane Mode</Field.Label>
      </Field>
    </div>
  )
}
