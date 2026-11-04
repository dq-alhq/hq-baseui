import { Bubble } from "@/components/ui/bubble"

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Bubble align="end">
        <Bubble.Content>Hey there! what&apos;s up?</Bubble.Content>
      </Bubble>
      <Bubble.Group>
        <Bubble variant="muted">
          <Bubble.Content>Hey! Want to see chat bubbles?</Bubble.Content>
        </Bubble>
        <Bubble variant="muted">
          <Bubble.Content>I can group messages, switch sides, and keep the whole thread easy to scan.</Bubble.Content>
          <Bubble.Reactions aria-label="Reaction: thumbs up" role="img">
            <span>👍</span>
          </Bubble.Reactions>
        </Bubble>
      </Bubble.Group>
      <Bubble align="end">
        <Bubble.Content>Sure. Hit me with your best demo.</Bubble.Content>
      </Bubble>
      <Bubble variant="muted">
        <Bubble.Content>Yes. You are reading a demo that is demoing itself. Very meta. Very on-brand.</Bubble.Content>
        <Bubble.Reactions aria-label="Reactions: thumbs up, fire, eyes, and 2 more" role="img">
          <span>👍</span>
          <span>🔥</span>
          <span>👀</span>
          <span>+2</span>
        </Bubble.Reactions>
      </Bubble>
    </div>
  )
}
