import { IconPlus } from "@tabler/icons-react"
import { Avatar } from "@/components/ui/avatar"

export default () => {
  return (
    <Avatar.Group className="grayscale">
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
      <Avatar.GroupCount>
        <IconPlus />
      </Avatar.GroupCount>
    </Avatar.Group>
  )
}
