import { Field } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { Radio } from "@/components/ui/radio"

export default () => {
  return (
    <Radio.Group className="max-w-sm" defaultValue="plus">
      <Field className="rounded-lg border p-3" render={<Label />}>
        <Field.Label>Plus</Field.Label>
        <Field.Description>For individuals and small teams.</Field.Description>
        <Radio value="plus" />
      </Field>
      <Field className="rounded-lg border p-3" render={<Label />}>
        <Field.Label>Pro</Field.Label>
        <Field.Description>For growing businesses.</Field.Description>
        <Radio value="pro" />
      </Field>
      <Field className="rounded-lg border p-3" render={<Label />}>
        <Field.Label>Enterprise</Field.Label>
        <Field.Description>For large teams and enterprises.</Field.Description>
        <Radio value="enterprise" />
      </Field>
    </Radio.Group>
  )
}
