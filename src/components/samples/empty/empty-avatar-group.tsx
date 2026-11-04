import { IconPlus } from "@tabler/icons-react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Empty } from "@/components/ui/empty"

export default () => {
  return (
    <Empty>
      <Empty.Header>
        <Empty.Media>
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            <Avatar>
              <Avatar.Image alt="@shadcn" src="https://github.com/shadcn.png" />
              <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar>
            <Avatar>
              <Avatar.Image alt="@maxleiter" src="https://github.com/maxleiter.png" />
              <Avatar.Fallback>LR</Avatar.Fallback>
            </Avatar>
            <Avatar>
              <Avatar.Image alt="@evilrabbit" src="https://github.com/evilrabbit.png" />
              <Avatar.Fallback>ER</Avatar.Fallback>
            </Avatar>
          </div>
        </Empty.Media>
        <Empty.Title>No Team Members</Empty.Title>
        <Empty.Description>Invite your team to collaborate on this project.</Empty.Description>
      </Empty.Header>
      <Empty.Content>
        <Button size="sm">
          <IconPlus />
          Invite Members
        </Button>
      </Empty.Content>
    </Empty>
  )
}
