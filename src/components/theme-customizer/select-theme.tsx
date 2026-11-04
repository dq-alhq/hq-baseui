"use client"

import type { ThemeStyleProps } from "@/types/themes"
import { IconArrowsShuffle, IconSelector } from "@tabler/icons-react"
import { useCallback, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { titleCase } from "@/lib/modifiers"
import { type ThemeName, themes } from "@/lib/themes/generated"
import { useTheme } from "@/stores/theme-store"
import { Combobox } from "../ui/combobox"
import { Field } from "../ui/field"

const getThemeColor = (themeName: string, color: keyof ThemeStyleProps) => {
  const theme = themeName === "default" ? themes.default : themes[themeName as ThemeName]
  return theme?.light?.[color] || theme?.dark?.[color] || "#000000"
}

const SelectThemePreset = () => {
  const { name, setPreset } = useTheme()

  const presetNames = useMemo(() => {
    return [
      "default",
      ...Object.keys(themes)
        .sort((a, b) => a.localeCompare(b))
        .filter((t) => t !== "default"),
      "custom"
    ]
  }, [])
  const items = presetNames.map((preset) => ({
    value: preset,
    label: titleCase(preset)
  }))
  const randomize = useCallback(() => {
    const random = Math.floor(Math.random() * presetNames.length)
    setPreset(presetNames[random])
  }, [presetNames, setPreset])

  return (
    <div className="flex flex-col gap-4">
      <Button className="cursor-pointer" onClick={randomize}>
        <IconArrowsShuffle />
        Random
      </Button>
      <Field>
        <Combobox items={items} onValueChange={(v) => setPreset(v as string)} value={name}>
          <Field.Label>Theme Preset</Field.Label>
          <Combobox.Trigger
            render={
              <Button className="w-full justify-start" variant="outline">
                <div className="relative grid aspect-square size-5 grid-cols-2 grid-rows-2 gap-0 overflow-hidden rounded-[inherit] border p-0">
                  <div
                    style={{
                      backgroundColor: getThemeColor(name, "primary")
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: getThemeColor(name, "secondary")
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: getThemeColor(name, "background")
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: getThemeColor(name, "foreground")
                    }}
                  />
                </div>
                <Combobox.Value />
                <IconSelector className="ml-auto" />
              </Button>
            }
          />
          <Combobox.Content>
            <Combobox.Input placeholder="Search" showTrigger={false} />

            <Combobox.Empty>No items found.</Combobox.Empty>
            <Combobox.List>
              {(theme) => (
                <Combobox.Item key={theme.value} value={theme.value}>
                  <div className="relative grid aspect-square size-5 grid-cols-2 grid-rows-2 gap-0 overflow-hidden rounded-[inherit] border p-0">
                    <div
                      style={{
                        backgroundColor: getThemeColor(theme.value, "primary")
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: getThemeColor(theme.value, "secondary")
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: getThemeColor(theme.value, "background")
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: getThemeColor(theme.value, "foreground")
                      }}
                    />
                  </div>
                  {theme.label.replace(/-/g, " ").replace(/\b\w/g, (char: string) => char.toUpperCase())}
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Content>
        </Combobox>
      </Field>
    </div>
  )
}

export default SelectThemePreset
