"use client"

import { useState } from "react"
import { Field } from "@/components/ui/field"
import { Slider } from "@/components/ui/slider"

export default () => {
  const [value, setValue] = useState([200, 800])

  return (
    <Field className="w-full max-w-xs">
      <Field.Label>Price Range</Field.Label>
      <Field.Description>
        Set your budget range ($
        <span className="font-medium tabular-nums">{value[0]}</span> -{" "}
        <span className="font-medium tabular-nums">{value[1]}</span>).
      </Field.Description>
      <Slider
        aria-label="Price Range"
        className="mt-2 w-full"
        max={1000}
        min={0}
        onValueChange={(value) => setValue(value as [number, number])}
        step={10}
        value={value}
      />
    </Field>
  )
}
