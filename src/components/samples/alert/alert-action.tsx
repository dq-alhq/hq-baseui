import { Alert } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default () => {
  return (
    <Alert className="max-w-md">
      <Alert.Title>Dark mode is now available</Alert.Title>
      <Alert.Description>Enable it under your profile settings to get started.</Alert.Description>
      <Alert.Action>
        <Button size="xs" variant="primary">
          Enable
        </Button>
      </Alert.Action>
    </Alert>
  )
}
