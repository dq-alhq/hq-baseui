import { Checkbox } from "@/components/ui/checkbox"
import { Field } from "@/components/ui/field"

export default () => {
  return (
    <Field disabled>
      <Checkbox />
      <Field.Label>Enable notifications</Field.Label>
    </Field>
  )
}
