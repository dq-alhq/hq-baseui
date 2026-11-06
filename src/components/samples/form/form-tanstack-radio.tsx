import { z } from "zod"
import { Field } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Radio } from "@/components/ui/radio"
import { isFieldInvalid, useAppForm } from "@/components/ui/tanstack-form"
import { toast } from "@/components/ui/toast"

const plans = [
  { value: "monthly", label: "Monthly ($9.99/month)" },
  { value: "yearly", label: "Yearly ($99.99/year)" },
  { value: "lifetime", label: "Lifetime ($299.99)" }
]

const schema = z.object({
  plan: z.string().min(1, "Please select a subscription plan.")
})

type FormValues = z.infer<typeof schema>

export default () => {
  const form = useAppForm({
    defaultValues: { plan: "" } as FormValues,
    validators: { onChange: schema },
    onSubmit({ value }) {
      toast.add({ title: "You submitted:", description: JSON.stringify(value) })
    }
  })

  return (
    <Form
      className="max-w-xs"
      onSubmit={(event) => {
        event.preventDefault()
        form.handleSubmit()
      }}
    >
      <form.AppField name="plan">
        {(field) => (
          <Field invalid={isFieldInvalid(field)} name={field.name}>
            <Field.Set>
              <Field.Legend description="Yearly and lifetime plans offer significant savings.">
                Subscription Plan
              </Field.Legend>
              <Radio.Group onValueChange={(value) => field.handleChange(value as string)} value={field.state.value}>
                {plans.map((plan) => (
                  <Field invalid={isFieldInvalid(field)} key={plan.value}>
                    <Radio onBlur={field.handleBlur} value={plan.value} />
                    <Field.Label className="font-normal">{plan.label}</Field.Label>
                  </Field>
                ))}
              </Radio.Group>
            </Field.Set>
            <field.Message />
          </Field>
        )}
      </form.AppField>
      <form.AppForm>
        <form.Submit>Submit</form.Submit>
      </form.AppForm>
    </Form>
  )
}
