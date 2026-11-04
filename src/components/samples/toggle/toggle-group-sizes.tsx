import { ToggleGroup } from "@/components/ui/toggle"

export default () => {
  return (
    <div className="flex flex-col gap-4">
      <ToggleGroup defaultValue={["top"]} size="sm" variant="outline">
        <ToggleGroup.Item aria-label="Toggle top" value="top">
          Top
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle bottom" value="bottom">
          Bottom
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle left" value="left">
          Left
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle right" value="right">
          Right
        </ToggleGroup.Item>
      </ToggleGroup>
      <ToggleGroup defaultValue={["top"]} variant="outline">
        <ToggleGroup.Item aria-label="Toggle top" value="top">
          Top
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle bottom" value="bottom">
          Bottom
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle left" value="left">
          Left
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle right" value="right">
          Right
        </ToggleGroup.Item>
      </ToggleGroup>
    </div>
  )
}
