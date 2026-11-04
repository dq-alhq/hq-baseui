"use client"

import {
  IconChartPie,
  IconFrame,
  IconHelp,
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarRightCollapse,
  IconMap,
  IconSend
} from "@tabler/icons-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/ui/sidebar"

const projects = [
  {
    name: "Design Engineering",
    url: "#",
    icon: IconFrame
  },
  {
    name: "Sales & Marketing",
    url: "#",
    icon: IconChartPie
  },
  {
    name: "Travel",
    url: "#",
    icon: IconMap
  },
  {
    name: "Support",
    url: "#",
    icon: IconHelp
  },
  {
    name: "Feedback",
    url: "#",
    icon: IconSend
  }
]

export default () => {
  const [open, setOpen] = useState(true)

  return (
    <Sidebar.Provider onOpenChange={setOpen} open={open}>
      <Sidebar>
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.GroupLabel>Projects</Sidebar.GroupLabel>
            <Sidebar.GroupContent>
              <Sidebar.Menu>
                {projects.map((project) => (
                  <Sidebar.MenuItem key={project.name}>
                    <Sidebar.MenuButton render={<a href={project.url} />}>
                      <project.icon />
                      <span>{project.name}</span>
                    </Sidebar.MenuButton>
                  </Sidebar.MenuItem>
                ))}
              </Sidebar.Menu>
            </Sidebar.GroupContent>
          </Sidebar.Group>
        </Sidebar.Content>
      </Sidebar>
      <Sidebar.Inset>
        <header className="flex h-12 items-center justify-between px-4">
          <Button onClick={() => setOpen((open) => !open)} size="sm" variant="ghost">
            {open ? <IconLayoutSidebarLeftCollapse /> : <IconLayoutSidebarRightCollapse />}
            <span>{open ? "Close" : "Open"} Sidebar</span>
          </Button>
        </header>
      </Sidebar.Inset>
    </Sidebar.Provider>
  )
}
