"use client"

import type { NavItem } from "./data"
import { IconDots, IconFolder, IconShare3, IconTrash } from "@tabler/icons-react"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { Sidebar } from "@/components/ui/sidebar"

export function NavDocuments({ items }: { items: NavItem[] }) {
  return (
    <Sidebar.Group className="group-data-[collapsible=icon]:hidden">
      <Sidebar.GroupLabel>Documents</Sidebar.GroupLabel>
      <Sidebar.Menu>
        {items.map((item) => (
          <Sidebar.MenuItem key={item.title}>
            <Sidebar.MenuButton isActive={item.isActive} render={<a href={item.url} />}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </Sidebar.MenuButton>
            <DropdownMenu>
              <DropdownMenu.Trigger
                render={
                  <Sidebar.MenuAction className="data-[state=open]:bg-accent rounded-sm" showOnHover>
                    <IconDots />
                    <span className="sr-only">More</span>
                  </Sidebar.MenuAction>
                }
              />
              <DropdownMenu.Content>
                <DropdownMenu.Item>
                  <IconFolder />
                  <span>Open</span>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <IconShare3 />
                  <span>Share</span>
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item variant="destructive">
                  <IconTrash />
                  <span>Delete</span>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </Sidebar.MenuItem>
        ))}
        <Sidebar.MenuItem>
          <Sidebar.MenuButton className="text-sidebar-foreground/70">
            <IconDots className="text-sidebar-foreground/70" />
            <span>More</span>
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
      </Sidebar.Menu>
    </Sidebar.Group>
  )
}
