import { Avatar } from "@/components/ui/avatar"

export default () => {
  return (
    <div className="flex flex-row flex-wrap items-center gap-6 md:gap-12">
      <Avatar>
        <Avatar.Image alt="@shadcn" className="grayscale" src="https://github.com/shadcn.png" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Image alt="@evilrabbit" src="https://github.com/evilrabbit.png" />
        <Avatar.Fallback>ER</Avatar.Fallback>
        <Avatar.Badge className="bg-green-600 dark:bg-green-800" />
      </Avatar>
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
        <Avatar.GroupCount>+3</Avatar.GroupCount>
      </Avatar.Group>
    </div>
  )
}
