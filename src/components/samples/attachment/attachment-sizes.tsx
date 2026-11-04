import { IconFileText } from "@tabler/icons-react"
import { Attachment } from "@/components/ui/attachment"

export default () => {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-3 py-12">
      <Attachment className="w-full" size="default">
        <Attachment.Media>
          <IconFileText />
        </Attachment.Media>
        <Attachment.Content>
          <Attachment.Title>Default attachment.</Attachment.Title>
          <Attachment.Description>PDF · 2.4 MB</Attachment.Description>
        </Attachment.Content>
      </Attachment>
      <Attachment className="w-full" size="sm">
        <Attachment.Media>
          <IconFileText />
        </Attachment.Media>
        <Attachment.Content>
          <Attachment.Title>Small attachment.</Attachment.Title>
          <Attachment.Description>PDF · 2.4 MB</Attachment.Description>
        </Attachment.Content>
      </Attachment>
      <Attachment className="w-full" size="xs">
        <Attachment.Media>
          <IconFileText />
        </Attachment.Media>
        <Attachment.Content>
          <Attachment.Title>Extra small attachment.</Attachment.Title>
        </Attachment.Content>
      </Attachment>
    </div>
  )
}
