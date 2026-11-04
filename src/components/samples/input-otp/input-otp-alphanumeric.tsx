import { OTPField } from "@/components/ui/input-otp"

export default () => {
  return (
    <OTPField length={6} validationType={"alphanumeric"}>
      {Array.from({ length: 3 }, (_, index) => (
        <OTPField.Input aria-label={index === 0 ? undefined : `Character ${index + 1} of 6`} key={index} />
      ))}
      <OTPField.Separator />
      {Array.from({ length: 3 }, (_, index) => (
        <OTPField.Input aria-label={`Character ${index + 4} of 6`} key={index + 3} />
      ))}
    </OTPField>
  )
}
