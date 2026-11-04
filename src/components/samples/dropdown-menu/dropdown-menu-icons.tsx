"use client"

import { IconCreditCard, IconLogout, IconSettings, IconUser } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu } from "@/components/ui/dropdown-menu"

export default () => {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger render={<Button variant="outline" />}>Open</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>
          <IconUser />
          Profile
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <IconCreditCard />
          Billing
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <IconSettings />
          Settings
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item variant="destructive">
          <IconLogout />
          Log out
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
