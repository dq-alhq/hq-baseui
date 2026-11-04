import { Field } from "@/components/ui/field"
import { Radio } from "@/components/ui/radio"

export default () => {
  return (
    <Field.Group>
      <Field.Set>
        <Field.Legend>Subscription Plan</Field.Legend>
        <Radio.Group defaultValue="free">
          <Field>
            <Radio value="free" />
            <Field.Label className="font-normal">Free Plan</Field.Label>
          </Field>
          <Field>
            <Radio value="pro" />
            <Field.Label className="font-normal">Pro Plan</Field.Label>
          </Field>
          <Field>
            <Radio value="enterprise" />
            <Field.Label className="font-normal">Enterprise</Field.Label>
          </Field>
        </Radio.Group>
      </Field.Set>
      <Field.Set>
        <Field.Legend description="Choose your preferred battery level.">Battery Level</Field.Legend>
        <Radio.Group>
          <Field>
            <Radio value="high" />
            <Field.Label>High</Field.Label>
          </Field>
          <Field>
            <Radio value="medium" />
            <Field.Label>Medium</Field.Label>
          </Field>
          <Field>
            <Radio value="low" />
            <Field.Label>Low</Field.Label>
          </Field>
        </Radio.Group>
      </Field.Set>
      <Radio.Group className="gap-6">
        <Field>
          <Radio value="option1" />
          <Field.Label>Enable Touch ID</Field.Label>
          <Field.Description>Enable Touch ID to quickly unlock your device.</Field.Description>
        </Field>
        <Field>
          <Radio value="option2" />
          <Field.Label>
            Enable Touch ID and Face ID to make it even faster to unlock your device. This is a long label to test the
            layout.
          </Field.Label>
          <Field.Description>Enable Touch ID to quickly unlock your device.</Field.Description>
        </Field>
      </Radio.Group>
      <Radio.Group className="gap-3">
        <Field>
          <Radio value="title1" />
          <Field.Label>Enable Touch ID</Field.Label>
          <Field.Description>Enable Touch ID to quickly unlock your device.</Field.Description>
        </Field>
        <Field>
          <Radio value="title2" />
          <Field.Label>
            Enable Touch ID and Face ID to make it even faster to unlock your device. This is a long label to test the
            layout.
          </Field.Label>
          <Field.Description>Enable Touch ID to quickly unlock your device.</Field.Description>
        </Field>
      </Radio.Group>
      <Field.Set>
        <Field.Legend>Invalid Radio Group</Field.Legend>
        <Radio.Group>
          <Field invalid>
            <Radio value="invalid1" />
            <Field.Label>Invalid Option 1</Field.Label>
          </Field>
          <Field invalid>
            <Radio value="invalid2" />
            <Field.Label>Invalid Option 2</Field.Label>
          </Field>
        </Radio.Group>
      </Field.Set>
      <Field.Set>
        <Field.Legend>Disabled Radio Group</Field.Legend>
        <Radio.Group disabled>
          <Field>
            <Radio value="disabled1" />
            <Field.Label>Disabled Option 1</Field.Label>
          </Field>
          <Field>
            <Radio value="disabled2" />
            <Field.Label>Disabled Option 2</Field.Label>
          </Field>
        </Radio.Group>
      </Field.Set>
    </Field.Group>
  )
}
