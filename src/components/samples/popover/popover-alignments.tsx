import { Button } from "@/components/ui/button"
import { Popover } from "@/components/ui/popover"

export default () => {
  return (
    <div className="flex gap-6">
      <Popover>
        <Popover.Trigger render={<Button size="sm" variant="outline" />}>Start</Popover.Trigger>
        <Popover.Content align="start" className="w-40">
          Aligned to start
        </Popover.Content>
      </Popover>
      <Popover>
        <Popover.Trigger render={<Button size="sm" variant="outline" />}>Center</Popover.Trigger>
        <Popover.Content align="center" className="w-40">
          Aligned to center
        </Popover.Content>
      </Popover>
      <Popover>
        <Popover.Trigger render={<Button size="sm" variant="outline" />}>End</Popover.Trigger>
        <Popover.Content align="end" className="w-40">
          Aligned to end
        </Popover.Content>
      </Popover>
    </div>
  )
}
