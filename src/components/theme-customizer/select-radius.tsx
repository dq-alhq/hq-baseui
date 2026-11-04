"use client"
import { useEffect, useRef, useState } from "react"
import { Slider } from "@/components/ui/slider"
import { useTheme } from "@/stores/theme-store"

export const SelectRadius = () => {
  const { preset, setVar } = useTheme()
  const currentRadius = Number(preset.light.radius?.replace("rem", "")) ?? 0.625
  const [value, setValue] = useState(currentRadius)

  useEffect(() => {
    setValue(currentRadius)
  }, [currentRadius])

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const setRadius = (v: number) => {
    setValue(v)
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
    debounceRef.current = setTimeout(() => {
      setVar({ key: "radius", value: `${v as number}rem`, theme: "light" })
    }, 500)
  }
  return (
    <div className="mx-auto grid w-full max-w-xs gap-3">
      <Slider
        format={{
          minimumFractionDigits: 3,
          maximumFractionDigits: 3
        }}
        max={1}
        min={0}
        onValueChange={(v) => setValue(v as number)}
        onValueCommitted={(v) => setRadius(v as number)}
        orientation="horizontal"
        step={0.025}
        value={value}
      >
        <Slider.Label>Radius</Slider.Label>
        <Slider.Value />
      </Slider>
    </div>
  )
}
