import { Button } from "@/components/ui/button"
import { Dialog } from "@/components/ui/dialog"
import { Field, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default () => {
  return (
    <Dialog>
      <form>
        <Dialog.Trigger render={<Button variant="outline" />}>Open Dialog</Dialog.Trigger>
        <Dialog.Content className="sm:max-w-sm">
          <Dialog.Header>
            <Dialog.Title>Edit profile</Dialog.Title>
            <Dialog.Description>
              Make changes to your profile here. Click save when you&apos;re done.
            </Dialog.Description>
          </Dialog.Header>
          <Field.Set>
            <Field>
              <Label>Name</Label>
              <Input defaultValue="Pedro Duarte" id="name-1" name="name" />
            </Field>
            <Field>
              <Label>Username</Label>
              <Input defaultValue="@peduarte" id="username-1" name="username" />
            </Field>
          </Field.Set>
          <Dialog.Footer>
            <Dialog.Close render={<Button variant="outline" />}>Cancel</Dialog.Close>
            <Button type="submit">Save changes</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </form>
    </Dialog>
  )
}
