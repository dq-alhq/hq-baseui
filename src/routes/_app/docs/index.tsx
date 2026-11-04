import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_app/docs/")({
  beforeLoad: () => {
    throw Route.redirect({
      to: "/docs/$",
      params: { _splat: "getting-started/introduction" }
    })
  }
})
