"use client"

import { IconBadge, IconBell, IconCreditCard, IconLogout } from "@tabler/icons-react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu } from "@/components/ui/dropdown-menu"

export default () => {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger render={<Button className="rounded-full" size="icon" variant="ghost" />}>
        <Avatar>
          <Avatar.Image alt="shadcn" src="https://github.com/shadcn.png" />
          <Avatar.Fallback>LR</Avatar.Fallback>
        </Avatar>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <IconBadge />
            Account
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <IconCreditCard />
            Billing
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <IconBell />
            Notifications
          </DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
          <IconLogout />
          Sign Out
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
