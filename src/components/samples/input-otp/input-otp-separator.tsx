import { OTPField } from "@/components/ui/input-otp"

export default () => {
  return (
    <OTPField length={6}>
      <OTPField.Input />
      <OTPField.Input />
      <OTPField.Separator />
      <OTPField.Input />
      <OTPField.Input />
      <OTPField.Separator />
      <OTPField.Input />
      <OTPField.Input />
    </OTPField>
  )
}
