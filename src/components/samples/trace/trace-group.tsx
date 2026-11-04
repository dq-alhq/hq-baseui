import { IconFileText, IconSearch, IconTerminal } from "@tabler/icons-react"
import { Trace } from "@/components/ui/trace"

export default () => {
  return (
    <Trace className="max-w-sm">
      <Trace.Line>
        <Trace.Icon>
          <IconSearch />
        </Trace.Icon>
        <Trace.Title>Searched for minimumReleaseAge</Trace.Title>
      </Trace.Line>
      <Trace.Line>
        <Trace.Icon>
          <IconFileText />
        </Trace.Icon>
        <Trace.Title>Read pnpm-workspace.yaml</Trace.Title>
      </Trace.Line>
      <Trace.Line>
        <Trace.Icon>
          <IconTerminal />
        </Trace.Icon>
        <Trace.Title>Ran pnpm install</Trace.Title>
      </Trace.Line>
    </Trace>
  )
}
