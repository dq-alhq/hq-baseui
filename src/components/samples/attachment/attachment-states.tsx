import { IconCheck, IconClock, IconFileAlert, IconFileText, IconRefresh, IconX } from "@tabler/icons-react"
import { Attachment } from "@/components/ui/attachment"
import { Spinner } from "@/components/ui/spinner"

export default () => {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-2 py-12">
      <Attachment className="w-full" state="idle">
        <Attachment.Media>
          <IconClock />
        </Attachment.Media>
        <Attachment.Content>
          <Attachment.Title>selected-file.pdf</Attachment.Title>
          <Attachment.Description>Ready to upload</Attachment.Description>
        </Attachment.Content>
        <Attachment.Actions>
          <Attachment.Action aria-label="Remove selected-file.pdf">
            <IconX />
          </Attachment.Action>
        </Attachment.Actions>
      </Attachment>
      <Attachment className="w-full" state="uploading">
        <Attachment.Media>
          <Spinner />
        </Attachment.Media>
        <Attachment.Content>
          <Attachment.Title>design-system.zip</Attachment.Title>
          <Attachment.Description>Uploading · 64%</Attachment.Description>
        </Attachment.Content>
        <Attachment.Actions>
          <Attachment.Action aria-label="Cancel upload">
            <IconX />
          </Attachment.Action>
        </Attachment.Actions>
      </Attachment>
      <Attachment className="w-full" state="processing">
        <Attachment.Media>
          <IconFileText />
        </Attachment.Media>
        <Attachment.Content>
          <Attachment.Title>market-research.pdf</Attachment.Title>
          <Attachment.Description>Processing document</Attachment.Description>
        </Attachment.Content>
        <Attachment.Actions>
          <Attachment.Action aria-label="Remove market-research.pdf">
            <IconX />
          </Attachment.Action>
        </Attachment.Actions>
      </Attachment>
      <Attachment className="w-full" state="error">
        <Attachment.Media>
          <IconFileAlert />
        </Attachment.Media>
        <Attachment.Content>
          <Attachment.Title>financial-model.xlsx</Attachment.Title>
          <Attachment.Description>Upload failed. Try again.</Attachment.Description>
        </Attachment.Content>
        <Attachment.Actions>
          <Attachment.Action aria-label="Retry upload">
            <IconRefresh />
          </Attachment.Action>
          <Attachment.Action aria-label="Remove financial-model.xlsx">
            <IconX />
          </Attachment.Action>
        </Attachment.Actions>
      </Attachment>
      <Attachment className="w-full" state="done">
        <Attachment.Media>
          <IconCheck />
        </Attachment.Media>
        <Attachment.Content>
          <Attachment.Title>uploaded-report.pdf</Attachment.Title>
          <Attachment.Description>Uploaded · 1.8 MB</Attachment.Description>
        </Attachment.Content>
        <Attachment.Actions>
          <Attachment.Action aria-label="Remove uploaded-report.pdf">
            <IconX />
          </Attachment.Action>
        </Attachment.Actions>
      </Attachment>
    </div>
  )
}
