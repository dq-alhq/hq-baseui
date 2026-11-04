import { useState } from "react"
import { OTPField } from "@/components/ui/input-otp"

export default () => {
  const [value, setValue] = useState("")

  return (
    <div className="space-y-2">
      <OTPField length={6} onValueChange={setValue} value={value}>
        {Array.from({ length: 6 }, (_, index) => (
          <OTPField.Input aria-label={index === 0 ? undefined : `Character ${index + 1} of 6`} key={index} />
        ))}
      </OTPField>
      <div className="text-center text-sm">
        {value === "" ? <>Enter your one-time password.</> : <>You entered: {value}</>}
      </div>
    </div>
  )
}
