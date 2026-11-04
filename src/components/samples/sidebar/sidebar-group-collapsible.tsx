"use client"

import { IconChevronDown, IconHelp, IconSend } from "@tabler/icons-react"
import { Collapsible } from "@/components/ui/collapsible"
import { Sidebar } from "@/components/ui/sidebar"

export default () => {
  return (
    <Sidebar.Provider>
      <Sidebar>
        <Sidebar.Content>
          <Collapsible className="group/collapsible" defaultOpen>
            <Sidebar.Group>
              <Sidebar.GroupLabel
                className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
                render={<Collapsible.Trigger />}
              >
                Help
                <IconChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </Sidebar.GroupLabel>
              <Collapsible.Content>
                <Sidebar.GroupContent>
                  <Sidebar.Menu>
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton>
                        <IconHelp />
                        Support
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton>
                        <IconSend />
                        Feedback
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                  </Sidebar.Menu>
                </Sidebar.GroupContent>
              </Collapsible.Content>
            </Sidebar.Group>
          </Collapsible>
        </Sidebar.Content>
      </Sidebar>
    </Sidebar.Provider>
  )
}
