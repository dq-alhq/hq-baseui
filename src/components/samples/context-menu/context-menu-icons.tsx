import { IconClipboard, IconCopy, IconScissors, IconTrash } from "@tabler/icons-react"
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
            <IconCopy />
            Copy
          </ContextMenu.Item>
          <ContextMenu.Item>
            <IconScissors />
            Cut
          </ContextMenu.Item>
          <ContextMenu.Item>
            <IconClipboard />
            Paste
          </ContextMenu.Item>
        </ContextMenu.Group>
        <ContextMenu.Separator />
        <ContextMenu.Group>
          <ContextMenu.Item variant="destructive">
            <IconTrash />
            Delete
          </ContextMenu.Item>
        </ContextMenu.Group>
      </ContextMenu.Content>
    </ContextMenu>
  )
}
