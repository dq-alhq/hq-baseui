import { IconPlus, IconWaveform } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { InputGroup } from "@/components/ui/input-group"
import { Tooltip } from "@/components/ui/tooltip"

export default () => {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button size="icon" variant="outline">
          <IconPlus />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup>
          <InputGroup.Input placeholder="Send a message..." />
          <Tooltip>
            <Tooltip.Trigger render={<InputGroup.Addon align="inline-end" />}>
              <IconWaveform />
            </Tooltip.Trigger>
            <Tooltip.Content>Voice Mode</Tooltip.Content>
          </Tooltip>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  )
}
