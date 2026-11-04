import { IconArrowUpRight, IconGlobe } from "@tabler/icons-react"
import { Trace } from "@/components/ui/trace"

const sources = [
  {
    title: "Install Astro | docs.astro.build",
    href: "https://docs.astro.build/en/install-and-setup/"
  },
  {
    title: "create-astro | npmjs.com",
    href: "https://www.npmjs.com/package/create-astro"
  },
  {
    title: "Settings: minimumReleaseAge | pnpm.io",
    href: "https://pnpm.io/settings#minimumreleaseage"
  }
]

export default () => {
  return (
    <div className="w-full max-w-sm">
      <Trace.Collapsible defaultOpen>
        <Trace.CollapsibleTrigger>
          <Trace.Line>
            <Trace.Icon>
              <IconGlobe />
            </Trace.Icon>
            <Trace.Title>Used {sources.length} sources</Trace.Title>
          </Trace.Line>
        </Trace.CollapsibleTrigger>
        <Trace.CollapsibleContent>
          <Trace>
            {sources.map((source) => (
              <a href={source.href} key={source.href} rel="noreferrer" target="_blank">
                <Trace.Line>
                  <Trace.Icon>
                    <IconGlobe />
                  </Trace.Icon>
                  <Trace.Title>
                    {source.title}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </Trace.Title>
                  <Trace.Icon>
                    <IconArrowUpRight />
                  </Trace.Icon>
                </Trace.Line>
              </a>
            ))}
          </Trace>
        </Trace.CollapsibleContent>
      </Trace.Collapsible>
    </div>
  )
}
