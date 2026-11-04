import { IconAlertTriangle, IconCircleCheck, IconInfoCircle } from "@tabler/icons-react"
import { Alert } from "@/components/ui/alert"

export default () => {
  return (
    <div className="grid w-full max-w-md items-start gap-4">
      <Alert variant="success">
        <IconCircleCheck />
        <Alert.Title>Account updated successfully</Alert.Title>
        <Alert.Description>
          Your profile information has been saved. Changes will be reflected immediately.
        </Alert.Description>
      </Alert>
      <Alert variant="warning">
        <IconAlertTriangle />
        <Alert.Title>Your subscription will expire in 3 days.</Alert.Title>
        <Alert.Description>
          Renew now to avoid service interruption or upgrade to a paid plan to continue using the service.
        </Alert.Description>
      </Alert>
      <Alert variant="info">
        <IconInfoCircle />
        <Alert.Title>New feature available</Alert.Title>
        <Alert.Description>
          We&apos;ve added dark mode support. You can enable it in your account settings.
        </Alert.Description>
      </Alert>
    </div>
  )
}
