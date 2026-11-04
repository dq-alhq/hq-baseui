import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default () => {
  return (
    <Field invalid>
      <Field.Label>Invalid Input</Field.Label>
      <Input placeholder="Error" />
      <Field.Description>This field contains validation errors.</Field.Description>
    </Field>
  )
}
