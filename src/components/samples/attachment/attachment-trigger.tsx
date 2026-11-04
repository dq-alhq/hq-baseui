import { IconCopy, IconFileSearch, IconX } from "@tabler/icons-react"
import { Attachment } from "@/components/ui/attachment"
import { Dialog } from "@/components/ui/dialog"

export default () => {
  return (
    <div className="mx-auto w-full max-w-sm py-12">
      <Dialog>
        <Attachment className="w-full">
          <Attachment.Media>
            <IconFileSearch />
          </Attachment.Media>
          <Attachment.Content>
            <Attachment.Title>research-summary.pdf</Attachment.Title>
            <Attachment.Description>Open preview dialog</Attachment.Description>
          </Attachment.Content>
          <Attachment.Actions>
            <Attachment.Action aria-label="Copy link">
              <IconCopy />
            </Attachment.Action>
            <Attachment.Action aria-label="Remove research-summary.pdf">
              <IconX />
            </Attachment.Action>
          </Attachment.Actions>
          <Dialog.Trigger render={<Attachment.Trigger aria-label="Preview research-summary.pdf" />} />
        </Attachment>
        <Dialog.Content className="sm:max-w-md">
          <Dialog.Header>
            <Dialog.Title>research-summary.pdf</Dialog.Title>
            <Dialog.Description>
              The attachment trigger fills the card and opens the dialog., while the actions stay independently
              clickable above it.
            </Dialog.Description>
          </Dialog.Header>
        </Dialog.Content>
      </Dialog>
    </div>
  )
}
