import { ToggleGroup } from "@/components/ui/toggle"

export default () => {
  return (
    <ToggleGroup defaultValue={["all"]} variant="outline">
      <ToggleGroup.Item aria-label="Toggle all" value="all">
        All
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle missed" value="missed">
        Missed
      </ToggleGroup.Item>
    </ToggleGroup>
  )
}
