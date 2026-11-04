import { Bubble } from "@/components/ui/bubble"

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Bubble variant="muted">
        <Bubble.Content>Can you tell me what&apos;s the issue?</Bubble.Content>
      </Bubble>
      <Bubble.Group>
        <Bubble align="end">
          <Bubble.Content>You tell me!</Bubble.Content>
        </Bubble>
        <Bubble align="end">
          <Bubble.Content>It worked yesterday. You broke it!</Bubble.Content>
        </Bubble>
        <Bubble align="end">
          <Bubble.Content>Find the bug and fix it.</Bubble.Content>
          <Bubble.Reactions align="start" aria-label="Reactions: eyes">
            <span>👀</span>
          </Bubble.Reactions>
        </Bubble>
      </Bubble.Group>
      <Bubble variant="muted">
        <Bubble.Content>
          Want me to diff yesterday&apos;s you against today&apos;s you? It&apos;s a bit embarrassing.
        </Bubble.Content>
      </Bubble>
    </div>
  )
}
