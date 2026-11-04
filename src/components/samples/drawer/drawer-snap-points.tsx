"use client"

import { Button } from "@/components/ui/button"
import { Drawer } from "@/components/ui/drawer"

const SNAP_POINTS = ["31rem", 1]

export default () => {
  return (
    <Drawer showSwipeHandle snapPoints={SNAP_POINTS}>
      <Drawer.Trigger render={<Button variant="outline" />}>Open Snap Drawer</Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Snap points</Drawer.Title>
          <Drawer.Description>
            Drag the drawer to snap between a compact peek and a near full-height view.
          </Drawer.Description>
        </Drawer.Header>
        <div className="flex-1 p-4">
          <div className="bg-muted rounded-2xl group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:h-80 group-data-[swipe-axis=y]/drawer-popup:w-full" />
        </div>
        <Drawer.Footer>
          <Drawer.Close render={<Button />}>Close</Drawer.Close>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  )
}
