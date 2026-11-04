import { IconFilePencil, IconSearch, IconTerminal } from "@tabler/icons-react"
import { Trace } from "@/components/ui/trace"

export default () => {
  return (
    <Trace className="max-w-sm">
      <Trace.Line>
        <Trace.Icon>
          <IconFilePencil />
        </Trace.Icon>
        <Trace.Title>Edited components/settings/notification-preferences-form.tsx</Trace.Title>
        <Trace.Description className="font-mono">+48 −12</Trace.Description>
      </Trace.Line>
      <Trace.Line>
        <Trace.Icon>
          <IconTerminal />
        </Trace.Icon>
        <Trace.Title>Ran pnpm test</Trace.Title>
        <Trace.Description>14s</Trace.Description>
      </Trace.Line>
      <Trace.Line>
        <Trace.Icon>
          <IconSearch />
        </Trace.Icon>
        <Trace.Title>Searched for useChat</Trace.Title>
        <Trace.Description>8 results</Trace.Description>
      </Trace.Line>
    </Trace>
  )
}
