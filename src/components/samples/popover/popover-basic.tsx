import { Button } from "@/components/ui/button"
import { Popover } from "@/components/ui/popover"

export default () => {
  return (
    <Popover>
      <Popover.Trigger render={<Button className="w-fit" variant="outline" />}>Open Popover</Popover.Trigger>
      <Popover.Content align="start">
        <Popover.Header>
          <Popover.Title>Dimensions</Popover.Title>
          <Popover.Description>Set the dimensions for the layer.</Popover.Description>
        </Popover.Header>
      </Popover.Content>
    </Popover>
  )
}
