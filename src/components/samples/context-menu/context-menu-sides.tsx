import { ContextMenu } from "@/components/ui/context-menu"

export default () => {
  return (
    <div className="grid w-full max-w-sm grid-cols-2 gap-4">
      <ContextMenu>
        <ContextMenu.Trigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
          <span className="hidden pointer-fine:inline-block">Right click (top)</span>
          <span className="hidden pointer-coarse:inline-block">Long press (top)</span>
        </ContextMenu.Trigger>
        <ContextMenu.Content side="top">
          <ContextMenu.Group>
            <ContextMenu.Item>Back</ContextMenu.Item>
            <ContextMenu.Item>Forward</ContextMenu.Item>
            <ContextMenu.Item>Reload</ContextMenu.Item>
          </ContextMenu.Group>
        </ContextMenu.Content>
      </ContextMenu>
      <ContextMenu>
        <ContextMenu.Trigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
          <span className="hidden pointer-fine:inline-block">Right click (right)</span>
          <span className="hidden pointer-coarse:inline-block">Long press (right)</span>
        </ContextMenu.Trigger>
        <ContextMenu.Content side="right">
          <ContextMenu.Group>
            <ContextMenu.Item>Back</ContextMenu.Item>
            <ContextMenu.Item>Forward</ContextMenu.Item>
            <ContextMenu.Item>Reload</ContextMenu.Item>
          </ContextMenu.Group>
        </ContextMenu.Content>
      </ContextMenu>
      <ContextMenu>
        <ContextMenu.Trigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
          <span className="hidden pointer-fine:inline-block">Right click (bottom)</span>
          <span className="hidden pointer-coarse:inline-block">Long press (bottom)</span>
        </ContextMenu.Trigger>
        <ContextMenu.Content side="bottom">
          <ContextMenu.Group>
            <ContextMenu.Item>Back</ContextMenu.Item>
            <ContextMenu.Item>Forward</ContextMenu.Item>
            <ContextMenu.Item>Reload</ContextMenu.Item>
          </ContextMenu.Group>
        </ContextMenu.Content>
      </ContextMenu>
      <ContextMenu>
        <ContextMenu.Trigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
          <span className="hidden pointer-fine:inline-block">Right click (left)</span>
          <span className="hidden pointer-coarse:inline-block">Long press (left)</span>
        </ContextMenu.Trigger>
        <ContextMenu.Content side="left">
          <ContextMenu.Group>
            <ContextMenu.Item>Back</ContextMenu.Item>
            <ContextMenu.Item>Forward</ContextMenu.Item>
            <ContextMenu.Item>Reload</ContextMenu.Item>
          </ContextMenu.Group>
        </ContextMenu.Content>
      </ContextMenu>
    </div>
  )
}
