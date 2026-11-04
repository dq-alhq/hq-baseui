import { useState } from "react"
import { Field } from "@/components/ui/field"
import { Slider } from "@/components/ui/slider"
import { ToggleGroup } from "@/components/ui/toggle"

export default () => {
  const [spacing, setSpacing] = useState<number>(1)

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Field>
        <Slider max={4} min={0} onValueChange={(v) => setSpacing(v as number)} value={spacing}>
          <Slider.Label>Spacing</Slider.Label>
          <Slider.Value />
        </Slider>
      </Field>
      <ToggleGroup defaultValue={["top"]} size="sm" spacing={spacing} variant="outline">
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
