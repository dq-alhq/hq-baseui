import { IconPlus } from "@tabler/icons-react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Item } from "@/components/ui/item"

export default () => {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <Item.Media>
          <Avatar className="size-10">
            <Avatar.Image src="https://github.com/evilrabbit.png" />
            <Avatar.Fallback>ER</Avatar.Fallback>
          </Avatar>
        </Item.Media>
        <Item.Content>
          <Item.Title>Evil Rabbit</Item.Title>
          <Item.Description>Last seen 5 months ago</Item.Description>
        </Item.Content>
        <Item.Actions>
          <Button aria-label="Invite" className="rounded-full" size="icon-sm" variant="outline">
            <IconPlus />
          </Button>
        </Item.Actions>
      </Item>
      <Item variant="outline">
        <Item.Media>
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            <Avatar className="hidden sm:flex">
              <Avatar.Image alt="@shadcn" src="https://github.com/shadcn.png" />
              <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar>
            <Avatar className="hidden sm:flex">
              <Avatar.Image alt="@maxleiter" src="https://github.com/maxleiter.png" />
              <Avatar.Fallback>LR</Avatar.Fallback>
            </Avatar>
            <Avatar>
              <Avatar.Image alt="@evilrabbit" src="https://github.com/evilrabbit.png" />
              <Avatar.Fallback>ER</Avatar.Fallback>
            </Avatar>
          </div>
        </Item.Media>
        <Item.Content>
          <Item.Title>No Team Members</Item.Title>
          <Item.Description>Invite your team to collaborate on this project.</Item.Description>
        </Item.Content>
        <Item.Actions>
          <Button size="sm" variant="outline">
            Invite
          </Button>
        </Item.Actions>
      </Item>
    </div>
  )
}
