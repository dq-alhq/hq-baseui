import { OTPField } from "@/components/ui/input-otp"

export default () => {
  return (
    <OTPField defaultValue="123456" length={6}>
      {Array.from({ length: 6 }, (_, index) => (
        <OTPField.Input aria-label={index === 0 ? undefined : `Character ${index + 1} of 6`} key={index} />
      ))}
    </OTPField>
  )
}
