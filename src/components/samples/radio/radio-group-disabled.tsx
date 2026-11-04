import { Field } from "@/components/ui/field"
import { Radio } from "@/components/ui/radio"

export default function RadioGroupDisabled() {
  return (
    <Radio.Group className="w-fit" defaultValue="option2">
      <Field disabled>
        <Radio disabled value="option1" />
        <Field.Label>Disabled</Field.Label>
      </Field>
      <Field>
        <Radio value="option2" />
        <Field.Label>Option 2</Field.Label>
      </Field>
      <Field>
        <Radio value="option3" />
        <Field.Label>Option 3</Field.Label>
      </Field>
    </Radio.Group>
  )
}
