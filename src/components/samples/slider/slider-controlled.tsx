"use client"

import { useState } from "react"
import { Field } from "@/components/ui/field"
import { Slider } from "@/components/ui/slider"

export default () => {
  const [value, setValue] = useState([0.3, 0.7])

  return (
    <Field className="mx-auto grid w-full max-w-xs gap-3">
      <Slider
        id="slider-demo-temperature"
        max={1}
        min={0}
        onValueChange={(value) => setValue(value as number[])}
        step={0.1}
        value={value}
      >
        <Slider.Label>Temperature</Slider.Label>
        <Slider.Value />
      </Slider>
    </Field>
  )
}
