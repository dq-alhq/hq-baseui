"use client"

import { OTPField } from "@/components/ui/input-otp"

export default () => {
  return (
    <OTPField id="digits-only" length={6} validationType="numeric">
      {Array.from({ length: 6 }, (_, index) => (
        <OTPField.Input aria-label={index === 0 ? undefined : `Character ${index + 1} of 6`} key={index} />
      ))}
    </OTPField>
  )
}
