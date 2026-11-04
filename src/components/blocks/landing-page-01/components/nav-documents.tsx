"use client"

import type { NavItem } from "./data"
import { NavigationMenu, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

export function NavDocuments({ items }: { items: NavItem[] }) {
  return (
    <NavigationMenu.List>
      {items.map((item) => (
        <NavigationMenu.Item key={item.title}>
          <NavigationMenu.Link active={item.isActive} className={navigationMenuTriggerStyle()} href={item.url}>
            {item.icon && <item.icon />}
            <span>{item.title}</span>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      ))}
    </NavigationMenu.List>
  )
}
