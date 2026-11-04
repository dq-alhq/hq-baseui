import { createFileRoute, notFound } from "@tanstack/react-router"
import { allDocs } from "content-collections"
import { OpenIn } from "#/components/docs/open-in"
import { Pager } from "#/components/docs/pager"
import { DocRefs } from "#/components/docs/references"
import { Toc } from "#/components/docs/toc"
import { MDX } from "#/components/mdx"
import { siteConfig } from "#/config/site"
import { findNeighbour } from "#/utils/find-neighbour"

export const Route = createFileRoute("/_app/docs/$")({
  beforeLoad: ({ params }) => {
    const { _splat } = params
    if (!_splat)
      throw Route.redirect({
        to: "/docs/$",
        params: { _splat: "getting-started/introduction" }
      })
  },
  loader: ({ params }) => {
    const { _splat } = params
    const doc = allDocs.find((doc) => doc.slug === _splat)

    if (!doc) {
      throw notFound()
    }

    const { prev, next } = findNeighbour(_splat)
    return { doc, prev, next }
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.doc.title} | ${siteConfig.name}` },
      { name: "description", content: loaderData?.doc.description },
      { property: "og:title", content: loaderData?.doc.title },
      { property: "og:description", content: loaderData?.doc.description }
    ]
  }),
  component: DocContent
})

function DocContent() {
  const { doc, prev, next } = Route.useLoaderData()

  return (
    <article className="flex w-full items-start">
      {/* Center */}
      <div className="w-full min-w-0 py-8 sm:pt-10 sm:pb-24 xl:border-x">
        <div className="mx-auto flex flex-col gap-6 px-4 sm:px-6 xl:max-w-3xl">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <h1 className="flex-1 text-3xl font-normal tracking-tight">{doc.title}</h1>
              <div className="flex items-center gap-x-1.5">
                {doc.references && doc.references?.length > 0 && <DocRefs references={doc.references} />}
                <OpenIn page={doc.content} url={`docs/${doc.slug}`} />
              </div>
            </div>
            <div className="text-muted-foreground sm:text-base sm:text-balance md:max-w-[80%]">{doc.description}</div>
          </div>
          <div className="typeset typeset-docs">
            <MDX code={doc.html} />
          </div>

          <Pager next={next} prev={prev} />
        </div>
      </div>

      {/* Right side */}
      <div className="sticky top-16 hidden flex-1 flex-col xl:flex">
        <Toc content={doc.content} />
      </div>
    </article>
  )
}
