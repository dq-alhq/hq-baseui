import { Field } from "@/components/ui/field"
import { Radio } from "@/components/ui/radio"

export default () => {
  return (
    <Radio.Group className="w-fit" defaultValue="comfortable">
      <Field>
        <Radio value="default" />
        <Field.Label>Default</Field.Label>
      </Field>
      <Field>
        <Radio value="comfortable" />
        <Field.Label>Comfortable</Field.Label>
      </Field>
      <Field>
        <Radio value="compact" />
        <Field.Label>Compact</Field.Label>
      </Field>
    </Radio.Group>
  )
}
