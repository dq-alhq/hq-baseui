import { IconX } from "@tabler/icons-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Field } from "@/components/ui/field"
import { Progress } from "@/components/ui/progress"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const CURRENCIES = [
  { label: "USD — United States Dollar", value: "usd" },
  { label: "EUR — Euro", value: "eur" },
  { label: "GBP — British Pound", value: "gbp" },
  { label: "JPY — Japanese Yen", value: "jpy" }
]

export function PayoutThreshold() {
  const [currency, setCurrency] = useState<"usd" | "eur" | "gbp" | "jpy">("usd")
  return (
    <Card>
      <Card.Header>
        <Card.Title>Payout Threshold</Card.Title>
        <Card.Description>Set the minimum balance required before a payout is triggered.</Card.Description>
        <Card.Action>
          <Button aria-label="Dismiss payout threshold" className="bg-muted" size="icon-sm" variant="ghost">
            <IconX />
          </Button>
        </Card.Action>
      </Card.Header>
      <Card.Content>
        <Field.Group>
          <Field>
            <Field.Label>Preferred Currency</Field.Label>
            <Select items={CURRENCIES} onValueChange={(v) => setCurrency(v as any)} value={currency}>
              <Select.Trigger className="w-full">
                <Select.Value />
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  {CURRENCIES.map((item) => (
                    <Select.Item key={item.value} value={item.value}>
                      {item.label}
                    </Select.Item>
                  ))}
                </Select.Group>
              </Select.Content>
            </Select>
          </Field>
          <Progress
            format={{ currencyDisplay: "narrowSymbol", currency: currency, style: "currency" }}
            locale={"en-US"}
            value={25}
          >
            <Progress.Label>Minimum Payout Amount</Progress.Label>
            <Progress.Value />
          </Progress>
          <Field>
            <Field.Label htmlFor="payout-notes">Notes</Field.Label>
            <Textarea
              className="min-h-25"
              id="payout-notes"
              placeholder="Add any notes for this payout configuration..."
            />
          </Field>
        </Field.Group>
      </Card.Content>
      <Card.Footer>
        <Button className="w-full">Save Threshold</Button>
      </Card.Footer>
    </Card>
  )
}
