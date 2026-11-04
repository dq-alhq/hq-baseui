"use client"

import { Button } from "@/components/ui/button"
import { Drawer } from "@/components/ui/drawer"

export default () => {
  return (
    <Drawer showSwipeHandle>
      <Drawer.Trigger render={<Button variant="secondary" />}>Open Drawer</Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Drawer.</Drawer.Title>
          <Drawer.Description>Drawer. with a swipe handle.</Drawer.Description>
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
