import { IconCircleCheck } from "@tabler/icons-react"
import { Alert } from "@/components/ui/alert"

export default function AlertBasic() {
  return (
    <Alert className="max-w-md">
      <IconCircleCheck />
      <Alert.Title>Account updated successfully</Alert.Title>
      <Alert.Description>
        Your profile information has been saved. Changes will be reflected immediately.
      </Alert.Description>
    </Alert>
  )
}
