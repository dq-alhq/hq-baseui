import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Kbd } from "@/components/ui/kbd"
import { Tooltip } from "@/components/ui/tooltip"

export default () => {
  return (
    <div className="flex flex-wrap gap-4">
      <ButtonGroup>
        <Tooltip>
          <Tooltip.Trigger render={<Button variant="outline" />}>Save</Tooltip.Trigger>
          <Tooltip.Content>
            Save Changes <Kbd>S</Kbd>
          </Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger render={<Button variant="outline" />}>Print</Tooltip.Trigger>
          <Tooltip.Content>
            Print Document{" "}
            <Kbd.Group>
              <Kbd>Ctrl</Kbd>
              <Kbd>P</Kbd>
            </Kbd.Group>
          </Tooltip.Content>
        </Tooltip>
      </ButtonGroup>
    </div>
  )
}
