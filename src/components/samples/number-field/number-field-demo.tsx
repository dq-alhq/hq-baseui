import { Field } from "@/components/ui/field"
import { NumberField } from "@/components/ui/number-field"

export default () => {
  return (
    <Field.Group className={"w-full max-w-sm"}>
      <NumberField>
        <NumberField.Label>Amount</NumberField.Label>
        <NumberField.Input />
      </NumberField>
    </Field.Group>
  )
}
