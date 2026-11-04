"use client"

import { useState } from "react"
import { Field } from "@/components/ui/field"
import { Select } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

const items = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" }
]

export default () => {
  const [alignItemWithTrigger, setAlignItemWithTrigger] = useState(true)

  return (
    <Field.Group className="w-full max-w-xs">
      <Field>
        <Field.Label htmlFor="align-item">Align Item</Field.Label>
        <Field.Description>Toggle to align the item with the trigger.</Field.Description>
        <Switch checked={alignItemWithTrigger} id="align-item" onCheckedChange={setAlignItemWithTrigger} />
      </Field>
      <Field>
        <Select defaultValue="banana" items={items}>
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content alignItemWithTrigger={alignItemWithTrigger}>
            <Select.Group>
              {items.map((item) => (
                <Select.Item key={item.value} value={item.value}>
                  {item.label}
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select>
      </Field>
    </Field.Group>
  )
}
