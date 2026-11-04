"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"

export default () => {
  const [date, setDate] = useState<Date | undefined>(new Date(new Date().getFullYear(), 0, 12))

  return (
    <Card className="mx-auto w-fit p-0">
      <Card.Content className="p-0">
        <Calendar defaultMonth={date} mode="single" onSelect={setDate} selected={date} showWeekNumber />
      </Card.Content>
    </Card>
  )
}
