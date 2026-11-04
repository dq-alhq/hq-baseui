"use client"

import { Button } from "@/components/ui/button"
import { Drawer } from "@/components/ui/drawer"
import { useIsMobile } from "@/hooks/use-mobile"

export default () => {
  const isMobile = useIsMobile()

  const swipeDirection = isMobile ? "down" : "right"

  return (
    <Drawer showSwipeHandle={isMobile} swipeDirection={swipeDirection}>
      <Drawer.Trigger render={<Button variant="secondary" />}>Open Drawer</Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Drawer.</Drawer.Title>
          <Drawer.Description>Open another drawer from the same direction.</Drawer.Description>
        </Drawer.Header>
        <div className="flex-1 p-4">
          <div className="bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:aspect-video group-data-[swipe-axis=y]/drawer-popup:w-full" />
        </div>
        <Drawer.Footer>
          <Drawer showSwipeHandle={isMobile} swipeDirection={swipeDirection}>
            <Drawer.Trigger render={<Button variant="outline" />}>Open Nested Drawer</Drawer.Trigger>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Nested Drawer</Drawer.Title>
                <Drawer.Description>The parent drawer stays mounted behind this one.</Drawer.Description>
              </Drawer.Header>
              <div className="flex-1 p-4">
                <div className="bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:aspect-video group-data-[swipe-axis=y]/drawer-popup:w-full" />
              </div>
              <Drawer.Footer>
                <Drawer showSwipeHandle={isMobile} swipeDirection={swipeDirection}>
                  <Drawer.Trigger render={<Button variant="outline" />}>Open Third Drawer</Drawer.Trigger>
                  <Drawer.Content>
                    <Drawer.Header>
                      <Drawer.Title>Third Drawer</Drawer.Title>
                      <Drawer.Description>Two drawers are stacked behind this one.</Drawer.Description>
                    </Drawer.Header>
                    <div className="flex-1 p-4">
                      <div className="bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:aspect-video group-data-[swipe-axis=y]/drawer-popup:w-full" />
                    </div>
                    <Drawer.Footer>
                      <Drawer showSwipeHandle={isMobile} swipeDirection={swipeDirection}>
                        <Drawer.Trigger render={<Button variant="outline" />}>Open Fourth Drawer</Drawer.Trigger>
                        <Drawer.Content>
                          <Drawer.Header>
                            <Drawer.Title>Fourth Drawer</Drawer.Title>
                            <Drawer.Description>This is the frontmost drawer in the stack.</Drawer.Description>
                          </Drawer.Header>
                          <div className="flex-1 p-4">
                            <div className="bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:aspect-video group-data-[swipe-axis=y]/drawer-popup:w-full" />
                          </div>
                          <Drawer.Footer>
                            <Drawer.Close render={<Button variant="outline" />}>Close</Drawer.Close>
                          </Drawer.Footer>
                        </Drawer.Content>
                      </Drawer>
                      <Drawer.Close render={<Button variant="outline" />}>Close</Drawer.Close>
                    </Drawer.Footer>
                  </Drawer.Content>
                </Drawer>
                <Drawer.Close render={<Button variant="outline" />}>Close</Drawer.Close>
              </Drawer.Footer>
            </Drawer.Content>
          </Drawer>
          <Drawer.Close render={<Button variant="outline" />}>Close</Drawer.Close>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  )
}
