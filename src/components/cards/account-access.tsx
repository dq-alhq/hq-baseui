import { IconAlertCircle, IconArrowRight, IconLock } from "@tabler/icons-react"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { Field } from "../ui/field"
import { Input } from "../ui/input"
import { Item } from "../ui/item"

export function AccountAccess() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Account Access</Card.Title>
        <Card.Description>Update your credentials or re-authenticate.</Card.Description>
      </Card.Header>
      <Card.Content>
        <Field.Group>
          <Field>
            <Field.Label>Email Address</Field.Label>
            <Input placeholder="artist@studio.inc" type="email" />
          </Field>
          <Field>
            <div className="flex w-full items-center justify-between">
              <Field.Label>Current Password</Field.Label>
              <a className="text-muted-foreground hover:text-foreground text-sm font-medium" href="#">
                Forgot?
              </a>
            </div>
            <Input placeholder="••••••••••••••••••••••••" type="password" />
          </Field>
        </Field.Group>
      </Card.Content>
      <Card.Footer className="flex-col gap-4">
        <Button className="w-full">
          <IconLock />
          Update Security
        </Button>
        <Item render={<a href="#" />} variant="muted">
          <Item.Media variant="icon">
            <IconAlertCircle className="text-destructive" />
          </Item.Media>
          <Item.Content>
            <Item.Title>Danger Zone</Item.Title>
            <Item.Description className="line-clamp-1">Archive account and remove catalog</Item.Description>
          </Item.Content>
          <IconArrowRight />
        </Item>
      </Card.Footer>
    </Card>
  )
}
