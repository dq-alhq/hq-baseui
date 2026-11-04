import { IconChevronRight, IconFolderSearch } from "@tabler/icons-react"
import { Sheet } from "@/components/ui/sheet"
import { Trace } from "@/components/ui/trace"

export default () => {
  return (
    <Trace className="max-w-sm">
      <Sheet>
        <Sheet.Trigger>
          <Trace.Line>
            <Trace.Icon>
              <IconFolderSearch />
            </Trace.Icon>
            <Trace.Title>Explored 4 files</Trace.Title>
            <Trace.Icon>
              <IconChevronRight />
            </Trace.Icon>
          </Trace.Line>
        </Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Header>
            <Sheet.Title>Explored 4 files</Sheet.Title>
            <Sheet.Description>Files read while preparing the response.</Sheet.Description>
          </Sheet.Header>
          <ul className="flex flex-col gap-2 px-6 font-mono text-xs">
            <li>apps/v4/lib/docs.ts</li>
            <li>apps/v4/lib/components.ts</li>
            <li>apps/v4/next.config.mjs</li>
            <li>apps/v4/package.json</li>
          </ul>
        </Sheet.Content>
      </Sheet>
    </Trace>
  )
}
