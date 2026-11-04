"use client"

import { IconColorSwatch } from "@tabler/icons-react"
import { lazy, Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Drawer } from "@/components/ui/drawer"
import { Skeleton } from "../ui/skeleton"

const ThemeControlPanel = lazy(() => import("@/components/theme-customizer/theme-control-panel"))

export default function ThemeCustomizer() {
  return (
    <Drawer modal={false} showSwipeHandle swipeDirection="right">
      <Drawer.Trigger
        render={
          <Button
            className="fixed top-16 right-0 z-50 rounded-r-none rtl:left-0"
            name="Theme Customizer Toggle"
            size="icon"
          >
            <IconColorSwatch />
          </Button>
        }
      />
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Theme Customizer</Drawer.Title>
          <Drawer.Description>Pick a style and color for your components.</Drawer.Description>
        </Drawer.Header>
        <Suspense
          fallback={
            <div className="space-y-4">
              <Skeleton className="bg-border h-8 w-full" />
              <div className="cn-radio-group grid-cols-2 gap-2">
                <span className="cn-label">Icon Library</span>
                <span className="cn-label">Style</span>
                <Skeleton className="bg-border h-8 w-full" />
                <Skeleton className="bg-border h-8 w-full" />
              </div>
              <div className="bg-border h-px w-full" />
              <div className="cn-radio-group grid-cols-2 gap-2">
                <span className="cn-label">Font Sans</span>
                <span className="cn-label">Font Mono</span>
                <Skeleton className="bg-border h-8 w-full" />
                <Skeleton className="bg-border h-8 w-full" />
              </div>
              <Skeleton className="bg-border h-8 w-full" />
              <Skeleton className="bg-border h-8 w-full" />
              <Skeleton className="bg-border h-8 w-full" />
            </div>
          }
        >
          <ThemeControlPanel />
        </Suspense>
      </Drawer.Content>
    </Drawer>
  )
}
