import type { ComponentProps } from "react"
import { MDXContent } from "@content-collections/mdx/react"
import { IconAlertTriangle } from "@tabler/icons-react"
import {
  TypographyA,
  TypographyBlockquote,
  TypographyCode,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyOl,
  TypographyP,
  TypographySmall,
  TypographyUl
} from "@/components/mdx/typography"
import { Alert } from "../ui/alert"
import { Table } from "../ui/table"
import { Figure } from "./block-code"
import { CLI } from "./cli"
import { Demo } from "./demo"
import { Iframe } from "./iframe"
import { Install } from "./install"
import { McpTabs } from "./mcp-tabs"
import { Step, Steps } from "./step"

export const mdxComponents = {
  h1: TypographyH1,
  h2: TypographyH2,
  h3: TypographyH3,
  h4: TypographyH4,
  a: TypographyA,
  p: TypographyP,
  ul: TypographyUl,
  ol: TypographyOl,
  table: Table,
  tr: Table.Row,
  td: Table.Cell,
  th: Table.Head,
  thead: Table.Header,
  tbody: Table.Body,
  code: TypographyCode,
  figure: Figure,
  pre(props: any) {
    return <pre className="border-border overflow-hidden rounded-lg border" {...props} />
  },
  blockquote: TypographyBlockquote,
  small: TypographySmall,
  CLI: (props: any) => <CLI className="my-2" {...props} />,
  Install,
  Demo,
  Iframe,
  McpTabs,
  Steps,
  Step,
  Note: ({ children, ...props }: ComponentProps<typeof Alert>) => (
    <Alert {...props} className="my-2" variant="warning">
      <IconAlertTriangle className="text-foreground! my-0.5" />
      <Alert.Title>{children}</Alert.Title>
    </Alert>
  )
}

export const MDX = (props: ComponentProps<typeof MDXContent>) => {
  return <MDXContent {...props} components={mdxComponents} />
}
