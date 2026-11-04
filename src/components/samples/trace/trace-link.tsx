import { IconArrowUpRight, IconChevronRight, IconFileText, IconGlobe } from "@tabler/icons-react"
import { Trace } from "@/components/ui/trace"

export default () => {
  return (
    <Trace className="max-w-sm">
      <a href="#link">
        <Trace.Line>
          <Trace.Icon>
            <IconFileText />
          </Trace.Icon>
          <Trace.Title>Read apps/v4/lib/docs.ts</Trace.Title>
          <Trace.Icon>
            <IconChevronRight />
          </Trace.Icon>
        </Trace.Line>
      </a>
      <a href="https://docs.astro.build/en/install-and-setup/" rel="noreferrer" target="_blank">
        <Trace.Line>
          <Trace.Icon>
            <IconGlobe />
          </Trace.Icon>
          <Trace.Title>
            Install Astro | docs.astro.build
            <span className="sr-only"> (opens in a new tab)</span>
          </Trace.Title>
          <Trace.Icon>
            <IconArrowUpRight />
          </Trace.Icon>
        </Trace.Line>
      </a>
    </Trace>
  )
}
