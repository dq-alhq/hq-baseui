"use client"
import { IconArrowRight, IconArrowUp, IconSearch } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Field } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { AlertDialog } from "../ui/alert-dialog"

export function UIElements() {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-col gap-6">
        <ButtonGroup className="w-full *:grow">
          <Button>
            Button
            <IconArrowRight />
          </Button>
          <Button variant="secondary">Secondary</Button>
        </ButtonGroup>
        <Field.Group>
          <Field>
            <InputGroup>
              <InputGroupInput placeholder="Name" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>
                  <IconSearch />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field className="flex-1">
            <Textarea className="resize-none" placeholder="Message" />
          </Field>
        </Field.Group>
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <Badge>Badge</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge className="4xl:flex hidden" variant="outline">
              Outline
            </Badge>
          </div>
          <RadioGroup aria-label="Fruit preference" className="ml-auto flex w-fit gap-3" defaultValue="apple">
            <RadioGroupItem aria-label="Apple" value="apple" />
            <RadioGroupItem aria-label="Banana" value="banana" />
          </RadioGroup>
          <div className="flex gap-3">
            <Checkbox aria-label="Enable email alerts" defaultChecked />
            <Checkbox aria-label="Enable push alerts" className="4xl:flex hidden" />
          </div>
          <Switch aria-label="Enable compact notifications" className="4xl:hidden flex" defaultChecked />
        </div>
        <div className="flex items-center gap-4">
          <AlertDialog>
            <AlertDialog.Trigger render={<Button variant="outline" />}>
              <span className="style-sera:md:hidden hidden md:flex">Alert Dialog</span>
              <span className="style-sera:md:flex flex md:hidden">Dialog</span>
            </AlertDialog.Trigger>
            <AlertDialog.Content className="theme-neutral" size="sm">
              <AlertDialog.Header>
                <AlertDialog.Title>Allow accessory to connect?</AlertDialog.Title>
                <AlertDialog.Description>
                  Do you want to allow the USB accessory to connect to this device and your data?
                </AlertDialog.Description>
              </AlertDialog.Header>
              <AlertDialog.Footer>
                <AlertDialog.Cancel>Don&apos;t allow</AlertDialog.Cancel>
                <AlertDialog.Action>Allow</AlertDialog.Action>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
          <ButtonGroup className="ml-auto">
            <Button variant="outline">
              <span className="style-sera:hidden">Button Group</span>
              <span className="style-sera:block hidden">Group</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger render={<Button aria-label="Open quick actions" size="icon" variant="outline" />}>
                <IconArrowUp />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40" side="top">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Mute Conversation</DropdownMenuItem>
                  <DropdownMenuItem>Mark as Read</DropdownMenuItem>
                  <DropdownMenuItem>Block User</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem variant="destructive">Delete Conversation</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </ButtonGroup>
          <Switch aria-label="Enable advanced setting" className="4xl:flex hidden" defaultChecked />
        </div>
      </CardContent>
    </Card>
  )
}
