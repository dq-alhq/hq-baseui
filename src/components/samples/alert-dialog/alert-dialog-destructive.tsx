import { IconTrash } from "@tabler/icons-react"
import { AlertDialog } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export default () => {
  return (
    <AlertDialog>
      <AlertDialog.Trigger render={<Button variant="destructive">Delete Chat</Button>} />
      <AlertDialog.Content size="sm">
        <AlertDialog.Header>
          <AlertDialog.Media className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <IconTrash />
          </AlertDialog.Media>
          <AlertDialog.Title>Delete chat?</AlertDialog.Title>
          <AlertDialog.Description>
            This will permanently delete this chat conversation. View <a href="#">Settings</a> delete any memories saved
            during this chat.
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel variant="outline">Cancel</AlertDialog.Cancel>
          <AlertDialog.Action variant="destructive">Delete</AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  )
}
