import { IconCircleDashedPlus } from "@tabler/icons-react";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button onClick={() => setOpen(true)} size="sm" variant="outline">
        Open
      </Button>
      <span className="text-muted-foreground text-sm">Open: {open ? "yes" : "no"}</span>
      <AlertDialog open={open} onOpenChange={setOpen}>
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
    </div>
  );
};
