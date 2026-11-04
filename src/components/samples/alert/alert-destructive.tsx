import { IconAlertCircle } from "@tabler/icons-react"
import { Alert } from "@/components/ui/alert"

export default () => {
  return (
    <Alert className="max-w-md" variant="destructive">
      <IconAlertCircle />
      <Alert.Title>Payment failed</Alert.Title>
      <Alert.Description>
        Your payment could not be processed. Please check your payment method and try again.
      </Alert.Description>
    </Alert>
  )
}
