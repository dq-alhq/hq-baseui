import { IconInfoCircle } from "@tabler/icons-react"
import { Bubble } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { Popover } from "@/components/ui/popover"

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 py-12">
      <Bubble align="end">
        <Bubble.Content>Run the build script.</Bubble.Content>
      </Bubble>
      <Bubble variant="destructive">
        <Bubble.Content>Failed to run the command.</Bubble.Content>
        <Bubble.Reactions>
          <Popover>
            <Popover.Trigger
              render={
                <Button
                  aria-label="Show error details"
                  className="aria-expanded:text-destructive"
                  size="icon-xs"
                  variant="ghost"
                />
              }
            >
              <IconInfoCircle />
            </Popover.Trigger>
            <Popover.Content>
              <Popover.Header>
                <Popover.Title className="text-sm">Command failed with exit code 1</Popover.Title>
                <Popover.Description className="text-sm">
                  ENOENT: no such file or directory, open pnpm-lock.yaml
                </Popover.Description>
              </Popover.Header>
            </Popover.Content>
          </Popover>
        </Bubble.Reactions>
      </Bubble>
    </div>
  )
}
