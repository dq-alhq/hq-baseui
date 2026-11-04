import { Button } from "@/components/ui/button"
import { Tooltip } from "@/components/ui/tooltip"

export default () => {
  return (
    <Tooltip>
      <Tooltip.Trigger render={<Button variant="outline" />}>Hover</Tooltip.Trigger>
      <Tooltip.Content>
        <p>Add to library</p>
      </Tooltip.Content>
    </Tooltip>
  )
}
