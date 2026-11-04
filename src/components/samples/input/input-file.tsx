import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default () => {
  return (
    <Field>
      <Field.Label>Picture</Field.Label>
      <Input type="file" />
      <Field.Description>Select a picture to upload.</Field.Description>
    </Field>
  )
}
