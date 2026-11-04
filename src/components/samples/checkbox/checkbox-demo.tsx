"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Field } from "@/components/ui/field"
import { Label } from "@/components/ui/label"

export default () => {
  return (
    <Field.Set>
      <Field>
        <Checkbox />
        <Field.Label>Accept terms and conditions</Field.Label>
      </Field>
      <Field>
        <Checkbox defaultChecked />
        <Field.Label>Accept terms and conditions</Field.Label>
        <Field.Description>By clicking this checkbox, you agree to the terms.</Field.Description>
      </Field>
      <Field disabled>
        <Checkbox />
        <Field.Label>Enable notifications</Field.Label>
      </Field>
      <Field className="has-data-checked:border-ring items-start rounded-lg border p-3" render={<Label />}>
        <Checkbox defaultChecked />
        <Field.Label>Enable notifications</Field.Label>
        <Field.Description>You can enable or disable notifications at any time.</Field.Description>
      </Field>
    </Field.Set>
  )
}
