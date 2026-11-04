import { IconPlus } from "@tabler/icons-react"
import { Avatar } from "@/components/ui/avatar"

export default () => {
  return (
    <Avatar className="grayscale">
      <Avatar.Image alt="@pranathip" src="https://github.com/pranathip.png" />
      <Avatar.Fallback>PP</Avatar.Fallback>
      <Avatar.Badge>
        <IconPlus />
      </Avatar.Badge>
    </Avatar>
  )
}
