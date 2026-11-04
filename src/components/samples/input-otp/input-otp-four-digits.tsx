import { OTPField } from "@/components/ui/input-otp"

export default () => {
  return (
    <OTPField length={4} validationType="numeric">
      {Array.from({ length: 4 }, (_, index) => (
        <OTPField.Input aria-label={index === 0 ? undefined : `Character ${index + 1} of 4`} key={index} />
      ))}
    </OTPField>
  )
}
