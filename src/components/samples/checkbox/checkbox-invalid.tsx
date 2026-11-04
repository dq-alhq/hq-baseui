import { Checkbox } from "@/components/ui/checkbox"
import { Field } from "@/components/ui/field"

export default () => {
  return (
    <Field invalid>
      <Checkbox />
      <Field.Label>Accept terms and conditions</Field.Label>
    </Field>
  )
}
