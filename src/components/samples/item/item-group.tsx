import { IconPlus } from "@tabler/icons-react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
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
    <Item.Group className="max-w-sm">
      {people.map((person) => (
        <Item key={person.username} variant="outline">
          <Item.Media>
            <Avatar>
              <Avatar.Image className="grayscale" src={person.avatar} />
              <Avatar.Fallback>{person.username.charAt(0)}</Avatar.Fallback>
            </Avatar>
          </Item.Media>
          <Item.Content className="gap-1">
            <Item.Title>{person.username}</Item.Title>
            <Item.Description>{person.email}</Item.Description>
          </Item.Content>
          <Item.Actions>
            <Button className="rounded-full" size="icon" variant="ghost">
              <IconPlus />
            </Button>
          </Item.Actions>
        </Item>
      ))}
    </Item.Group>
  )
}
