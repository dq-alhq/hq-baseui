"use client"

import { IconTerminal } from "@tabler/icons-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CodeBlock, CodeBlockContent } from "@/components/ui/code-block"
import { Trace } from "@/components/ui/trace"

export default () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col items-start gap-4">
      <Trace.Collapsible defaultOpen>
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
            <CodeBlockContent className="max-h-64" wrap>
              {"$ node --version\nv24.18.0"}
            </CodeBlockContent>
          </CodeBlock>
        </Trace.CollapsibleContent>
      </Trace.Collapsible>
      <Trace.Collapsible onOpenChange={setOpen} open={open}>
        <Trace.CollapsibleTrigger>
          <Trace.Line>
            <Trace.Icon>
              <IconTerminal />
            </Trace.Icon>
            <Trace.Title>Ran pnpm --version</Trace.Title>
          </Trace.Line>
        </Trace.CollapsibleTrigger>
        <Trace.CollapsibleContent>
          <CodeBlock size="sm">
            <CodeBlockContent className="max-h-64" wrap>
              {"$ pnpm --version\n10.33.4"}
            </CodeBlockContent>
          </CodeBlock>
        </Trace.CollapsibleContent>
      </Trace.Collapsible>
      <Button onClick={() => setOpen(!open)} size="sm" variant="outline">
        {open ? "Hide" : "Show"} the pnpm output
      </Button>
    </div>
  )
}
