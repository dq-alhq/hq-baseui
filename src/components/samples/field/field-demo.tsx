import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const months = [
  { label: "MM", value: null },
  { label: "01", value: "01" },
  { label: "02", value: "02" },
  { label: "03", value: "03" },
  { label: "04", value: "04" },
  { label: "05", value: "05" },
  { label: "06", value: "06" },
  { label: "07", value: "07" },
  { label: "08", value: "08" },
  { label: "09", value: "09" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" }
]

const years = [
  { label: "YYYY", value: null },
  { label: "2024", value: "2024" },
  { label: "2025", value: "2025" },
  { label: "2026", value: "2026" },
  { label: "2027", value: "2027" },
  { label: "2028", value: "2028" },
  { label: "2029", value: "2029" }
]

export default () => {
  return (
    <Field.Group>
      <Field.Set>
        <Field.Legend description="All transactions are secure and encrypted">Payment Method</Field.Legend>
        <Field>
          <Field.Label htmlFor="checkout-7j9-card-name-43j">Name on Card</Field.Label>
          <Input id="checkout-7j9-card-name-43j" placeholder="Evil Rabbit" required />
        </Field>
        <Field>
          <Field.Label htmlFor="checkout-7j9-card-number-uw1">Card Number</Field.Label>
          <Input id="checkout-7j9-card-number-uw1" placeholder="1234 5678 9012 3456" required />
          <Field.Description>Enter your 16-digit card number</Field.Description>
        </Field>
        <div className="grid grid-cols-3 gap-4">
          <Field>
            <Field.Label>Month</Field.Label>
            <Select items={months}>
              <Select.Trigger>
                <Select.Value />
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  {months.map((item) => (
                    <Select.Item key={item.value} value={item.value}>
                      {item.label}
                    </Select.Item>
                  ))}
                </Select.Group>
              </Select.Content>
            </Select>
          </Field>
          <Field>
            <Field.Label htmlFor="checkout-7j9-exp-year-f59">Year</Field.Label>
            <Select items={years}>
              <Select.Trigger id="checkout-7j9-exp-year-f59">
                <Select.Value />
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  {years.map((item) => (
                    <Select.Item key={item.value} value={item.value}>
                      {item.label}
                    </Select.Item>
                  ))}
                </Select.Group>
              </Select.Content>
            </Select>
          </Field>
          <Field>
            <Field.Label htmlFor="checkout-7j9-cvv">CVV</Field.Label>
            <Input id="checkout-7j9-cvv" placeholder="123" required />
          </Field>
        </div>
      </Field.Set>
      <Field.Separator />
      <Field.Set>
        <Field.Legend description="The billing address associated with your payment method">
          Billing Address
        </Field.Legend>
        <Field>
          <Checkbox defaultChecked />
          <Field.Label>Same as shipping address</Field.Label>
        </Field>
      </Field.Set>
      <Field>
        <Field.Label htmlFor="checkout-7j9-optional-comments">Comments</Field.Label>
        <Textarea
          className="resize-none"
          id="checkout-7j9-optional-comments"
          placeholder="Add any additional comments"
        />
      </Field>
      <Field.Footer>
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit">Submit</Button>
      </Field.Footer>
    </Field.Group>
  )
}
