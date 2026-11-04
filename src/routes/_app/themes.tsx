import { createFileRoute } from "@tanstack/react-router"
import { lazy, Suspense } from "react"
import { CardsSkeletonDemo } from "#/components/cards/skeleton"
import Hero from "#/components/hero"
import { siteConfig } from "#/config/site"

const CardsDemo = lazy(() => import("@/components/cards/index"))

export const Route = createFileRoute("/_app/themes")({
  component: RouteComponent,
  head: () => ({
    meta: [
      { title: `Themes | ${siteConfig.name}` },
      { name: "description", content: "Theme customization for HQ Base UI" },

      { property: "og:title", content: `Themes | ${siteConfig.name}` },
      { property: "og:description", content: "Theme customization for HQ Base UI" }
    ]
  })
})

function RouteComponent() {
  return (
    <>
      <Hero>
        <h1 className="mb-2 max-w-xl text-2xl whitespace-nowrap lg:mb-6 lg:text-5xl">
          <strong className="text-foreground font-black">The</strong>
          <span className="text-foreground/50 font-semibold">mes</span>
        </h1>
        <p className="text-muted-foreground block max-w-2xl text-base leading-relaxed lg:text-xl">
          Create your own design system, build your preset visually, preview your choices.
        </p>
      </Hero>
      <div className="scroll-fade bg-muted dark:bg-background relative container mx-auto w-full flex-auto border-x border-b pb-4">
        <Suspense fallback={<CardsSkeletonDemo />}>
          <CardsDemo />
        </Suspense>
      </div>
      <div className="h-8" />
    </>
  )
}
