import { IconChevronRight, IconFileText, IconSearch } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/ui/code-block"
import { Trace } from "@/components/ui/trace"

export default () => {
  return (
    <div className="w-full max-w-sm">
      <Trace.Collapsible defaultOpen>
        <Trace.CollapsibleTrigger>
          <Trace.Line status="running">
            <Trace.Title>Looking into the slow deploy</Trace.Title>
          </Trace.Line>
        </Trace.CollapsibleTrigger>
        <Trace.CollapsibleContent keepMounted>
          <Trace>
            <Trace.Collapsible>
              <Trace.CollapsibleTrigger>
                <Trace.Line>
                  <Trace.Icon>
                    <IconSearch />
                  </Trace.Icon>
                  <Trace.Title>Searched for the checkout build log</Trace.Title>
                </Trace.Line>
              </Trace.CollapsibleTrigger>
              <Trace.CollapsibleContent className="flex flex-wrap gap-1.5">
                <Badge variant="secondary">vercel.com</Badge>
                <Badge variant="secondary">github.com</Badge>
              </Trace.CollapsibleContent>
            </Trace.Collapsible>
            <a href="#steps">
              <Trace.Line>
                <Trace.Icon>
                  <IconFileText />
                </Trace.Icon>
                <Trace.Title>Read the last twelve deploys</Trace.Title>
                <Trace.Icon>
                  <IconChevronRight />
                </Trace.Icon>
              </Trace.Line>
            </a>
            <Trace.Collapsible>
              <Trace.CollapsibleTrigger>
                <Trace.Line status="running">
                  <Trace.Icon>
                    <IconSearch />
                  </Trace.Icon>
                  <Trace.Title>Searching for the cache key</Trace.Title>
                </Trace.Line>
              </Trace.CollapsibleTrigger>
              <Trace.CollapsibleContent>
                <CodeBlock size="sm">
                  <CodeBlock.Content className="max-h-64" wrap>
                    cache key image optimization
                  </CodeBlock.Content>
                </CodeBlock>
              </Trace.CollapsibleContent>
            </Trace.Collapsible>
          </Trace>
        </Trace.CollapsibleContent>
      </Trace.Collapsible>
    </div>
  )
}
