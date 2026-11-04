import { IconFileCode, IconX } from "@tabler/icons-react"
import { Attachment } from "@/components/ui/attachment"
import { Spinner } from "@/components/ui/spinner"

const images = [
  {
    name: "workspace.png",
    meta: "PNG · 820 KB",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80",
    alt: "Workspace"
  },
  {
    name: "desk-reference.jpg",
    meta: "JPG · 1.1 MB",
    src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=900&auto=format&fit=crop&q=80",
    alt: "Desk"
  },
  {
    name: "office-reference.jpg",
    meta: "JPG · 940 KB",
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&auto=format&fit=crop&q=80",
    alt: "Office"
  }
]

export default () => {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-3 py-12">
      <Attachment.Group>
        {images.map((image) => (
          <Attachment key={image.name} orientation="vertical">
            <Attachment.Media variant="image">
              <img alt={image.alt} src={image.src} />
            </Attachment.Media>
            <Attachment.Content>
              <Attachment.Title>{image.name}</Attachment.Title>
              <Attachment.Description>{image.meta}</Attachment.Description>
            </Attachment.Content>
          </Attachment>
        ))}
      </Attachment.Group>
      <Attachment className="w-full" state="uploading">
        <Attachment.Media>
          <Spinner />
        </Attachment.Media>
        <Attachment.Content>
          <Attachment.Title>sales-dashboard.pdf</Attachment.Title>
          <Attachment.Description>Uploading · 64%</Attachment.Description>
        </Attachment.Content>
        <Attachment.Actions>
          <Attachment.Action aria-label="Cancel upload">
            <IconX />
          </Attachment.Action>
        </Attachment.Actions>
      </Attachment>
      <Attachment className="w-full">
        <Attachment.Media>
          <IconFileCode />
        </Attachment.Media>
        <Attachment.Content>
          <Attachment.Title>message-renderer.tsx</Attachment.Title>
          <Attachment.Description>TypeScript · 12 KB</Attachment.Description>
        </Attachment.Content>
        <Attachment.Actions>
          <Attachment.Action aria-label="Remove message-renderer.tsx">
            <IconX />
          </Attachment.Action>
        </Attachment.Actions>
      </Attachment>
    </div>
  )
}
