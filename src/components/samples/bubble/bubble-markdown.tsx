import { Markdown } from "@tanstack/markdown/react"
import { Bubble } from "@/components/ui/bubble"

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Bubble align="end" variant="muted">
        <Bubble.Content>
          <Markdown>{`Hello! Are you actually **thinking**?`}</Markdown>
        </Bubble.Content>
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
