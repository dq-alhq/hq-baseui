import { Avatar } from "@/components/ui/avatar"

export default () => {
  return (
    <div className="flex flex-wrap items-center gap-2 grayscale">
      <Avatar size="sm">
        <Avatar.Image alt="@shadcn" src="https://github.com/shadcn.png" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Image alt="@shadcn" src="https://github.com/shadcn.png" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar>
      <Avatar size="lg">
        <Avatar.Image alt="@shadcn" src="https://github.com/shadcn.png" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar>
    </div>
  )
}
