"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu } from "@/components/ui/dropdown-menu"

export default () => {
  const [position, setPosition] = useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger render={<Button variant="outline" />}>Open</DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-32">
        <DropdownMenu.Group>
          <DropdownMenu.Label>Panel Position</DropdownMenu.Label>
          <DropdownMenu.RadioGroup onValueChange={setPosition} value={position}>
            <DropdownMenu.RadioItem value="top">Top</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="bottom">Bottom</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="right">Right</DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
