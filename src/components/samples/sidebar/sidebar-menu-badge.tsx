"use client"

import { IconChartPie, IconFrame, IconHelp, IconMap, IconSend } from "@tabler/icons-react"
import { Sidebar } from "@/components/ui/sidebar"

const projects = [
  {
    name: "Design Engineering",
    url: "#",
    icon: IconFrame,
    badge: "24"
  },
  {
    name: "Sales & Marketing",
    url: "#",
    icon: IconChartPie,
    badge: "12"
  },
  {
    name: "Travel",
    url: "#",
    icon: IconMap,
    badge: "3"
  },
  {
    name: "Support",
    url: "#",
    icon: IconHelp,
    badge: "21"
  },
  {
    name: "Feedback",
    url: "#",
    icon: IconSend,
    badge: "8"
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
                    <Sidebar.MenuButton
                      className="group-has-data-[state=open]/menu-item:bg-sidebar-accent"
                      render={<a href={project.url} />}
                    >
                      <project.icon />
                      <span>{project.name}</span>
                    </Sidebar.MenuButton>
                    <Sidebar.MenuBadge>{project.badge}</Sidebar.MenuBadge>
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
