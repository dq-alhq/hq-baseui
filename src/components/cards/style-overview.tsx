"use client"

import { useEffect, useState } from "react"
import { useFont } from "@/stores/font-store"
import { useTheme } from "@/stores/theme-store"
import { Button } from "../ui/button"
import { StyleOverviewSkeleton } from "./skeleton/style-overview"

const styles = [
  { bg: "--background", fg: "--foreground" },
  { bg: "--primary", fg: "--primary-foreground" },
  { bg: "--secondary", fg: "--secondary-foreground" },
  { bg: "--destructive", fg: "--primary-foreground" },
  { bg: "--accent", fg: "--accent-foreground" },
  { bg: "--muted", fg: "--muted-foreground" },
  { bg: "--popover", fg: "--popover-foreground" },
  { bg: "--card", fg: "--card-foreground" },
  { bg: "--chart-1", fg: "--foreground" },
  { bg: "--chart-2", fg: "--foreground" },
  { bg: "--chart-3", fg: "--foreground" },
  { bg: "--chart-4", fg: "--foreground" },
  { bg: "--chart-5", fg: "--foreground" }
]

export function StyleOverview() {
  const { fontMono, fontSans } = useFont()
  const { name } = useTheme()

  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [])

  return isMounted ? (
    <div className="grid gap-2">
      <div>
        <div className="font-heading text-lg font-medium">Theme Name: {name}</div>
        <div className="font-sans text-lg font-medium">Font Sans: {fontSans}</div>
        <div className="font-mono text-lg font-medium">Font Mono: {fontMono}</div>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {styles.map(({ bg, fg }) => (
          <div className="flex flex-col flex-wrap items-center gap-2" key={bg}>
            <div
              className="after:border-border relative grid size-16 shrink-0 place-items-center p-3 after:absolute after:inset-0 after:border after:mix-blend-darken dark:after:mix-blend-lighten"
              style={{
                backgroundColor: `var(${bg})`,
                color: `var(${fg})`
              }}
            >
              <div className="max-w-14 truncate font-mono text-[0.60rem]">{bg.replace("--", "")}</div>
            </div>
          </div>
        ))}

        <div className="after:border-border relative grid size-16 shrink-0 place-items-center rounded-xs p-3 after:absolute after:inset-0 after:rounded-xs after:border after:mix-blend-darken dark:after:mix-blend-lighten">
          <div className="truncate font-mono text-[0.60rem]">radius-sm</div>
        </div>
        <div className="after:border-border relative grid size-16 shrink-0 place-items-center rounded-sm p-3 after:absolute after:inset-0 after:rounded-sm after:border after:mix-blend-darken dark:after:mix-blend-lighten">
          <div className="truncate font-mono text-[0.60rem]">radius-sm</div>
        </div>

        <div className="after:border-border relative grid size-16 shrink-0 place-items-center rounded-md p-3 after:absolute after:inset-0 after:rounded-md after:border after:mix-blend-darken dark:after:mix-blend-lighten">
          <div className="truncate font-mono text-[0.60rem]">radius-md</div>
        </div>

        <div className="after:border-border relative grid size-16 shrink-0 place-items-center rounded-lg p-3 after:absolute after:inset-0 after:rounded-lg after:border after:mix-blend-darken dark:after:mix-blend-lighten">
          <div className="truncate font-mono text-[0.60rem]">radius-lg</div>
        </div>

        <div className="after:border-border relative grid size-16 shrink-0 place-items-center rounded-xl p-3 after:absolute after:inset-0 after:rounded-xl after:border after:mix-blend-darken dark:after:mix-blend-lighten">
          <div className="truncate font-mono text-[0.60rem]">radius-xl</div>
        </div>

        <div className="after:border-border relative grid size-16 shrink-0 place-items-center rounded-2xl p-3 after:absolute after:inset-0 after:rounded-2xl after:border after:mix-blend-darken dark:after:mix-blend-lighten">
          <div className="truncate font-mono text-[0.60rem]">radius-2xl</div>
        </div>
      </div>

      <div className="flex w-full flex-wrap items-center justify-center gap-1 *:grow">
        <Button variant={"primary"}>Primary</Button>
        <Button variant={"secondary"}>Secondary</Button>
        <Button variant={"destructive"}>Destructive</Button>
        <Button variant={"success"}>Success</Button>
        <Button variant={"warning"}>Warning</Button>
        <Button variant={"info"}>Info</Button>
        <Button variant={"outline"}>Outline</Button>
        <Button variant={"ghost"}>Ghost</Button>
        <Button variant={"link"}>Link</Button>
      </div>
    </div>
  ) : (
    <StyleOverviewSkeleton />
  )
}
