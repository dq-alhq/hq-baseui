import { IconGitBranch } from "@tabler/icons-react"
import { Trace } from "@/components/ui/trace"

export default () => {
  return (
    <Trace className="max-w-sm">
      <Trace.Line>
        <Trace.Icon>
          <IconGitBranch />
        </Trace.Icon>
        <Trace.Title>Created branch fix/frozen-lockfile</Trace.Title>
      </Trace.Line>
    </Trace>
  )
}
