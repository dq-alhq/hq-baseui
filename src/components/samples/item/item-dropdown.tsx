import { IconChevronDown } from "@tabler/icons-react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { Item } from "@/components/ui/item"

const people = [
  {
    username: "shadcn",
    avatar: "https://github.com/shadcn.png",
    email: "shadcn@vercel.com"
  },
  {
    username: "maxleiter",
    avatar: "https://github.com/maxleiter.png",
    email: "maxleiter@vercel.com"
  },
  {
    username: "evilrabbit",
    avatar: "https://github.com/evilrabbit.png",
    email: "evilrabbit@vercel.com"
  }
]

export default () => {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger render={<Button variant="outline" />}>
        Select <IconChevronDown />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end" className="w-48">
        <DropdownMenu.Group>
          {people.map((person) => (
            <DropdownMenu.Item key={person.username}>
              <Item className="w-full p-2" size="xs">
                <Item.Media>
                  <Avatar className="size-6.5">
                    <Avatar.Image className="grayscale" src={person.avatar} />
                    <Avatar.Fallback>{person.username.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                </Item.Media>
                <Item.Content className="gap-0">
                  <Item.Title>{person.username}</Item.Title>
                  <Item.Description className="leading-none">{person.email}</Item.Description>
                </Item.Content>
              </Item>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
