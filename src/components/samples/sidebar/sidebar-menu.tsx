"use client"

import { IconChartPie, IconFrame, IconHelp, IconMap, IconSend } from "@tabler/icons-react"
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
  return (
    <Sidebar.Provider>
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
    </Sidebar.Provider>
  )
}
