"use client"

import { IconChartPie, IconDots, IconFrame, IconHelp, IconMap, IconSend } from "@tabler/icons-react"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
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
                    <Sidebar.MenuButton
                      className="group-has-data-[state=open]/menu-item:bg-sidebar-accent"
                      render={<a href={project.url} />}
                    >
                      <project.icon />
                      <span>{project.name}</span>
                    </Sidebar.MenuButton>
                    <DropdownMenu>
                      <DropdownMenu.Trigger render={<Sidebar.MenuAction />}>
                        <IconDots />
                        <span className="sr-only">More</span>
                      </DropdownMenu.Trigger>
                      <DropdownMenu.Content align="start" side="right">
                        <DropdownMenu.Item>
                          <span>Edit Project</span>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item>
                          <span>Delete Project</span>
                        </DropdownMenu.Item>
                      </DropdownMenu.Content>
                    </DropdownMenu>
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
