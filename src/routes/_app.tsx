import { createFileRoute, Outlet } from "@tanstack/react-router"
import AppNavbar from "#/components/layouts/app-navbar"
import ThemeCustomizer from "#/components/theme-customizer"
import { Toaster } from "#/components/ui/toast"

export const Route = createFileRoute("/_app")({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <>
      <ThemeCustomizer />
      <Toaster />
      <AppNavbar />
      <Outlet />
    </>
  )
}
