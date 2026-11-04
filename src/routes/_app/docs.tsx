import { createFileRoute, Outlet } from "@tanstack/react-router"
import Aside from "#/components/layouts/aside"

export const Route = createFileRoute("/_app/docs")({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className="relative mx-auto flex w-full flex-auto lg:max-w-(--breakpoint-2xl) xl:border-x">
      <div className="hidden lg:relative lg:block lg:flex-none">
        <Aside />
      </div>
      <div className="w-full min-w-0">
        <Outlet />
      </div>
    </div>
  )
}
