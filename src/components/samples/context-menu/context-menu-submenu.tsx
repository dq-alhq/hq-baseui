import { ContextMenu } from "@/components/ui/context-menu"

export default () => {
  return (
    <ContextMenu>
      <ContextMenu.Trigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
        <span className="hidden pointer-fine:inline-block">Right click here</span>
        <span className="hidden pointer-coarse:inline-block">Long press here</span>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Group>
          <ContextMenu.Item>
            Copy
            <ContextMenu.Shortcut>⌘C</ContextMenu.Shortcut>
          </ContextMenu.Item>
          <ContextMenu.Item>
            Cut
            <ContextMenu.Shortcut>⌘X</ContextMenu.Shortcut>
          </ContextMenu.Item>
        </ContextMenu.Group>
        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>More Tools</ContextMenu.SubTrigger>
          <ContextMenu.SubContent>
            <ContextMenu.Group>
              <ContextMenu.Item>Save Page...</ContextMenu.Item>
              <ContextMenu.Item>Create Shortcut...</ContextMenu.Item>
              <ContextMenu.Item>Name Window...</ContextMenu.Item>
            </ContextMenu.Group>
            <ContextMenu.Separator />
            <ContextMenu.Group>
              <ContextMenu.Item>Developer Tools</ContextMenu.Item>
            </ContextMenu.Group>
            <ContextMenu.Separator />
            <ContextMenu.Group>
              <ContextMenu.Item variant="destructive">Delete</ContextMenu.Item>
            </ContextMenu.Group>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>
      </ContextMenu.Content>
    </ContextMenu>
  )
}
