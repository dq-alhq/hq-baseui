"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"

export default () => {
  const [date, setDate] = useState<Date | undefined>(new Date(new Date().getFullYear(), 0, 6))
  const bookedDates = Array.from({ length: 15 }, (_, i) => new Date(new Date().getFullYear(), 0, 12 + i))

  return (
    <Card className="mx-auto w-fit p-0">
      <Card.Content className="p-0">
        <Calendar
          defaultMonth={date}
          disabled={bookedDates}
          mode="single"
          modifiers={{
            booked: bookedDates
          }}
          modifiersClassNames={{
            booked: "[&>button]:line-through opacity-100"
          }}
          onSelect={setDate}
          selected={date}
        />
      </Card.Content>
    </Card>
  )
}
