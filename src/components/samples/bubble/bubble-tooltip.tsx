import { IconCheck } from "@tabler/icons-react"
import { Bubble } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { Tooltip } from "@/components/ui/tooltip"

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 py-12">
      <Bubble variant="secondary">
        <Bubble.Content>Did you remove the stale route?</Bubble.Content>
      </Bubble>
      <Bubble align="end">
        <Bubble.Content>Yes, removed it from the registry.</Bubble.Content>
        <Bubble.Reactions>
          <Tooltip>
            <Tooltip.Trigger render={<Button size="icon-xs" variant="ghost" />}>
              <IconCheck />
            </Tooltip.Trigger>
            <Tooltip.Content>Read on Jan 5, 2026 at 4:32 PM</Tooltip.Content>
          </Tooltip>
        </Bubble.Reactions>
      </Bubble>
    </div>
  )
}
