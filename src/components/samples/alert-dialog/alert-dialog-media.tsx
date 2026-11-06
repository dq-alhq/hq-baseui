import { IconCircleDashedPlus } from "@tabler/icons-react";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default () => {
  return (
    <AlertDialog>
      <AlertDialog.Trigger render={<Button variant="outline">Share Project</Button>} />
      <AlertDialog.Content>
        <AlertDialog.Header>
          <AlertDialog.Media>
            <IconCircleDashedPlus />
          </AlertDialog.Media>
          <AlertDialog.Title>Share this project?</AlertDialog.Title>
          <AlertDialog.Description>
            Anyone with the link will be able to view and edit this project.
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action>Share</AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};
