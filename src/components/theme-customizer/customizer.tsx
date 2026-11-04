"use client"

import type { ThemeStyleProps } from "@/types/themes"
import { useCallback, useRef, useState } from "react"
import { Accordion } from "@/components/ui/accordion"
import { formatColor } from "@/lib/themes/color-formatter"
import { useTheme } from "@/stores/theme-store"
import { ColorPicker, ColorPickerContent, ColorPickerSwatch, ColorPickerTrigger } from "../reui/color-picker"

type ColorSwatchProps = {
  label: string
  value: string
  setValue: (value: string) => void
}

export const ColorSwatch = ({ label, value, setValue }: ColorSwatchProps) => {
  const [color, setColor] = useState<string | null>(value)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const updateColor = (v: string | null) => {
    setColor(v)
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
    debounceRef.current = setTimeout(() => {
      if (v) setValue(formatColor(v, "oklch"))
    }, 1000)
  }

  return (
    <ColorPicker format="oklch" onValueChange={updateColor} value={color}>
      <ColorPickerTrigger
        aria-label="Custom color"
        className="flex items-center justify-start gap-2"
        size="sm"
        variant={"ghost"}
      >
        <ColorPickerSwatch shape="square" />
        {label}
      </ColorPickerTrigger>
      <ColorPickerContent align="end" />
    </ColorPicker>
  )
}

const Customizer = () => {
  const { theme, setVar, preset } = useTheme()
  const currentPreset = preset[theme]

  const updateColor = useCallback(
    (key: keyof ThemeStyleProps, value: string) => {
      if (!preset) return
      setVar({ key, value, theme })
    },
    [preset, setVar, theme]
  )

  return (
    <div className="space-y-6">
      <Accordion className="w-full" multiple>
        {/* Base Colors */}
        <Accordion.Item id="base">
          <Accordion.Trigger>Base Colors</Accordion.Trigger>
          <Accordion.Content className="grid grid-cols-2">
            <ColorSwatch
              label="Background"
              setValue={(value) => updateColor("background", value)}
              value={currentPreset?.background || ""}
            />
            <ColorSwatch
              label="Foreground"
              setValue={(value) => updateColor("foreground", value)}
              value={currentPreset?.foreground || ""}
            />
            <ColorSwatch
              label="Card"
              setValue={(value) => updateColor("card", value)}
              value={currentPreset?.card || ""}
            />
            <ColorSwatch
              label="Card Foreground"
              setValue={(value) => updateColor("card-foreground", value)}
              value={currentPreset?.["card-foreground"] || ""}
            />
            <ColorSwatch
              label="Popover"
              setValue={(value) => updateColor("popover", value)}
              value={currentPreset?.popover || ""}
            />
            <ColorSwatch
              label="Popover Foreground"
              setValue={(value) => updateColor("popover-foreground", value)}
              value={currentPreset?.["popover-foreground"] || ""}
            />
          </Accordion.Content>
        </Accordion.Item>

        {/* Brand Colors */}
        <Accordion.Item id="brand">
          <Accordion.Trigger>Brand Colors</Accordion.Trigger>
          <Accordion.Content className="grid grid-cols-2">
            <ColorSwatch
              label="Primary"
              setValue={(value) => updateColor("primary", value)}
              value={currentPreset?.primary || ""}
            />
            <ColorSwatch
              label="Primary Foreground"
              setValue={(value) => updateColor("primary-foreground", value)}
              value={currentPreset?.["primary-foreground"] || ""}
            />
            <ColorSwatch
              label="Secondary"
              setValue={(value) => updateColor("secondary", value)}
              value={currentPreset?.secondary || ""}
            />
            <ColorSwatch
              label="Secondary Foreground"
              setValue={(value) => updateColor("secondary-foreground", value)}
              value={currentPreset?.["secondary-foreground"] || ""}
            />
            <ColorSwatch
              label="Destructive"
              setValue={(value) => updateColor("destructive", value)}
              value={currentPreset?.destructive || ""}
            />
          </Accordion.Content>
        </Accordion.Item>

        {/* Other Colors */}
        <Accordion.Item id="other">
          <Accordion.Trigger>Other Colors</Accordion.Trigger>
          <Accordion.Content className="grid grid-cols-2">
            <ColorSwatch
              label="Muted"
              setValue={(value) => updateColor("muted", value)}
              value={currentPreset?.muted || ""}
            />
            <ColorSwatch
              label="Muted Foreground"
              setValue={(value) => updateColor("muted-foreground", value)}
              value={currentPreset?.["muted-foreground"] || ""}
            />
            <ColorSwatch
              label="Accent"
              setValue={(value) => updateColor("accent", value)}
              value={currentPreset?.accent || ""}
            />
            <ColorSwatch
              label="Accent Foreground"
              setValue={(value) => updateColor("accent-foreground", value)}
              value={currentPreset?.["accent-foreground"] || ""}
            />
            <ColorSwatch
              label="Border"
              setValue={(value) => updateColor("border", value)}
              value={currentPreset?.border || ""}
            />
            <ColorSwatch
              label="Input"
              setValue={(value) => updateColor("input", value)}
              value={currentPreset?.input || ""}
            />
            <ColorSwatch
              label="Ring"
              setValue={(value) => updateColor("ring", value)}
              value={currentPreset?.ring || ""}
            />
          </Accordion.Content>
        </Accordion.Item>

        {/* Sidebar Colors */}
        <Accordion.Item id="sidebar">
          <Accordion.Trigger>Sidebar Colors</Accordion.Trigger>
          <Accordion.Content className="grid grid-cols-2">
            <ColorSwatch
              label="Sidebar"
              setValue={(value) => updateColor("sidebar", value)}
              value={currentPreset?.sidebar || ""}
            />
            <ColorSwatch
              label="Sidebar Foreground"
              setValue={(value) => updateColor("sidebar-foreground", value)}
              value={currentPreset?.["sidebar-foreground"] || ""}
            />
            <ColorSwatch
              label="Sidebar Primary"
              setValue={(value) => updateColor("sidebar-primary", value)}
              value={currentPreset?.["sidebar-primary"] || ""}
            />
            <ColorSwatch
              label="Sidebar Primary Foreground"
              setValue={(value) => updateColor("sidebar-primary-foreground", value)}
              value={currentPreset?.["sidebar-primary-foreground"] || ""}
            />
            <ColorSwatch
              label="Sidebar Accent"
              setValue={(value) => updateColor("sidebar-accent", value)}
              value={currentPreset?.["sidebar-accent"] || ""}
            />
            <ColorSwatch
              label="Sidebar Accent Foreground"
              setValue={(value) => updateColor("sidebar-accent-foreground", value)}
              value={currentPreset?.["sidebar-accent-foreground"] || ""}
            />
            <ColorSwatch
              label="Sidebar Border"
              setValue={(value) => updateColor("sidebar-border", value)}
              value={currentPreset?.["sidebar-border"] || ""}
            />
            <ColorSwatch
              label="Sidebar Ring"
              setValue={(value) => updateColor("sidebar-ring", value)}
              value={currentPreset?.["sidebar-ring"] || ""}
            />
          </Accordion.Content>
        </Accordion.Item>

        {/* Chart Colors */}
        <Accordion.Item id="chart">
          <Accordion.Trigger>Chart Colors</Accordion.Trigger>
          <Accordion.Content className="grid grid-cols-2">
            <ColorSwatch
              label="Chart 1"
              setValue={(value) => updateColor("chart-1", value)}
              value={currentPreset?.["chart-1"] || ""}
            />
            <ColorSwatch
              label="Chart 2"
              setValue={(value) => updateColor("chart-2", value)}
              value={currentPreset?.["chart-2"] || ""}
            />
            <ColorSwatch
              label="Chart 3"
              setValue={(value) => updateColor("chart-3", value)}
              value={currentPreset?.["chart-3"] || ""}
            />
            <ColorSwatch
              label="Chart 4"
              setValue={(value) => updateColor("chart-4", value)}
              value={currentPreset?.["chart-4"] || ""}
            />
            <ColorSwatch
              label="Chart 5"
              setValue={(value) => updateColor("chart-5", value)}
              value={currentPreset?.["chart-5"] || ""}
            />
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Customizer
