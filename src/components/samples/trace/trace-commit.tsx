import { IconChevronRight, IconFilePencil, IconFilePlus, IconGitCommit } from "@tabler/icons-react"
import { CodeBlock } from "@/components/ui/code-block"
import { Sheet } from "@/components/ui/sheet"
import { Trace } from "@/components/ui/trace"

const files = [
  {
    path: "app/login/page.tsx",
    added: false,
    additions: 2,
    deletions: 2,
    diff: `@@ -14,7 +14,7 @@ export default async function LoginPage({
   searchParams,
 }) {
   const { next } = await searchParams
-  const redirectTo =
-    next && next.startsWith("/") ? next : "/"
+  const redirectTo = safeRedirect(next)
+
   return <LoginForm redirectTo={redirectTo} />
 }`
  },
  {
    path: "lib/auth/redirect.ts",
    added: true,
    additions: 7,
    deletions: 0,
    diff: `@@ -0,0 +1,7 @@
+export default function safeRedirect(next: string | undefined) {
+  if (!next || !next.startsWith("/") || next.startsWith("//")) {
+    return "/"
+  }
+
+  return next
+}`
  }
]

function DiffLines({ diff }: { diff: string }) {
  return diff.split("\n").map((line, index) => {
    if (line.startsWith("@@")) {
      return (
        <CodeBlock.Line className="text-muted-foreground" key={index}>
          {line}
        </CodeBlock.Line>
      )
    }

    return (
      <CodeBlock.Line
        key={index}
        variant={line.startsWith("+") ? "added" : line.startsWith("-") ? "removed" : "default"}
      >
        {line.slice(1)}
      </CodeBlock.Line>
    )
  })
}

export default () => {
  return (
    <Trace className="max-w-sm">
      <Trace.Collapsible defaultOpen>
        <Trace.CollapsibleTrigger>
          <Trace.Line>
            <Trace.Icon>
              <IconGitCommit />
            </Trace.Icon>
            <Trace.Title>Committed a1b2c3: Fix the login redirect</Trace.Title>
          </Trace.Line>
        </Trace.CollapsibleTrigger>
        <Trace.CollapsibleContent>
          <Trace>
            {files.map((file) => (
              <Sheet key={file.path}>
                <Sheet.Trigger>
                  <Trace.Line>
                    <Trace.Icon>{file.added ? <IconFilePlus /> : <IconFilePencil />}</Trace.Icon>
                    <Trace.Title>
                      {file.added ? "Added" : "Edited"} {file.path}
                    </Trace.Title>
                    <Trace.Description className="font-mono">
                      +{file.additions} −{file.deletions}
                    </Trace.Description>
                    <Trace.Icon>
                      <IconChevronRight />
                    </Trace.Icon>
                  </Trace.Line>
                </Sheet.Trigger>
                <Sheet.Content>
                  <Sheet.Header>
                    <Sheet.Title className="font-mono">{file.path}</Sheet.Title>
                    <Sheet.Description>
                      {file.additions} additions, {file.deletions} deletions
                    </Sheet.Description>
                  </Sheet.Header>
                  <CodeBlock className="mx-6 mb-6 w-auto">
                    <CodeBlock.Content>
                      <DiffLines diff={file.diff} />
                    </CodeBlock.Content>
                  </CodeBlock>
                </Sheet.Content>
              </Sheet>
            ))}
          </Trace>
        </Trace.CollapsibleContent>
      </Trace.Collapsible>
    </Trace>
  )
}
