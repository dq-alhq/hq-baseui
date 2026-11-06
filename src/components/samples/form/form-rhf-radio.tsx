import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Radio } from "@/components/ui/radio"
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
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { plan: "" }
  })

  const onSubmit = (data: FormValues) => {
    toast.add({ title: "You submitted:", description: JSON.stringify(data) })
  }

  return (
    <Form className="max-w-xs" onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        control={form.control}
        name="plan"
        render={({ field, fieldState }) => (
          <Field invalid={fieldState.invalid} name={field.name}>
            <Field.Set>
              <Field.Legend description="Yearly and lifetime plans offer significant savings.">
                Subscription Plan
              </Field.Legend>
              <Radio.Group onValueChange={field.onChange} value={field.value}>
                {plans.map((plan) => (
                  <Field invalid={fieldState.invalid} key={plan.value}>
                    <Radio onBlur={field.onBlur} value={plan.value} />
                    <Field.Label className="font-normal">{plan.label}</Field.Label>
                  </Field>
                ))}
              </Radio.Group>
            </Field.Set>
            <Field.Error match={fieldState.invalid}>{fieldState.error?.message}</Field.Error>
          </Field>
        )}
      />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
