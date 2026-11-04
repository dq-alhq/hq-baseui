"use client"

import { Bubble } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-12 py-12">
      <Bubble align="end" variant="muted">
        <Bubble.Content>I don&apos;t need tests, I know my code works.</Bubble.Content>
        <Bubble.Reactions align="start" aria-label="Reactions: thumbs up, surprised" role="img">
          <span>👍</span>
          <span>😮</span>
        </Bubble.Reactions>
      </Bubble>
      <Bubble variant="muted">
        <Bubble.Content>
          Bold. Fine I&apos;ll add some tests. I&apos;ll let you know when they&apos;re done.
        </Bubble.Content>
        <Bubble.Reactions aria-label="Reactions: eyes, rocket, and 2 more" role="img">
          <span>👀</span>
          <span>🚀</span>
          <span>+2</span>
        </Bubble.Reactions>
      </Bubble>
      <Bubble align="end" variant="default">
        <Bubble.Content>Tests passed on the first try. All 142 of them. Looking good!</Bubble.Content>
        <Bubble.Reactions align="start" aria-label="Reactions: party popper, clapping hands" role="img" side="top">
          <span>🎉</span>
          <span>👏</span>
        </Bubble.Reactions>
      </Bubble>
      <Bubble variant="destructive">
        <Bubble.Content>Are you sure I can run this command?</Bubble.Content>
        <Bubble.Reactions>
          <Button onClick={() => toast.success("You clicked yes, running command...")} size="xs" variant="ghost">
            Yes, run it
          </Button>
        </Bubble.Reactions>
      </Bubble>
    </div>
  )
}
