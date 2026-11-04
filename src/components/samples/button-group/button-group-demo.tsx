"use client"

import {
  IconArchive,
  IconArrowLeft,
  IconCalendarPlus,
  IconClock,
  IconDots,
  IconListFilled,
  IconMailCheck,
  IconTag,
  IconTrash
} from "@tabler/icons-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { DropdownMenu } from "@/components/ui/dropdown-menu"

export default () => {
  const [label, setLabel] = useState("personal")

  return (
    <ButtonGroup>
      <ButtonGroup className="hidden sm:flex">
        <Button aria-label="Go Back" size="icon" variant="outline">
          <IconArrowLeft />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Snooze</Button>
        <DropdownMenu>
          <DropdownMenu.Trigger render={<Button aria-label="More Options" size="icon" variant="outline" />}>
            <IconDots />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end" className="w-40">
            <DropdownMenu.Group>
              <DropdownMenu.Item>
                <IconMailCheck />
                Mark as Read
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <IconArchive />
                Archive
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Separator />
            <DropdownMenu.Group>
              <DropdownMenu.Item>
                <IconClock />
                Snooze
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <IconCalendarPlus />
                Add to Calendar
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <IconListFilled />
                Add to List
              </DropdownMenu.Item>
              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>
                  <IconTag />
                  Label As...
                </DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.RadioGroup onValueChange={setLabel} value={label}>
                    <DropdownMenu.RadioItem value="personal">Personal</DropdownMenu.RadioItem>
                    <DropdownMenu.RadioItem value="work">Work</DropdownMenu.RadioItem>
                    <DropdownMenu.RadioItem value="other">Other</DropdownMenu.RadioItem>
                  </DropdownMenu.RadioGroup>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>
            </DropdownMenu.Group>
            <DropdownMenu.Separator />
            <DropdownMenu.Group>
              <DropdownMenu.Item variant="destructive">
                <IconTrash />
                Trash
              </DropdownMenu.Item>
            </DropdownMenu.Group>
          </DropdownMenu.Content>
        </DropdownMenu>
      </ButtonGroup>
    </ButtonGroup>
  )
}
