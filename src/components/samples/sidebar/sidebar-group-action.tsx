"use client"

import { IconChartPie, IconFrame, IconMap, IconPlus } from "@tabler/icons-react"
import { Sidebar } from "@/components/ui/sidebar"
import { toast } from "@/components/ui/toast"

export default () => {
  return (
    <Sidebar.Provider>
      <Sidebar>
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.GroupLabel>Projects</Sidebar.GroupLabel>
            <Sidebar.GroupAction
              onClick={() => toast.add({ description: "You clicked the group action!" })}
              title="Add Project"
            >
              <IconPlus /> <span className="sr-only">Add Project</span>
            </Sidebar.GroupAction>
            <Sidebar.GroupContent>
              <Sidebar.Menu>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton render={<a href="#" />}>
                    <IconFrame />
                    <span>Design Engineering</span>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton render={<a href="#" />}>
                    <IconChartPie />
                    <span>Sales & Marketing</span>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton render={<a href="#" />}>
                    <IconMap />
                    <span>Travel</span>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
              </Sidebar.Menu>
            </Sidebar.GroupContent>
          </Sidebar.Group>
        </Sidebar.Content>
      </Sidebar>
    </Sidebar.Provider>
  )
}
