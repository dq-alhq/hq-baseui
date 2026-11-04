"use client"

import { IconChevronDown, IconDots } from "@tabler/icons-react"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { InputGroup } from "@/components/ui/input-group"

export default () => {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroup.Input placeholder="Enter file name" />
        <InputGroup.Addon align="inline-end">
          <DropdownMenu>
            <DropdownMenu.Trigger render={<InputGroup.Button aria-label="More" size="icon-xs" variant="ghost" />}>
              <IconDots />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="end" alignOffset={-4} sideOffset={8}>
              <DropdownMenu.Group>
                <DropdownMenu.Item>Settings</DropdownMenu.Item>
                <DropdownMenu.Item>Copy path</DropdownMenu.Item>
                <DropdownMenu.Item>Open location</DropdownMenu.Item>
              </DropdownMenu.Group>
            </DropdownMenu.Content>
          </DropdownMenu>
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup>
        <InputGroup.Input placeholder="Enter search query" />
        <InputGroup.Addon align="inline-end">
          <DropdownMenu>
            <DropdownMenu.Trigger render={<InputGroup.Button className="pr-1.5! text-xs" variant="ghost" />}>
              Search In... <IconChevronDown className="size-3" />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="end" alignOffset={-4} sideOffset={8}>
              <DropdownMenu.Group>
                <DropdownMenu.Item>Documentation</DropdownMenu.Item>
                <DropdownMenu.Item>Blog Posts</DropdownMenu.Item>
                <DropdownMenu.Item>Changelog</DropdownMenu.Item>
              </DropdownMenu.Group>
            </DropdownMenu.Content>
          </DropdownMenu>
        </InputGroup.Addon>
      </InputGroup>
    </div>
  )
}
