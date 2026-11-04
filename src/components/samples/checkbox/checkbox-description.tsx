import { Checkbox } from "@/components/ui/checkbox"
import { Field } from "@/components/ui/field"

export default () => {
  return (
    <Field>
      <Checkbox defaultChecked />
      <Field.Label>Accept terms and conditions</Field.Label>
      <Field.Description>By clicking this checkbox, you agree to the terms.</Field.Description>
    </Field>
  )
}
