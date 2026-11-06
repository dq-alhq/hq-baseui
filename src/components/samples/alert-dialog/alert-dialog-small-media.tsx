import { IconBluetooth } from "@tabler/icons-react";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default () => {
  return (
    <AlertDialog>
      <AlertDialog.Trigger render={<Button variant="outline">Show Dialog</Button>} />
      <AlertDialog.Content size="sm">
        <AlertDialog.Header>
          <AlertDialog.Media>
            <IconBluetooth />
          </AlertDialog.Media>
          <AlertDialog.Title>Allow accessory to connect?</AlertDialog.Title>
          <AlertDialog.Description>
            Do you want to allow the USB accessory to connect to this device?
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Don&apos;t allow</AlertDialog.Cancel>
          <AlertDialog.Action>Allow</AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};
