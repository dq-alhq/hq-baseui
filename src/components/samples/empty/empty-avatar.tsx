import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Empty } from "@/components/ui/empty"

export default () => {
  return (
    <Empty>
      <Empty.Header>
        <Empty.Media variant="default">
          <Avatar className="size-12">
            <Avatar.Image className="grayscale" src="https://github.com/shadcn.png" />
            <Avatar.Fallback>LR</Avatar.Fallback>
          </Avatar>
        </Empty.Media>
        <Empty.Title>User Offline</Empty.Title>
        <Empty.Description>
          This user is currently offline. You can leave a message to notify them or try again later.
        </Empty.Description>
      </Empty.Header>
      <Empty.Content>
        <Button size="sm">Leave Message</Button>
      </Empty.Content>
    </Empty>
  )
}
