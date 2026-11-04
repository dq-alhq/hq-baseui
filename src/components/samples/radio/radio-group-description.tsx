import { Field } from "@/components/ui/field"
import { Radio } from "@/components/ui/radio"

export default () => {
  return (
    <Radio.Group className="w-fit" defaultValue="comfortable">
      <Field>
        <Radio value="default" />
        <Field.Label>Default</Field.Label>
        <Field.Description>Standard spacing for most use cases.</Field.Description>
      </Field>
      <Field>
        <Radio value="comfortable" />
        <Field.Label>Comfortable</Field.Label>
        <Field.Description>More space between elements.</Field.Description>
      </Field>
      <Field>
        <Radio value="compact" />
        <Field.Label>Compact</Field.Label>
        <Field.Description>Minimal spacing for dense layouts.</Field.Description>
      </Field>
    </Radio.Group>
  )
}
