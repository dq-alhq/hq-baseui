"use client"

import { useState } from "react"
import { Field } from "@/components/ui/field"
import { OTPField } from "@/components/ui/input-otp"
import { Slider } from "@/components/ui/slider"

export default () => {
  const [spacing, setSpacing] = useState<number>(1)
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Field>
        <Slider max={4} min={0} onValueChange={(v) => setSpacing(v as number)} value={spacing}>
          <Slider.Label>Spacing</Slider.Label>
          <Slider.Value />
        </Slider>
      </Field>
      <OTPField length={6} spacing={spacing}>
        <OTPField.Input />
        <OTPField.Input />
        <OTPField.Separator />
        <OTPField.Input />
        <OTPField.Input />
        <OTPField.Separator />
        <OTPField.Input />
        <OTPField.Input />
      </OTPField>
    </div>
  )
}
