import { Avatar } from "@/components/ui/avatar"

export default () => {
  return (
    <Avatar>
      <Avatar.Image alt="@shadcn" src="https://github.com/shadcn.png" />
      <Avatar.Fallback>CN</Avatar.Fallback>
      <Avatar.Badge className="bg-green-600 dark:bg-green-800" />
    </Avatar>
  )
}
