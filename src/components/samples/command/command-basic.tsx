"use client"

import { IconCalculator, IconCalendar, IconMoodSmile } from "@tabler/icons-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Command } from "@/components/ui/command"

const items = [
  { label: "Calendar", icon: IconCalendar },
  { label: "Search Emoji", icon: IconMoodSmile },
  { label: "Calculator", icon: IconCalculator }
]

export default function CommandBasic() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <Button className="w-fit" onClick={() => setOpen(true)} variant="outline">
        Open Menu
      </Button>
      <Command.Dialog items={items} onOpenChange={setOpen} open={open}>
        <Command.Input placeholder="Type a command or search..." />
        <Command.Empty>No results found.</Command.Empty>
        <Command.List>
          {(item) => (
            <Command.Item key={item.label}>
              <item.icon />
              {item.label}
            </Command.Item>
          )}
        </Command.List>
      </Command.Dialog>
    </div>
  )
}
