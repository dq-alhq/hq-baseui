import { IconDeviceFloppy, IconFile, IconFolder, IconHelp, IconSettings, IconTrash } from "@tabler/icons-react"
import { Menubar } from "@/components/ui/menubar"

export default () => {
  return (
    <Menubar className="w-72">
      <Menubar.Menu>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>
            <IconFile />
            New File <Menubar.Shortcut>⌘N</Menubar.Shortcut>
          </Menubar.Item>
          <Menubar.Item>
            <IconFolder />
            Open Folder
          </Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>
            <IconDeviceFloppy />
            Save <Menubar.Shortcut>⌘S</Menubar.Shortcut>
          </Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>More</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Group>
            <Menubar.Item>
              <IconSettings />
              Settings
            </Menubar.Item>
            <Menubar.Item>
              <IconHelp />
              Help
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item variant="destructive">
              <IconTrash />
              Delete
            </Menubar.Item>
          </Menubar.Group>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar>
  )
}
