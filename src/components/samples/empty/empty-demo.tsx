import { IconArrowUpRight, IconFolderCode } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Empty } from "@/components/ui/empty"

export default () => {
  return (
    <Empty>
      <Empty.Header>
        <Empty.Media variant="icon">
          <IconFolderCode />
        </Empty.Media>
        <Empty.Title>No Projects Yet</Empty.Title>
        <Empty.Description>
          You haven&apos;t created any projects yet. Get started by creating your first project.
        </Empty.Description>
      </Empty.Header>
      <Empty.Content className="flex-row justify-center gap-2">
        <Button>Create Project</Button>
        <Button variant="outline">Import Project</Button>
      </Empty.Content>
      <Button className="text-muted-foreground" nativeButton={false} render={<a href="#" />} size="sm" variant="link">
        Learn More <IconArrowUpRight />
      </Button>
    </Empty>
  )
}
