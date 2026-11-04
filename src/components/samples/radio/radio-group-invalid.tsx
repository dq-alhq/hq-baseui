import { Field } from "@/components/ui/field"
import { Radio } from "@/components/ui/radio"

export default () => {
  return (
    <Field.Set className="w-full max-w-xs">
      <Field.Legend description="Choose how you want to receive notifications.">Notification Preferences</Field.Legend>
      <Radio.Group defaultValue="email">
        <Field invalid>
          <Radio value="email" />
          <Field.Label>Email only</Field.Label>
        </Field>
        <Field invalid>
          <Radio value="sms" />
          <Field.Label>SMS only</Field.Label>
        </Field>
        <Field invalid>
          <Radio value="both" />
          <Field.Label>Both Email & SMS</Field.Label>
        </Field>
      </Radio.Group>
    </Field.Set>
  )
}
