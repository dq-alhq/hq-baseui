"use client"

import { DatePicker } from "@/components/ui/date-picker"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default () => {
  return (
    <div className="flex gap-2">
      <Field>
        <Field.Label>Date</Field.Label>
        <DatePicker />
      </Field>
      <Field>
        <Field.Label>Time</Field.Label>
        <Input
          className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
          defaultValue="10:30:00"
          id="time-picker-optional"
          step="1"
          type="time"
        />
      </Field>
    </div>
  )
}
