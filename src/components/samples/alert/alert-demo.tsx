import { IconCircleCheck, IconInfoCircle } from "@tabler/icons-react"
import { Alert } from "@/components/ui/alert"

export default () => {
  return (
    <div className="grid w-full max-w-md items-start gap-4">
      <Alert>
        <IconCircleCheck />
        <Alert.Title>Payment successful</Alert.Title>
        <Alert.Description>
          Your payment of $29.99 has been processed. A receipt has been sent to your email address.
        </Alert.Description>
      </Alert>
      <Alert>
        <IconInfoCircle />
        <Alert.Title>New feature available</Alert.Title>
        <Alert.Description>
          We&apos;ve added dark mode support. You can enable it in your account settings.
        </Alert.Description>
      </Alert>
    </div>
  )
}
