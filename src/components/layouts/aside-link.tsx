import { Link, type LinkProps } from "@tanstack/react-router"
import { cn } from "cn"

export function AsideLink(props: LinkProps) {
  return (
    <li className="relative">
      <Link
        {...props}
        activeProps={{ "data-active": true }}
        className={cn(
          "group text-muted-foreground relative flex items-center gap-x-2 rounded-lg px-2 py-1 text-sm transition",
          "hover:text-primary focus:outline-hidden",
          "*:[svg]:size-4.5",
          "data-[active=true]:text-primary data-[active=true]:font-medium"
        )}
      />
    </li>
  )
}
