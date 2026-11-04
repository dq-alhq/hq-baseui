import { IconInfoCircle } from "@tabler/icons-react"
import { InputGroup } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { Tooltip } from "@/components/ui/tooltip"

export default () => {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroup.Input id="email" placeholder="shadcn" />
        <InputGroup.Addon>
          <Label htmlFor="email">@</Label>
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup>
        <InputGroup.Input id="email-2" placeholder="shadcn@vercel.com" />
        <InputGroup.Addon align="block-start">
          <Label className="text-foreground" htmlFor="email-2">
            Email
          </Label>
          <Tooltip>
            <Tooltip.Trigger
              render={
                <InputGroup.Button aria-label="Help" className="ml-auto rounded-full" size="icon-xs" variant="ghost" />
              }
            >
              <IconInfoCircle />
            </Tooltip.Trigger>
            <Tooltip.Content>
              <p>We&apos;ll use this to send you notifications</p>
            </Tooltip.Content>
          </Tooltip>
        </InputGroup.Addon>
      </InputGroup>
    </div>
  )
}
