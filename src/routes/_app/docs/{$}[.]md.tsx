import { createFileRoute, notFound } from "@tanstack/react-router"
import { allDocs } from "content-collections"
import { processMdxForLLMs } from "#/utils/llms"

export const Route = createFileRoute("/_app/docs/{$}.md")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const { _splat } = params
        const doc = allDocs.find((doc) => doc.slug === _splat)

        if (!doc) {
          throw notFound()
        }
        const processedContent = processMdxForLLMs(doc.content)
        return new Response(processedContent, {
          headers: {
            "Content-Type": "text/markdown; charset=utf-8"
          }
        })
      }
    }
  }
})
