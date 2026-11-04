"use client"

import { useState } from "react"
import { DatePicker } from "@/components/ui/date-picker"
import { Field } from "@/components/ui/field"

export default () => {
  const [date, setDate] = useState<Date>()

  return (
    <Field className="mx-auto w-44">
      <Field.Label>Date</Field.Label>
      <DatePicker onChange={setDate} value={date} />
    </Field>
  )
}
