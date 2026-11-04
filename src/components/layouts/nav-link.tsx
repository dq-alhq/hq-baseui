import type { ComponentProps } from "react"
import { Link } from "@tanstack/react-router"

const NavLink = ({ className, ...props }: ComponentProps<typeof Link>) => {
  return (
    <Link
      activeOptions={{ exact: false }}
      activeProps={{ "data-active": true }}
      className="text-muted-foreground hover:bg-primary/10 focus:ring-ring data-[active=true]:text-primary relative flex items-center gap-x-2 rounded-lg px-2 text-sm transition focus:ring focus:outline-hidden data-[active=true]:font-medium sm:py-1.5"
      {...props}
    />
  )
}
export default NavLink
