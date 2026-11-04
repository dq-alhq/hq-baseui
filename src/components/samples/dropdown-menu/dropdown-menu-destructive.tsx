"use client"

import { IconPencil, IconShare, IconTrash } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu } from "@/components/ui/dropdown-menu"

export default () => {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger render={<Button variant="outline" />}>Actions</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <IconPencil />
            Edit
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <IconShare />
            Share
          </DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Item variant="destructive">
            <IconTrash />
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
