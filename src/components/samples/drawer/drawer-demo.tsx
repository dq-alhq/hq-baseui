"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Drawer } from "@/components/ui/drawer"
import { toast } from "@/components/ui/toast"
import { useIsMobile } from "@/hooks/use-mobile"

const deliveryTimes = [
  {
    value: "asap",
    id: "delivery-asap",
    label: "Standard delivery",
    description: "25–35 min · Driver assigned now",
    badge: "Fastest"
  },
  {
    value: "5-00",
    id: "delivery-5-00",
    label: "5:00 PM – 5:15 PM",
    description: "Prep starts at 4:45 PM"
  },
  {
    value: "5-30",
    id: "delivery-5-30",
    label: "5:30 PM – 5:45 PM",
    description: "Good if you're heading home"
  },
  {
    value: "6-00",
    id: "delivery-6-00",
    label: "6:00 PM – 6:15 PM",
    description: "Most popular · High demand"
  },
  {
    value: "6-30",
    id: "delivery-6-30",
    label: "6:30 PM – 6:45 PM",
    description: "Last slot before kitchen closes"
  }
]

export default () => {
  const [open, setOpen] = useState(false)
  const [deliveryTime, setDeliveryTime] = useState("asap")
  const isMobile = useIsMobile()

  function handleConfirm() {
    const selected = deliveryTimes.find((time) => time.value === deliveryTime)

    if (!selected) {
      return
    }

    setOpen(false)
    toast.add({
      title: "Delivery time confirmed",
      description: selected.label
    })
  }

  return (
    <Drawer onOpenChange={setOpen} open={open} showSwipeHandle={isMobile} swipeDirection={isMobile ? "down" : "right"}>
      <Drawer.Trigger render={<Button variant="secondary" />}>Open Drawer</Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Pick a delivery time</Drawer.Title>
          <Drawer.Description>We&apos;ll prepare your order as soon as possible.</Drawer.Description>
        </Drawer.Header>
        <div className="scroll-fade flex-1 overflow-y-auto p-4">
          {/* <RadioGroup className="gap-2" onValueChange={setDeliveryTime} value={deliveryTime}>
            {deliveryTimes.map((time) => (
              <Field.Label htmlFor={time.id} key={time.value}>
                <Field>
                  <Field.Content>
                    <Field.Title className="flex items-center gap-2">
                      {time.label}
                      {time.badge ? <Badge variant="secondary">{time.badge}</Badge> : null}
                    </Field.Title>
                    <Field.Description>{time.description}</Field.Description>
                  </Field.Content>
                  <RadioGroupItem id={time.id} value={time.value} />
                </Field>
              </Field.Label>
            ))}
          </RadioGroup> */}
        </div>
        <Drawer.Footer>
          <Button className="h-8.5" onClick={handleConfirm}>
            Confirm Delivery Time
          </Button>
          <Drawer.Close render={<Button variant="outline" />}>Cancel</Drawer.Close>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  )
}
