"use client"

import { IconSelector } from "@tabler/icons-react"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { Sidebar } from "@/components/ui/sidebar"

export default () => {
  return (
    <Sidebar.Provider>
      <Sidebar>
        <Sidebar.Header />
        <Sidebar.Content />
        <Sidebar.Footer>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <DropdownMenu>
                <DropdownMenu.Trigger
                  render={
                    <Sidebar.MenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground" />
                  }
                >
                  Username
                  <IconSelector className="ml-auto" />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="w-(--radix-popper-anchor-width)" side="top">
                  <DropdownMenu.Item>
                    <span>Account</span>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <span>Billing</span>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <span>Sign out</span>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.Footer>
      </Sidebar>
      <Sidebar.Inset>
        <header className="flex h-12 items-center justify-between px-4">
          <Sidebar.Trigger />
        </header>
      </Sidebar.Inset>
    </Sidebar.Provider>
  )
}
