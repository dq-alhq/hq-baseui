import { useState } from "react"
import { ToggleGroup } from "@/components/ui/toggle"

export default () => {
  const [variant, setVariant] = useState<"outline" | "default">("default")
  const [size, setSize] = useState<"default" | "sm" | "lg">("default")
  const [spacing, setSpacing] = useState<number>(2)
  return (
    <div className="flex flex-wrap items-center gap-2">
      <ToggleGroup
        onValueChange={(v) => setVariant(v[0] as "outline" | "default")}
        size={size}
        spacing={spacing}
        value={[variant]}
        variant={variant}
      >
        <ToggleGroup.Item aria-label="Toggle default" value="default">
          Default
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle outline" value="outline">
          Outline
        </ToggleGroup.Item>
      </ToggleGroup>
      <ToggleGroup
        onValueChange={(v) => setSize(v[0] as "default" | "sm" | "lg")}
        size={size}
        spacing={spacing}
        value={[size]}
        variant={variant}
      >
        <ToggleGroup.Item aria-label="Toggle small" value="sm">
          Small
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle default" value="default">
          Default
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle lg" value="lg">
          Large
        </ToggleGroup.Item>
      </ToggleGroup>
      <ToggleGroup
        onValueChange={(v) => setSpacing(Number(v[0]))}
        size={size}
        spacing={spacing}
        value={[`${spacing}`]}
        variant={variant}
      >
        <ToggleGroup.Item aria-label="Toggle 0" value={"0"}>
          0
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle 1" value={"1"}>
          1
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle 2" value={"2"}>
          2
        </ToggleGroup.Item>
      </ToggleGroup>
    </div>
  )
}
