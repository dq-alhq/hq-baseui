import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Sheet } from "@/components/ui/sheet"

export default () => {
  return (
    <Sheet>
      <Sheet.Trigger render={<Button variant="outline" />}>Open</Sheet.Trigger>
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Edit profile</Sheet.Title>
          <Sheet.Description>Make changes to your profile here. Click save when you&apos;re done.</Sheet.Description>
        </Sheet.Header>
        <Sheet.Body className="grid flex-1 auto-rows-min gap-6 px-4">
          <Field>
            <Field.Label>Name</Field.Label>
            <Input defaultValue="Pedro Duarte" />
          </Field>
          <Field>
            <Field.Label>Username</Field.Label>
            <Input defaultValue="@peduarte" />
          </Field>
        </Sheet.Body>
        <Sheet.Footer>
          <Button type="submit">Save changes</Button>
          <Sheet.Close render={<Button variant="outline" />}>Close</Sheet.Close>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  )
}
