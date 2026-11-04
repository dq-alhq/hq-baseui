"use client"

import { Fragment, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Command } from "@/components/ui/command"
import { Kbd, KbdGroup } from "@/components/ui/kbd"

interface Item {
  value: string
  label: string
  shortcut?: string
}

interface Group {
  value: string
  items: Item[]
}

const groupedItems: Group[] = [
  {
    items: [
      { label: "Linear", shortcut: "⌘L", value: "linear" },
      { label: "Figma", shortcut: "⌘F", value: "figma" },
      { label: "Slack", shortcut: "⌘S", value: "slack" },
      { label: "YouTube", shortcut: "⌘Y", value: "youtube" },
      { label: "Raycast", shortcut: "⌘R", value: "raycast" }
    ],
    value: "Suggestions"
  },
  {
    items: [
      { label: "Clipboard History", shortcut: "⌘⇧C", value: "clipboard-history" },
      { label: "Import Extension", shortcut: "⌘I", value: "import-extension" },
      { label: "Create Snippet", shortcut: "⌘N", value: "create-snippet" },
      { label: "System Preferences", shortcut: "⌘,", value: "system-preferences" },
      { label: "Window Management", shortcut: "⌘⇧W", value: "window-management" }
    ],
    value: "Commands"
  }
]

export default () => {
  const [open, setOpen] = useState(false)
  function handleItemClick(_item: Item) {
    setOpen(false)
  }

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <Button className="w-fit" onClick={() => setOpen(true)} variant="outline">
        Open Menu
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>J</Kbd>
        </KbdGroup>
      </Button>
      <Command.Dialog items={groupedItems} onOpenChange={setOpen} open={open}>
        <Command.Input placeholder="Type a command. or search..." />
        <Command.Empty>No results found.</Command.Empty>
        <Command.List>
          {(group: Group) => (
            <Fragment key={group.value}>
              <Command.Group items={group.items} title={group.value}>
                {(item: Item) => (
                  <Command.Item key={item.value} onClick={() => handleItemClick(item)} value={item.value}>
                    <span className="flex-1">{item.label}</span>
                    {item.shortcut && <Command.Shortcut>{item.shortcut}</Command.Shortcut>}
                  </Command.Item>
                )}
              </Command.Group>
              <Command.Separator />
            </Fragment>
          )}
        </Command.List>
      </Command.Dialog>
    </div>
  )
}
