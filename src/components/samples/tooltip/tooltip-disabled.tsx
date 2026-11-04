import { Button } from "@/components/ui/button"
import { Tooltip } from "@/components/ui/tooltip"

export default () => {
  return (
    <Tooltip>
      <Tooltip.Trigger render={<span className="inline-block w-fit" />}>
        <Button disabled variant="outline">
          Disabled
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <p>This feature is currently unavailable</p>
      </Tooltip.Content>
    </Tooltip>
  )
}
