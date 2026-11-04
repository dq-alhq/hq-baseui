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
          <ContextMenu.Item>Back</ContextMenu.Item>
          <ContextMenu.Item disabled>Forward</ContextMenu.Item>
          <ContextMenu.Item>Reload</ContextMenu.Item>
        </ContextMenu.Group>
      </ContextMenu.Content>
    </ContextMenu>
  )
}
