import { Field } from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio"

export default () => {
  return (
    <Field.Set className="w-full max-w-xs">
      <Field.Legend description="Yearly and lifetime plans offer significant savings.">Subscription Plan</Field.Legend>
      <RadioGroup defaultValue="monthly">
        <Field>
          <RadioGroupItem id="plan-monthly" value="monthly" />
          <Field.Label className="font-normal" htmlFor="plan-monthly">
            Monthly ($9.99/month)
          </Field.Label>
        </Field>
        <Field>
          <RadioGroupItem id="plan-yearly" value="yearly" />
          <Field.Label className="font-normal" htmlFor="plan-yearly">
            Yearly ($99.99/year)
          </Field.Label>
        </Field>
        <Field>
          <RadioGroupItem id="plan-lifetime" value="lifetime" />
          <Field.Label className="font-normal" htmlFor="plan-lifetime">
            Lifetime ($299.99)
          </Field.Label>
        </Field>
      </RadioGroup>
    </Field.Set>
  )
}
