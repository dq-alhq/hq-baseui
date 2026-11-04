import { Button } from "@/components/ui/button"
import { Dialog } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default () => {
  return (
    <Dialog>
      <Dialog.Trigger render={<Button variant="outline" />}>Share</Dialog.Trigger>
      <Dialog.Content className="sm:max-w-md">
        <Dialog.Header>
          <Dialog.Title>Share link</Dialog.Title>
          <Dialog.Description>Anyone who has this link will be able to view this.</Dialog.Description>
        </Dialog.Header>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label className="sr-only" htmlFor="link">
              Link
            </Label>
            <Input defaultValue="https://ui.shadcn.com/docs/installation" id="link" readOnly />
          </div>
        </div>
        <Dialog.Footer className="sm:justify-start">
          <Dialog.Close render={<Button type="button" />}>Close</Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  )
}
