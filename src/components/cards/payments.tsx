import { IconArrowRight, IconCalendar, IconDots, IconRefresh, IconSettings } from "@tabler/icons-react"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { Item } from "@/components/ui/item"

export function Payments() {
  return (
    <Card>
      <Card.Header className="flex flex-col gap-3">
        <Breadcrumb>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <DropdownMenu>
                <DropdownMenu.Trigger render={<Button aria-label="Account options" size="icon-sm" variant="ghost" />}>
                  <IconDots />
                  <span className="sr-only">Account options</span>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content align="start">
                  <DropdownMenu.Group>
                    <DropdownMenu.Item>Profile</DropdownMenu.Item>
                    <DropdownMenu.Item>Statements</DropdownMenu.Item>
                    <DropdownMenu.Item>Documents</DropdownMenu.Item>
                  </DropdownMenu.Group>
                </DropdownMenu.Content>
              </DropdownMenu>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Page>Payments</Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb>
      </Card.Header>
      <Card.Content>
        <Item.Group>
          <div className="w-full" role="listitem">
            <Item render={<a href="#" />} variant="muted">
              <Item.Media variant="icon">
                <IconSettings />
              </Item.Media>
              <Item.Content>
                <Item.Title>Change transfer limit</Item.Title>
                <Item.Description>Adjust how much you can send from your balance.</Item.Description>
              </Item.Content>
              <IconArrowRight className="text-muted-foreground size-4 shrink-0" />
            </Item>
          </div>
          <div className="w-full" role="listitem">
            <Item render={<a href="#" />} variant="muted">
              <Item.Media variant="icon">
                <IconCalendar />
              </Item.Media>
              <Item.Content>
                <Item.Title>Scheduled transfers</Item.Title>
                <Item.Description>Set up a transfer to send at a later date.</Item.Description>
              </Item.Content>
              <IconArrowRight className="text-muted-foreground size-4 shrink-0" />
            </Item>
          </div>
          <div className="w-full" role="listitem">
            <Item render={<a href="#" />} variant="muted">
              <Item.Media variant="icon">
                <IconRefresh />
              </Item.Media>
              <Item.Content>
                <Item.Title>Recurring card payments</Item.Title>
                <Item.Description>Manage your repeated card transactions.</Item.Description>
              </Item.Content>
              <IconArrowRight />
            </Item>
          </div>
        </Item.Group>
      </Card.Content>
    </Card>
  )
}
