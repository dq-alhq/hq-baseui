import { IconArrowUpRight, IconFolder } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Empty } from "@/components/ui/empty"

export default () => {
  return (
    <Empty>
      <Empty.Header>
        <Empty.Media variant="icon">
          <IconFolder />
        </Empty.Media>
        <Empty.Title>No projects yet</Empty.Title>
        <Empty.Description>
          You haven&apos;t created any projects yet. Get started by creating your first project.
        </Empty.Description>
      </Empty.Header>
      <Empty.Content>
        <div className="flex gap-2">
          <Button nativeButton={false} render={<a href="#" />}>
            Create project
          </Button>
          <Button variant="outline">Import project</Button>
        </div>
        <Button className="text-muted-foreground" nativeButton={false} render={<a href="#" />} variant="link">
          Learn more <IconArrowUpRight />
        </Button>
      </Empty.Content>
    </Empty>
  )
}
