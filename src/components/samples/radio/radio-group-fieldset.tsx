import { Field } from "@/components/ui/field"
import { Radio } from "@/components/ui/radio"

export default () => {
  return (
    <Field.Set className="w-full max-w-xs">
      <Field.Legend description="Yearly and lifetime plans offer significant savings.">Subscription Plan</Field.Legend>
      <Radio.Group defaultValue="monthly">
        <Field>
          <Radio value="monthly" />
          <Field.Label>Monthly ($9.99/month)</Field.Label>
        </Field>
        <Field>
          <Radio value="yearly" />
          <Field.Label>Yearly ($99.99/year)</Field.Label>
        </Field>
        <Field>
          <Radio value="lifetime" />
          <Field.Label>Lifetime ($299.99)</Field.Label>
        </Field>
      </Radio.Group>
    </Field.Set>
  )
}
