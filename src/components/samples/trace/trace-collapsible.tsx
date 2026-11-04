import { IconTerminal } from "@tabler/icons-react"
import { CodeBlock } from "@/components/ui/code-block"
import { Trace } from "@/components/ui/trace"

export default () => {
  return (
    <div className="w-full max-w-sm">
      <Trace.Collapsible>
        <Trace.CollapsibleTrigger>
          <Trace.Line>
            <Trace.Icon>
              <IconTerminal />
            </Trace.Icon>
            <Trace.Title>Ran node --version</Trace.Title>
          </Trace.Line>
        </Trace.CollapsibleTrigger>
        <Trace.CollapsibleContent>
          <CodeBlock size="sm">
            <CodeBlock.Content className="max-h-64" wrap>
              {"$ node --version\nv24.18.0"}
            </CodeBlock.Content>
          </CodeBlock>
        </Trace.CollapsibleContent>
      </Trace.Collapsible>
    </div>
  )
}
