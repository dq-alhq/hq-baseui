"use client"

import { IconCheck, IconCopy, IconPencil, IconRefresh, IconThumbDown, IconThumbUp } from "@tabler/icons-react"
import { Markdown } from "@tanstack/markdown/react"
import { type ComponentProps, useEffect, useState } from "react"
import { Bubble } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { Message } from "@/components/ui/message"
import { Tooltip } from "@/components/ui/tooltip"

const reply = `Install Dialog, then open it from the gear button in \`site-header.tsx\`.

\`\`\`bash
npx shadcn@latest add dialog
\`\`\`

Wrap the button in a \`DialogTrigger\` and put the settings form in \`DialogContent\`. Focus moves into the dialog when it opens, and **Esc** closes it.`

export default () => {
  const [copied, setCopied] = useState(false)
  const [feedback, setFeedback] = useState<"like" | "dislike" | null>(null)

  useEffect(() => {
    if (!copied) {
      return
    }

    const timeout = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timeout)
  }, [copied])

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-8 py-6 text-sm">
      <Message align="end">
        <Message.Content className="gap-2">
          <Bubble align="end" variant="muted">
            <Bubble.Content>
              How do I add a settings dialog? It should open from the gear icon in the header.
            </Bubble.Content>
          </Bubble>
          <Message.Footer>
            <MessageAction label="Copy">
              <IconCopy />
            </MessageAction>
            <MessageAction label="Edit">
              <IconPencil />
            </MessageAction>
          </Message.Footer>
        </Message.Content>
      </Message>
      <Message>
        <Message.Content className="gap-2">
          <Markdown>{reply}</Markdown>
          <Message.Footer className="px-0">
            <MessageAction
              label={copied ? "Copied" : "Copy"}
              onClick={() => {
                navigator.clipboard.writeText(reply)
                setCopied(true)
              }}
            >
              {copied ? <IconCheck /> : <IconCopy />}
            </MessageAction>
            <MessageAction
              aria-pressed={feedback === "like"}
              label="Good response"
              onClick={() => setFeedback(feedback === "like" ? null : "like")}
            >
              <IconThumbUp className={feedback === "like" ? "fill-current" : undefined} />
            </MessageAction>
            <MessageAction
              aria-pressed={feedback === "dislike"}
              label="Bad response"
              onClick={() => setFeedback(feedback === "dislike" ? null : "dislike")}
            >
              <IconThumbDown className={feedback === "dislike" ? "fill-current" : undefined} />
            </MessageAction>
            <MessageAction label="Retry">
              <IconRefresh />
            </MessageAction>
          </Message.Footer>
        </Message.Content>
      </Message>
    </div>
  )
}

function MessageAction({ label, children, ...props }: ComponentProps<typeof Button> & { label: string }) {
  return (
    <Tooltip>
      <Tooltip.Trigger render={<Button aria-label={label} size="icon-sm" variant="ghost" {...props} />}>
        {children}
      </Tooltip.Trigger>
      <Tooltip.Content>
        <p>{label}</p>
      </Tooltip.Content>
    </Tooltip>
  )
}
