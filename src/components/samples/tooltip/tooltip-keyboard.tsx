import { IconDeviceFloppy } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import { Tooltip } from "@/components/ui/tooltip"

export default () => {
  return (
    <Tooltip>
      <Tooltip.Trigger render={<Button size="icon-sm" variant="outline" />}>
        <IconDeviceFloppy />
      </Tooltip.Trigger>
      <Tooltip.Content>
        Save Changes <Kbd>S</Kbd>
      </Tooltip.Content>
    </Tooltip>
  )
}
