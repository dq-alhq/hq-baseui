"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu } from "@/components/ui/dropdown-menu"

export default () => {
  const [showStatusBar, setShowStatusBar] = useState(true)
  const [showActivityBar, setShowActivityBar] = useState(false)
  const [showPanel, setShowPanel] = useState(false)

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger render={<Button variant="outline" />}>Open</DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-40">
        <DropdownMenu.Group>
          <DropdownMenu.Label>Appearance</DropdownMenu.Label>
          <DropdownMenu.CheckboxItem checked={showStatusBar ?? false} onCheckedChange={setShowStatusBar}>
            Status Bar
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem checked={showActivityBar} disabled onCheckedChange={setShowActivityBar}>
            Activity Bar
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
            Panel
          </DropdownMenu.CheckboxItem>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
