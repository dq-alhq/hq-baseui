"use client"

import { useState } from "react"
import { Field } from "@/components/ui/field"
import { Meter } from "@/components/ui/meter"
import { Slider } from "@/components/ui/slider"

export default () => {
  const [value, setValue] = useState<number>(75)
  return (
    <div className="flex w-full flex-col gap-4">
      <Field>
        <Slider onValueChange={(v) => setValue(v as number)} value={value}>
          <Slider.Label>Percentage</Slider.Label>
        </Slider>
      </Field>
      <Meter value={value}>
        <Meter.Label>Usage</Meter.Label>
        <Meter.Value />
      </Meter>
    </div>
  )
}
