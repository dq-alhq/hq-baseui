import { IconCloud } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Empty } from "@/components/ui/empty"

export default () => {
  return (
    <Empty className="border border-dashed">
      <Empty.Header>
        <Empty.Media variant="icon">
          <IconCloud />
        </Empty.Media>
        <Empty.Title>Cloud Storage Empty.</Empty.Title>
        <Empty.Description>Upload files to your cloud storage to access them anywhere.</Empty.Description>
      </Empty.Header>
      <Empty.Content>
        <Button size="sm" variant="outline">
          Upload Files
        </Button>
      </Empty.Content>
    </Empty>
  )
}
