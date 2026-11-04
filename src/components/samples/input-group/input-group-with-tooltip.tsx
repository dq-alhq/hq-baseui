"use client"

import { IconChevronDown, IconInfoCircle, IconStar } from "@tabler/icons-react"
import { useState } from "react"
import { ButtonGroup } from "@/components/ui/button-group"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { Field } from "@/components/ui/field"
import { InputGroup } from "@/components/ui/input-group"
import { Popover } from "@/components/ui/popover"
import { toast } from "@/components/ui/toast"
import { Tooltip } from "@/components/ui/tooltip"

export default () => {
  const [country, setCountry] = useState("+62")
  return (
    <Field.Set>
      <Field>
        <Field.Label htmlFor="input-tooltip-20">Tooltip</Field.Label>
        <InputGroup>
          <InputGroup.Input id="input-tooltip-20" />
          <InputGroup.Addon align="inline-end">
            <Tooltip>
              <Tooltip.Trigger render={<InputGroup.Button className="rounded-full" size="icon-xs" />}>
                <IconInfoCircle />
              </Tooltip.Trigger>
              <Tooltip.Content>This is content in a tooltip.</Tooltip.Content>
            </Tooltip>
          </InputGroup.Addon>
        </InputGroup>
        <Field.Description>This is a description of the input group.</Field.Description>
      </Field>
      <Field>
        <Field.Label htmlFor="input-dropdown-21">Dropdown</Field.Label>
        <InputGroup>
          <InputGroup.Input id="input-dropdown-21" />
          <InputGroup.Addon>
            <DropdownMenu>
              <DropdownMenu.Trigger render={<InputGroup.Button className="text-muted-foreground tabular-nums" />}>
                {country} <IconChevronDown />
              </DropdownMenu.Trigger>
              <DropdownMenu.Content align="start" alignOffset={-8} className="min-w-16" sideOffset={10}>
                <DropdownMenu.Item onClick={() => setCountry("+1")}>+1</DropdownMenu.Item>
                <DropdownMenu.Item onClick={() => setCountry("+44")}>+44</DropdownMenu.Item>
                <DropdownMenu.Item onClick={() => setCountry("+46")}>+46</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </InputGroup.Addon>
        </InputGroup>
        <Field.Description>This is a description of the input group.</Field.Description>
      </Field>
      <Field>
        <Field.Label htmlFor="input-secure-19">Popover</Field.Label>
        <InputGroup>
          <Popover>
            <Popover.Trigger nativeButton={false} render={<InputGroup.Addon />}>
              <InputGroup.Button size="icon-xs" variant="secondary">
                <IconInfoCircle />
              </InputGroup.Button>
            </Popover.Trigger>
            <Popover.Content align="start">
              <Popover.Header>
                <Popover.Title>Your connection is not secure.</Popover.Title>
                <Popover.Description>You should not enter any sensitive information on this site.</Popover.Description>
              </Popover.Header>
            </Popover.Content>
          </Popover>
          <InputGroup.Addon className="text-muted-foreground pl-1">https://</InputGroup.Addon>
          <InputGroup.Input id="input-secure-19" />
          <InputGroup.Addon align="inline-end">
            <InputGroup.Button onClick={() => toast.add({ description: "Added to favorites" })} size="icon-xs">
              <IconStar />
            </InputGroup.Button>
          </InputGroup.Addon>
        </InputGroup>
        <Field.Description>This is a description of the input group.</Field.Description>
      </Field>
      <Field>
        <Field.Label htmlFor="url">Button Group</Field.Label>
        <ButtonGroup>
          <ButtonGroup.Text>https://</ButtonGroup.Text>
          <InputGroup>
            <InputGroup.Input id="url" />
            <InputGroup.Addon align="inline-end">
              <IconInfoCircle />
            </InputGroup.Addon>
          </InputGroup>
          <ButtonGroup.Text>.com</ButtonGroup.Text>
        </ButtonGroup>
        <Field.Description>This is a description of the input group.</Field.Description>
      </Field>
    </Field.Set>
  )
}
