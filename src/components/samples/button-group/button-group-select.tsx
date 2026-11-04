"use client"

import { IconArrowRight } from "@tabler/icons-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"

const CURRENCIES = [
  { label: "US Dollar", value: "$" },
  { label: "Euro", value: "€" },
  { label: "British Pound", value: "£" }
]

export default () => {
  const [currency, setCurrency] = useState("$")

  return (
    <ButtonGroup>
      <ButtonGroup>
        <Select items={CURRENCIES} onValueChange={(value) => setCurrency(value as string)} value={currency}>
          <Select.Trigger className="font-mono">{currency}</Select.Trigger>
          <Select.Content align="start" alignItemWithTrigger={false}>
            <Select.Group>
              {CURRENCIES.map((item) => (
                <Select.Item key={item.value} value={item.value}>
                  {item.value} <span className="text-muted-foreground">{item.label}</span>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select>
        <Input pattern="[0-9]*" placeholder="10.00" />
      </ButtonGroup>
      <ButtonGroup>
        <Button aria-label="Send" size="icon" variant="outline">
          <IconArrowRight />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  )
}
