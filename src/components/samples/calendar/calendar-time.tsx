"use client"

import { IconClock } from "@tabler/icons-react"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { Field } from "@/components/ui/field"
import { InputGroup } from "@/components/ui/input-group"

export default () => {
  const [date, setDate] = useState<Date | undefined>(new Date(new Date().getFullYear(), new Date().getMonth(), 12))

  return (
    <Card className="mx-auto w-fit" size="sm">
      <Card.Content>
        <Calendar className="p-0" mode="single" onSelect={setDate} selected={date} />
      </Card.Content>
      <Card.Footer className="bg-card border-t">
        <Field.Set>
          <Field>
            <Field.Label>Start Time</Field.Label>
            <InputGroup>
              <InputGroup.Input
                className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                defaultValue="10:30:00"
                id="time-from"
                step="1"
                type="time"
              />
              <InputGroup.Addon>
                <IconClock className="text-muted-foreground" />
              </InputGroup.Addon>
            </InputGroup>
          </Field>
          <Field>
            <Field.Label>End Time</Field.Label>
            <InputGroup>
              <InputGroup.Input
                className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                defaultValue="12:30:00"
                id="time-to"
                step="1"
                type="time"
              />
              <InputGroup.Addon>
                <IconClock className="text-muted-foreground" />
              </InputGroup.Addon>
            </InputGroup>
          </Field>
        </Field.Set>
      </Card.Footer>
    </Card>
  )
}
