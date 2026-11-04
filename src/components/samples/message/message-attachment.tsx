"use client"

import { IconDownload, IconFileText } from "@tabler/icons-react"
import { Attachment } from "@/components/ui/attachment"
import { Bubble } from "@/components/ui/bubble"
import { Message } from "@/components/ui/message"

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Message align="end">
        <Message.Content>
          <Attachment orientation="vertical">
            <Attachment.Media variant="image">
              <img
                alt="Workspace"
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80"
              />
            </Attachment.Media>
          </Attachment>
          <Bubble>
            <Bubble.Content>
              Here&apos;s the image. Can you add it to the PDF? Use it for the cover page.
            </Bubble.Content>
          </Bubble>
        </Message.Content>
      </Message>
      <Message>
        <Message.Content>
          <Bubble variant="muted">
            <Bubble.Content>Done. Here&apos;s the PDF with the image added as the cover page.</Bubble.Content>
          </Bubble>
          <Attachment>
            <Attachment.Media>
              <IconFileText />
            </Attachment.Media>
            <Attachment.Content>
              <Attachment.Title>sales-dashboard.pdf</Attachment.Title>
              <Attachment.Description>PDF · 2.4 MB</Attachment.Description>
            </Attachment.Content>
            <Attachment.Actions>
              <Attachment.Action
                aria-label="Download"
                size="icon-sm"
                title="Download"
                type="button"
                variant="secondary"
              >
                <IconDownload />
              </Attachment.Action>
            </Attachment.Actions>
          </Attachment>
        </Message.Content>
      </Message>
      <Message align="end">
        <Message.Content>
          <Bubble>
            <Bubble.Content>Thanks. Looks good.</Bubble.Content>
          </Bubble>
        </Message.Content>
      </Message>
    </div>
  )
}
