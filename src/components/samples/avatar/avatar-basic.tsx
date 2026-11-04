import { Avatar } from "@/components/ui/avatar"

export default () => {
  return (
    <Avatar>
      <Avatar.Image alt="@shadcn" className="grayscale" src="https://github.com/shadcn.png" />
      <Avatar.Fallback>CN</Avatar.Fallback>
    </Avatar>
  )
}
