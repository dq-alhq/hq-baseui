import { IconX } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Field } from "@/components/ui/field"
import { InputGroup } from "@/components/ui/input-group"
import { Item, ItemContent } from "@/components/ui/item"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

const FROM_ACCOUNTS = [
  { label: "Main Checking (··8402) — $12,450.00", value: "checking" },
  { label: "Business (··7731) — $8,920.00", value: "business" }
]

const TO_ACCOUNTS = [
  { label: "High Yield Savings (··1192) — $42,100.00", value: "savings" },
  { label: "Investment (··3349) — $18,200.00", value: "investment" }
]

export function TransferFunds() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Transfer Funds</Card.Title>
        <Card.Description>Move money between your connected accounts.</Card.Description>
        <Card.Action>
          <Button aria-label="Dismiss transfer funds" className="bg-muted" size="icon-sm" variant="ghost">
            <IconX strokeWidth={2} />
          </Button>
        </Card.Action>
      </Card.Header>
      <Card.Content>
        <Field.Group>
          <Field>
            <Field.Label>Amount to Transfer</Field.Label>
            <InputGroup>
              <InputGroup.Addon>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup.Addon>
              <InputGroup.Input defaultValue="1,200.00" />
            </InputGroup>
          </Field>
          <Field>
            <Field.Label>From Account</Field.Label>
            <Select defaultValue="checking" items={FROM_ACCOUNTS}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {FROM_ACCOUNTS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <Field.Label>To Account</Field.Label>
            <Select defaultValue="savings" items={TO_ACCOUNTS}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {TO_ACCOUNTS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Item className="flex-col items-stretch" variant="muted">
            <ItemContent className="gap-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">Estimated arrival</span>
                <span className="text-sm font-medium">Today, Apr 14</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">Transaction fee</span>
                <span className="text-sm font-medium tabular-nums">$0.00</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Total amount</span>
                <span className="text-sm font-semibold tabular-nums">$1,200.00</span>
              </div>
            </ItemContent>
          </Item>
        </Field.Group>
      </Card.Content>
      <Card.Footer>
        <Button className="w-full">Confirm Transfer</Button>
      </Card.Footer>
    </Card>
  )
}
