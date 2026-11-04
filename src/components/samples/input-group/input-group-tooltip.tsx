import { IconHelp, IconInfoCircle } from "@tabler/icons-react"
import { InputGroup } from "@/components/ui/input-group"
import { Tooltip } from "@/components/ui/tooltip"

export default () => {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroup.Input placeholder="Enter password" type="password" />
        <InputGroup.Addon align="inline-end">
          <Tooltip>
            <Tooltip.Trigger render={<InputGroup.Button aria-label="Info" size="icon-xs" variant="ghost" />}>
              <IconInfoCircle />
            </Tooltip.Trigger>
            <Tooltip.Content>
              <p>Password must be at least 8 characters</p>
            </Tooltip.Content>
          </Tooltip>
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup>
        <InputGroup.Input placeholder="Your email address" />
        <InputGroup.Addon align="inline-end">
          <Tooltip>
            <Tooltip.Trigger render={<InputGroup.Button aria-label="Help" size="icon-xs" variant="ghost" />}>
              <IconHelp />
            </Tooltip.Trigger>
            <Tooltip.Content>
              <p>We&apos;ll use this to send you notifications</p>
            </Tooltip.Content>
          </Tooltip>
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup>
        <InputGroup.Input placeholder="Enter API key" />
        <Tooltip>
          <Tooltip.Trigger render={<InputGroup.Addon />}>
            <InputGroup.Button aria-label="Help" size="icon-xs" variant="ghost">
              <IconHelp />
            </InputGroup.Button>
          </Tooltip.Trigger>
          <Tooltip.Content side="left">
            <p>Click for help with API keys</p>
          </Tooltip.Content>
        </Tooltip>
      </InputGroup>
    </div>
  )
}
