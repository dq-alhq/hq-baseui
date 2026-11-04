"use client"

import { useState } from "react"
import { OTPField } from "@/components/ui/input-otp"

export default () => {
  const [value, setValue] = useState("000000")

  return (
    <OTPField length={6} onValueChange={setValue} value={value}>
      <OTPField.Input aria-invalid />
      <OTPField.Input aria-invalid />
      <OTPField.Separator />
      <OTPField.Input aria-invalid />
      <OTPField.Input aria-invalid />
      <OTPField.Separator />
      <OTPField.Input aria-invalid />
      <OTPField.Input aria-invalid />
    </OTPField>
  )
}
