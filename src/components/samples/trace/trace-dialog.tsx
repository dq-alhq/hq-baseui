import { IconArrowUpRight, IconChevronRight, IconGlobe } from "@tabler/icons-react"
import { Dialog } from "@/components/ui/dialog"
import { Trace } from "@/components/ui/trace"

const results = [
  {
    title: "Caching build outputs",
    url: "https://nextjs.org/docs/app/guides/caching"
  },
  {
    title: "Image optimization reference",
    url: "https://nextjs.org/docs/app/api-reference/components/image"
  },
  {
    title: "Deploy hooks and cache keys",
    url: "https://vercel.com/docs/deploy-hooks"
  }
]

export default () => {
  return (
    <Trace className="max-w-sm">
      <Dialog>
        <Dialog.Trigger>
          <Trace.Line>
            <Trace.Icon>
              <IconGlobe />
            </Trace.Icon>
            <Trace.Title>Searched the web for cache keys</Trace.Title>
            <Trace.Icon>
              <IconChevronRight />
            </Trace.Icon>
          </Trace.Line>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Searched the web for cache keys</Dialog.Title>
            <Dialog.Description>Three results were used in the response.</Dialog.Description>
          </Dialog.Header>
          <Trace>
            {results.map((result) => (
              <a href={result.url} key={result.url} rel="noreferrer" target="_blank">
                <Trace.Line>
                  <Trace.Icon>
                    <IconGlobe />
                  </Trace.Icon>
                  <Trace.Title>
                    {result.title}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </Trace.Title>
                  <Trace.Icon>
                    <IconArrowUpRight />
                  </Trace.Icon>
                </Trace.Line>
              </a>
            ))}
          </Trace>
        </Dialog.Content>
      </Dialog>
    </Trace>
  )
}
