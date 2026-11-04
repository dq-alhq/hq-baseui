import { Markdown } from "@tanstack/markdown/react"
import { Bubble } from "@/components/ui/bubble"

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-12 py-12">
      <Bubble>
        <Bubble.Content>This is the default primary bubble.</Bubble.Content>
      </Bubble>
      <Bubble align="end" variant="secondary">
        <Bubble.Content>This is the secondary variant.</Bubble.Content>
      </Bubble>
      <Bubble variant="muted">
        <Bubble.Content>This one is muted. It uses a lower emphasis color for the chat bubble.</Bubble.Content>
        <Bubble.Reactions aria-label="Reaction: thumbs up" role="img">
          <span>👍</span>
        </Bubble.Reactions>
      </Bubble>
      <Bubble align="end" variant="tinted">
        <Bubble.Content>This one is tinted. The tint is a softer color derived from the primary color.</Bubble.Content>
      </Bubble>
      <Bubble variant="outline">
        <Bubble.Content>We can also use an outlined variant.</Bubble.Content>
      </Bubble>
      <Bubble align="end" variant="destructive">
        <Bubble.Content>Or a destructive variant with a reaction.</Bubble.Content>
        <Bubble.Reactions aria-label="Reaction: fire" role="img">
          <span>🔥</span>
        </Bubble.Reactions>
      </Bubble>
      <Bubble variant="ghost">
        <Bubble.Content>
          <Markdown>{`Ghost bubbles work for assistant text, **markdown**, and other content that should not be framed.

This is perfect for assistant messages that should not have a frame and can take the full width of the container. You can also render \`code\` in it.

Ghost bubbles are full width and can take the full width of the container.
`}</Markdown>
        </Bubble.Content>
      </Bubble>
    </div>
  )
}
