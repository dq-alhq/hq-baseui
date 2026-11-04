import { Button } from "@/components/ui/button"
import { Sheet } from "@/components/ui/sheet"

export default () => {
  return (
    <Sheet>
      <Sheet.Trigger render={<Button variant="outline" />}>Open Sheet</Sheet.Trigger>
      <Sheet.Content showCloseButton={false}>
        <Sheet.Header>
          <Sheet.Title>No Close Button</Sheet.Title>
          <Sheet.Description>
            This sheet doesn&apos;t have a close button in the top-right corner. Click outside to close.
          </Sheet.Description>
        </Sheet.Header>
      </Sheet.Content>
    </Sheet>
  )
}
