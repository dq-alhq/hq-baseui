import { createFileRoute, notFound } from "@tanstack/react-router"
import { previews } from "#/components/samples/generated/previews"

export const Route = createFileRoute("/block/$slug")({
  component: RouteComponent,
  beforeLoad: ({ params }) => {
    const { slug } = params
    if (!slug)
      throw Route.redirect({
        to: "/"
      })
  },
  loader: ({ params }) => {
    const { slug } = params
    const page = Object.keys(previews).find((key) => key === `${slug}/page`)
    const layout = Object.keys(previews).find((key) => key === `${slug}/layout`)
    if (!page && !layout) throw notFound()
    return { page, layout }
  }
})

function RouteComponent() {
  const { page, layout } = Route.useLoaderData()
  const PageComponent = page ? previews[page].component : null
  const LayoutComponent = layout ? previews[layout].component : null

  if (LayoutComponent && PageComponent) {
    return (
      <LayoutComponent>
        <PageComponent />
      </LayoutComponent>
    )
  }

  if (LayoutComponent) {
    return <LayoutComponent />
  }

  if (PageComponent) {
    return <PageComponent />
  }

  return null
}
