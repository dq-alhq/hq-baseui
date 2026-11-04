import { Markdown } from "@tanstack/markdown/react"
import { Bubble } from "@/components/ui/bubble"
import { Message } from "@/components/ui/message"

const response = `Here's how to render markdown in a message:

1. Render assistant text through **Markdown**.
2. Keep user messages as plain text.
3. Use a \`ghost\` bubble so the response is unframed.
`

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Message align="end">
        <Message.Content>
          <Bubble>
            <Bubble.Content>How do I render markdown in a message?</Bubble.Content>
          </Bubble>
        </Message.Content>
      </Message>
      <Message>
        <Message.Content>
          <Bubble variant="ghost">
            <Bubble.Content>
              <Markdown>{response}</Markdown>
            </Bubble.Content>
          </Bubble>
        </Message.Content>
      </Message>
    </div>
  )
}
