"use client"

import { addDays } from "date-fns"
import { useState } from "react"
import { type DateRange, DateRangePicker } from "@/components/ui/date-picker"
import { Field } from "@/components/ui/field"

export default () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 20),
    to: addDays(new Date(new Date().getFullYear(), 0, 20), 20)
  })

  return (
    <Field className="mx-auto w-60">
      <Field.Label>Date Picker Range</Field.Label>
      <DateRangePicker onChange={setDate} value={date} />
    </Field>
  )
}
