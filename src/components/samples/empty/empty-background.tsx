import { IconBell, IconRefresh } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Empty } from "@/components/ui/empty"

export default () => {
  return (
    <Empty className="bg-muted/30 h-full">
      <Empty.Header>
        <Empty.Media variant="icon">
          <IconBell />
        </Empty.Media>
        <Empty.Title>No Notifications</Empty.Title>
        <Empty.Description className="max-w-xs text-pretty">
          You&apos;re all caught up. New notifications will appear here.
        </Empty.Description>
      </Empty.Header>
      <Empty.Content>
        <Button variant="outline">
          <IconRefresh data-icon="inline-start" />
          Refresh
        </Button>
      </Empty.Content>
    </Empty>
  )
}
