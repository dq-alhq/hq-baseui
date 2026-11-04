"use client"
import { useState } from "react"
import { Field } from "@/components/ui/field"
import { Meter } from "@/components/ui/meter"
import { Slider } from "@/components/ui/slider"

export default () => {
  const [value, setValue] = useState<number>(750)
  return (
    <div className="flex w-full flex-col gap-4">
      <Field>
        <Slider max={1024} min={0} onValueChange={(v) => setValue(v as number)} value={value}>
          <Slider.Label>Percentage</Slider.Label>
        </Slider>
      </Field>
      <Meter max={1024} min={0} value={value}>
        <Meter.Label>Bandwidth</Meter.Label>
        <Meter.Value>{(_formatted, value) => `${_formatted} (${value} mb)`}</Meter.Value>
      </Meter>
    </div>
  )
}
