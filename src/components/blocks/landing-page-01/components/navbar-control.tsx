"use client"
import { IconLayoutSidebar } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Popover } from "@/components/ui/popover"
import { Select } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tooltip } from "@/components/ui/tooltip"

export interface Values {
  sticky?: boolean
  fluid?: boolean
  container?: boolean
  variant?: "navbar" | "floating" | "inset"
}

interface Props {
  value: Values
  onChange: (value: Values) => void
}

export const NavbarControl = ({ value, onChange }: Props) => {
  return (
    <Popover>
      <Tooltip>
        <Tooltip.Trigger
          render={
            <Popover.Trigger
              render={
                <Button className="fixed top-28 right-0 z-50 rounded-r-none" size="icon" variant="destructive">
                  <IconLayoutSidebar />
                </Button>
              }
            />
          }
        />
        <Tooltip.Content>For Development only, Remove this on Production</Tooltip.Content>
      </Tooltip>
      <Popover.Content>
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
              <Select.Group>
                <Select.Item value="navbar">Navbar</Select.Item>
                <Select.Item value="floating">Floating</Select.Item>
                <Select.Item value="inset">Inset</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select>
        </Field>
        <Field disabled={value.variant === "inset"}>
          <Switch checked={value.sticky} onCheckedChange={(e) => onChange({ ...value, sticky: e })} />
          <Field.Label>Sticky</Field.Label>
        </Field>
        <Field>
          <Switch checked={value.fluid} onCheckedChange={(e) => onChange({ ...value, fluid: e })}>
            Fluid Navbar
          </Switch>
          <Field.Label>Fluid Navbar</Field.Label>
        </Field>
        <Field>
          <Switch checked={value.container} onCheckedChange={(e) => onChange({ ...value, container: e })}>
            Container
          </Switch>
          <Field.Label>Container</Field.Label>
        </Field>
      </Popover.Content>
    </Popover>
  )
}
