"use client"

import { IconBell, IconMail, IconMessage } from "@tabler/icons-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu } from "@/components/ui/dropdown-menu"

export default () => {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true
  })

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger render={<Button variant="outline" />}>Notifications</DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-48">
        <DropdownMenu.Group>
          <DropdownMenu.Label>Notification Preferences</DropdownMenu.Label>
          <DropdownMenu.CheckboxItem
            checked={notifications.email}
            onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked === true })}
          >
            <IconMail />
            Email notifications
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            checked={notifications.sms}
            onCheckedChange={(checked) => setNotifications({ ...notifications, sms: checked === true })}
          >
            <IconMessage />
            SMS notifications
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            checked={notifications.push}
            onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked === true })}
          >
            <IconBell />
            Push notifications
          </DropdownMenu.CheckboxItem>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
