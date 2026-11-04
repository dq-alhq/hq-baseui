import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default () => {
  return (
    <Field>
      <Field.Label htmlFor="input-required">
        Required Field <span className="text-destructive">*</span>
      </Field.Label>
      <Input id="input-required" placeholder="This field is required" required />
      <Field.Description>This field must be filled out.</Field.Description>
    </Field>
  )
}
