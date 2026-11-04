import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default () => {
  return (
    <Field.Set className="w-full max-w-sm">
      <Field.Legend>Address Information</Field.Legend>
      <p>We need your address to deliver your order.</p>
      <Field>
        <Field.Label htmlFor="street">Street Address</Field.Label>
        <Input id="street" placeholder="123 Main St" type="text" />
      </Field>
      <div className="grid grid-cols-2 gap-4">
        <Field>
          <Field.Label htmlFor="city">City</Field.Label>
          <Input id="city" placeholder="New York" type="text" />
        </Field>
        <Field>
          <Field.Label htmlFor="zip">Postal Code</Field.Label>
          <Input id="zip" placeholder="90502" type="text" />
        </Field>
      </div>
    </Field.Set>
  )
}
