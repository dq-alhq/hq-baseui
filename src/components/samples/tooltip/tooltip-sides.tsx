import { Button } from "@/components/ui/button"
import { Tooltip } from "@/components/ui/tooltip"

export default () => {
  return (
    <div className="flex flex-wrap gap-2">
      {(["left", "top", "bottom", "right"] as const).map((side) => (
        <Tooltip key={side}>
          <Tooltip.Trigger render={<Button className="w-fit capitalize" variant="outline" />}>{side}</Tooltip.Trigger>
          <Tooltip.Content side={side}>
            <p>Add to library</p>
          </Tooltip.Content>
        </Tooltip>
      ))}
    </div>
  )
}
