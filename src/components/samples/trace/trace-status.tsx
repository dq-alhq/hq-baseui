import { IconAlertCircle, IconCircle, IconCircleCheck, IconLoader2 } from "@tabler/icons-react"
import { Trace } from "@/components/ui/trace"

export default () => {
  return (
    <Trace className="max-w-sm">
      <Trace.Line>
        <Trace.Icon>
          <IconCircleCheck />
        </Trace.Icon>
        <Trace.Title>Ran pnpm install</Trace.Title>
      </Trace.Line>
      <Trace.Line status="error">
        <Trace.Icon>
          <IconAlertCircle />
        </Trace.Icon>
        <Trace.Title>Failed to run pnpm lint</Trace.Title>
      </Trace.Line>
      <Trace.Line status="running">
        <Trace.Icon>
          <IconLoader2 className="animate-spin" />
        </Trace.Icon>
        <Trace.Title>Running pnpm build</Trace.Title>
      </Trace.Line>
      <Trace.Line status="pending">
        <Trace.Icon>
          <IconCircle />
        </Trace.Icon>
        <Trace.Title>Run pnpm test</Trace.Title>
      </Trace.Line>
    </Trace>
  )
}
