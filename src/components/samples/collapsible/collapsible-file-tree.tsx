import { IconChevronRight, IconFile, IconFolder } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Collapsible } from "@/components/ui/collapsible"
import { Tabs } from "@/components/ui/tabs"

type FileTreeItem = { name: string } | { name: string; items: FileTreeItem[] }

export default () => {
  const fileTree: FileTreeItem[] = [
    {
      name: "components",
      items: [
        {
          name: "ui",
          items: [
            { name: "button.tsx" },
            { name: "card.tsx" },
            { name: "dialog.tsx" },
            { name: "input.tsx" },
            { name: "select.tsx" },
            { name: "table.tsx" }
          ]
        },
        { name: "login-form.tsx" },
        { name: "register-form.tsx" }
      ]
    },
    {
      name: "lib",
      items: [{ name: "utils.ts" }, { name: "cn.ts" }, { name: "api.ts" }]
    },
    {
      name: "hooks",
      items: [{ name: "use-media-query.ts" }, { name: "use-debounce.ts" }, { name: "use-local-storage.ts" }]
    },
    {
      name: "types",
      items: [{ name: "index.d.ts" }, { name: "api.d.ts" }]
    },
    {
      name: "public",
      items: [{ name: "favicon.ico" }, { name: "logo.svg" }, { name: "images" }]
    },
    { name: "app.tsx" },
    { name: "layout.tsx" },
    { name: "globals.css" },
    { name: "package.json" },
    { name: "tsconfig.json" },
    { name: "README.md" },
    { name: ".gitignore" }
  ]

  const renderItem = (fileItem: FileTreeItem) => {
    if ("items" in fileItem) {
      return (
        <Collapsible key={fileItem.name}>
          <Collapsible.Trigger
            render={
              <Button
                className="group hover:bg-accent hover:text-accent-foreground w-full justify-start transition-none"
                size="sm"
                variant="ghost"
              />
            }
          >
            <IconChevronRight className="transition-transform group-data-panel-open:rotate-90" />
            <IconFolder />
            {fileItem.name}
          </Collapsible.Trigger>
          <Collapsible.Content className="style-lyra:ml-4 mt-1 ml-5">
            <div className="flex flex-col gap-1">{fileItem.items.map((child) => renderItem(child))}</div>
          </Collapsible.Content>
        </Collapsible>
      )
    }
    return (
      <Button className="text-foreground w-full justify-start gap-2" key={fileItem.name} size="sm" variant="link">
        <IconFile />
        <span>{fileItem.name}</span>
      </Button>
    )
  }

  return (
    <Card className="mx-auto w-full max-w-[16rem] gap-2" size="sm">
      <Card.Header>
        <Tabs defaultValue="explorer">
          <Tabs.List className="w-full">
            <Tabs.Trigger value="explorer">Explorer</Tabs.Trigger>
            <Tabs.Trigger value="settings">Outline</Tabs.Trigger>
          </Tabs.List>
        </Tabs>
      </Card.Header>
      <Card.Content>
        <div className="flex flex-col gap-1">{fileTree.map((item) => renderItem(item))}</div>
      </Card.Content>
    </Card>
  )
}
