"use client"
import { IconLayoutSidebar } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Popover } from "@/components/ui/popover"
import { Select } from "@/components/ui/select"
import { Tooltip } from "@/components/ui/tooltip"

export interface Values {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}

interface Props {
  value: Values
  onChange: (value: Values) => void
}

export const SidebarControl = ({ value, onChange }: Props) => {
  return (
    <Popover>
      <Tooltip>
        <Popover.Trigger
          render={
            <Button className="fixed top-28 right-0 z-50 rounded-r-none" size="icon" variant="destructive">
              <IconLayoutSidebar />
            </Button>
          }
        />
        <Tooltip.Content side="top">For Development only, Remove this on Production</Tooltip.Content>
      </Tooltip>
      <Popover.Content side="top">
        <Popover.Header>
          <Popover.Title>Sidebar Control</Popover.Title>
          <Popover.Description>Customize your sidebar</Popover.Description>
        </Popover.Header>
        <Field>
          <Field.Label>Variant</Field.Label>
          <Select
            onValueChange={(e) => onChange({ ...value, variant: String(e) as Values["variant"] })}
            value={value.variant}
          >
            <Select.Trigger>
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="sidebar">Sidebar</Select.Item>
              <Select.Item value="floating">Floating</Select.Item>
              <Select.Item value="inset">Inset</Select.Item>
            </Select.Content>
          </Select>
        </Field>
        <Field>
          <Field.Label>Variant</Field.Label>
          <Select
            onValueChange={(e) => onChange({ ...value, collapsible: String(e) as Values["collapsible"] })}
            value={value.collapsible}
          >
            <Select.Trigger>
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="icon">Icon</Select.Item>
              <Select.Item value="offcanvas">Offcanvas</Select.Item>
              <Select.Item value="none">None</Select.Item>
            </Select.Content>
          </Select>
        </Field>
      </Popover.Content>
    </Popover>
  )
}
