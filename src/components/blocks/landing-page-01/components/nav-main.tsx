"use client"

import type { NavItem } from "./data"
import { NavigationMenu, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

export function NavMain({ items }: { items: NavItem[] }) {
  return (
    <NavigationMenu.List>
      {items.map((item) =>
        item?.items ? (
          <NavigationMenu.Item key={item.title}>
            <NavigationMenu.Trigger>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <ul className="grid w-50">
                {item.items?.map((subItem) => (
                  <li key={subItem.title}>
                    <NavigationMenu.Link className="flex-row items-center gap-2" href={subItem.url}>
                      {subItem.title}
                    </NavigationMenu.Link>
                  </li>
                ))}
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        ) : (
          <NavigationMenu.Item key={item.title}>
            <NavigationMenu.Link active className={navigationMenuTriggerStyle()} href={item.url}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        )
      )}
    </NavigationMenu.List>
  )
}
