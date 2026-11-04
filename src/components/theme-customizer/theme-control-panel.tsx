"use client"

import { IconCopy, IconMoon, IconRotateClockwise, IconSun } from "@tabler/icons-react"
import { lazy, Suspense } from "react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { useTheme } from "@/stores/theme-store"
import { DrawerBody, DrawerFooter } from "../ui/drawer"
import { Skeleton } from "../ui/skeleton"
import { FontMonoSelector, FontSansSelector } from "./font-selector"
import { SelectRadius } from "./select-radius"
import SelectThemePreset from "./select-theme"
import { ThemeImport } from "./theme-import"

const Customizer = lazy(() => import("@/components/theme-customizer/customizer"))

const ThemeSnippet = lazy(() => import("@/components/theme-customizer/theme-snippet"))

const ThemeControlPanel = () => {
  const { theme, setTheme, preset, name, reset } = useTheme()
  return (
    <>
      <DrawerBody className="space-y-4">
        <ButtonGroup className="w-full">
          <Button
            className="w-1/2"
            onClick={() => setTheme("light")}
            variant={theme === "light" ? "primary" : "outline"}
          >
            <IconSun />
            Light
          </Button>
          <Button className="w-1/2" onClick={() => setTheme("dark")} variant={theme === "dark" ? "primary" : "outline"}>
            <IconMoon />
            Dark
          </Button>
        </ButtonGroup>

        <div className="grid grid-cols-2 gap-2">
          <FontSansSelector />
          <FontMonoSelector />
        </div>

        <SelectThemePreset />

        <SelectRadius />

        <Suspense
          fallback={
            <div className="space-y-2">
              <Skeleton className="bg-border h-8 w-full" />
              <Skeleton className="bg-border h-8 w-full" />
              <Skeleton className="bg-border h-8 w-full" />
              <Skeleton className="bg-border h-8 w-full" />
              <Skeleton className="bg-border h-8 w-full" />
            </div>
          }
        >
          <Customizer />
        </Suspense>

        {/* <ThemeImport /> */}
      </DrawerBody>
      <DrawerFooter>
        <ButtonGroup className="w-full *:[button]:w-1/3">
          <Suspense fallback={<Skeleton className="bg-border h-8 w-full" />}>
            <ThemeSnippet {...preset} name={name}>
              <Button variant="outline">
                <IconCopy />
                Copy
              </Button>
            </ThemeSnippet>
          </Suspense>
          <ThemeImport />
          <Button onClick={reset} variant="outline">
            <IconRotateClockwise />
            Reset
          </Button>
        </ButtonGroup>
      </DrawerFooter>
    </>
  )
}

export default ThemeControlPanel
