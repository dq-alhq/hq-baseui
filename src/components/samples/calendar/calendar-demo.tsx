"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export default () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar captionLayout="dropdown" className="rounded-lg border" mode="single" onSelect={setDate} selected={date} />
  )
}
