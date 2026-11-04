import { IconBrain, IconChevronRight, IconFileText, IconTerminal } from "@tabler/icons-react"
import { CodeBlock } from "@/components/ui/code-block"
import { Trace } from "@/components/ui/trace"

export default () => {
  return (
    <div className="w-full max-w-sm">
      <Trace.Collapsible defaultOpen>
        <Trace.CollapsibleTrigger>
          <Trace.Line status="error">
            <Trace.Title>Worked for 2m 4s, 1 command failed</Trace.Title>
          </Trace.Line>
        </Trace.CollapsibleTrigger>
        <Trace.CollapsibleContent className="flex flex-col gap-2" keepMounted>
          <Trace>
            <Trace.Collapsible>
              <Trace.CollapsibleTrigger>
                <Trace.Line>
                  <Trace.Icon>
                    <IconBrain />
                  </Trace.Icon>
                  <Trace.Title>Thought</Trace.Title>
                  <Trace.Description>12s</Trace.Description>
                </Trace.Line>
              </Trace.CollapsibleTrigger>
              <Trace.CollapsibleContent className="whitespace-pre-wrap">
                I should check which package managers are installed before I scaffold anything.
              </Trace.CollapsibleContent>
            </Trace.Collapsible>
            <Trace.Collapsible defaultOpen>
              <Trace.CollapsibleTrigger>
                <Trace.Line status="error">
                  <Trace.Icon>
                    <IconTerminal />
                  </Trace.Icon>
                  <Trace.Title>Ran 2 commands, 1 failed</Trace.Title>
                </Trace.Line>
              </Trace.CollapsibleTrigger>
              <Trace.CollapsibleContent keepMounted>
                <Trace>
                  <Trace.Line>
                    <Trace.Icon>
                      <IconTerminal />
                    </Trace.Icon>
                    <Trace.Title>Ran node --version</Trace.Title>
                  </Trace.Line>
                  <Trace.Collapsible>
                    <Trace.CollapsibleTrigger>
                      <Trace.Line status="error">
                        <Trace.Icon>
                          <IconTerminal />
                        </Trace.Icon>
                        <Trace.Title>Failed to run pnpm --version</Trace.Title>
                      </Trace.Line>
                    </Trace.CollapsibleTrigger>
                    <Trace.CollapsibleContent>
                      <CodeBlock size="sm" variant="destructive">
                        <CodeBlock.Content className="max-h-64" wrap>
                          command not found: pnpm
                        </CodeBlock.Content>
                      </CodeBlock>
                    </Trace.CollapsibleContent>
                  </Trace.Collapsible>
                </Trace>
              </Trace.CollapsibleContent>
            </Trace.Collapsible>
          </Trace>
          <p>Node is installed and pnpm is not. Reading the docs config.</p>
          <Trace>
            <a href="#turn">
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
          </Trace>
        </Trace.CollapsibleContent>
      </Trace.Collapsible>
    </div>
  )
}
