"use client"

import type { DateRange } from "@daypicker/react"
import { addDays } from "date-fns"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export default () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 12),
    to: addDays(new Date(new Date().getFullYear(), 0, 12), 30)
  })

  return (
    <Calendar
      className="rounded-lg border"
      defaultMonth={dateRange?.from}
      mode="range"
      numberOfMonths={2}
      onSelect={setDateRange}
      selected={dateRange}
    />
  )
}
