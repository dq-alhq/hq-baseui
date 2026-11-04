import { IconCopy, IconRefresh, IconThumbDown, IconThumbUp } from "@tabler/icons-react"
import { Bubble } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { Message } from "@/components/ui/message"

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Message>
        <Message.Content>
          <Bubble variant="muted">
            <Bubble.Content>The install failure is coming from the workspace package.</Bubble.Content>
          </Bubble>
          <Message.Footer>
            <Button aria-label="Copy" size="icon" title="Copy" variant="ghost">
              <IconCopy />
            </Button>
            <Button aria-label="Like" size="icon" title="Like" variant="ghost">
              <IconThumbUp />
            </Button>
            <Button aria-label="Dislike" size="icon" title="Dislike" variant="ghost">
              <IconThumbDown />
            </Button>
          </Message.Footer>
        </Message.Content>
      </Message>
      <Message align="end">
        <Message.Content>
          <Bubble>
            <Bubble.Content>Okay drop me a link. Taking a look...</Bubble.Content>
          </Bubble>
          <Message.Footer className="gap-2">
            <span className="text-destructive font-normal">Failed to send</span>
            <Button aria-label="Retry" size="icon-xs" title="Retry" variant="ghost">
              <IconRefresh />
            </Button>
          </Message.Footer>
        </Message.Content>
      </Message>
    </div>
  )
}
