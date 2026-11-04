"use client"

import {
  IconAlertTriangle,
  IconCheck,
  IconChevronDown,
  IconCopy,
  IconShare,
  IconTrash,
  IconUserX,
  IconVolumeOff
} from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { DropdownMenu } from "@/components/ui/dropdown-menu"

export default () => {
  return (
    <ButtonGroup>
      <Button variant="outline">Follow</Button>
      <DropdownMenu>
        <DropdownMenu.Trigger render={<Button className="pl-2!" variant="outline" />}>
          <IconChevronDown />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end" className="w-44">
          <DropdownMenu.Group>
            <DropdownMenu.Item>
              <IconVolumeOff />
              Mute Conversation
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <IconCheck />
              Mark as Read
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <IconAlertTriangle />
              Report Conversation
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <IconUserX />
              Block User
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <IconShare />
              Share Conversation
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <IconCopy />
              Copy Conversation
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            <DropdownMenu.Item variant="destructive">
              <IconTrash />
              Delete Conversation
            </DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu>
    </ButtonGroup>
  )
}
