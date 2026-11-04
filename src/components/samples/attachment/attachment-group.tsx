import { IconFileCode, IconFileText, IconTable, IconX, type TablerIcon } from "@tabler/icons-react"
import { Attachment } from "@/components/ui/attachment"

type Item = {
  name: string
  meta: string
  icon?: TablerIcon
  src?: string
}

const items: Item[] = [
  { name: "briefing-notes.pdf", meta: "PDF · 1.4 MB", icon: IconFileText },
  {
    name: "workspace.png",
    meta: "PNG · 820 KB",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80"
  },
  { name: "customers.csv", meta: "CSV · 18 KB", icon: IconTable },
  { name: "renderer.tsx", meta: "TSX · 12 KB", icon: IconFileCode }
]

export default () => {
  return (
    <div className="mx-auto w-full max-w-sm py-12">
      <Attachment.Group className="w-full">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <Attachment className="w-64" key={item.name}>
              {item.src ? (
                <Attachment.Media variant="image">
                  <img alt={item.name} src={item.src} />
                </Attachment.Media>
              ) : Icon ? (
                <Attachment.Media>
                  <Icon />
                </Attachment.Media>
              ) : null}
              <Attachment.Content>
                <Attachment.Title>{item.name}</Attachment.Title>
                <Attachment.Description>{item.meta}</Attachment.Description>
              </Attachment.Content>
              <Attachment.Actions>
                <Attachment.Action aria-label={`Remove ${item.name}`}>
                  <IconX />
                </Attachment.Action>
              </Attachment.Actions>
            </Attachment>
          )
        })}
      </Attachment.Group>
    </div>
  )
}
