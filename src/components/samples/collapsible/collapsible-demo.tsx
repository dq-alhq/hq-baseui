"use client"

import { IconSelector } from "@tabler/icons-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Collapsible } from "@/components/ui/collapsible"

export default () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible className="flex w-87.5 flex-col gap-2" onOpenChange={setIsOpen} open={isOpen}>
      <div className="flex items-center justify-between gap-4 px-4">
        <h4 className="text-sm font-semibold">Order #4189</h4>
        <Collapsible.Trigger render={<Button className="size-8" size="icon" variant="ghost" />}>
          <IconSelector />
          <span className="sr-only">Toggle details</span>
        </Collapsible.Trigger>
      </div>
      <div className="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
        <span className="text-muted-foreground">Status</span>
        <span className="font-medium">Shipped</span>
      </div>
      <Collapsible.Content className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">Shipping address</p>
          <p className="text-muted-foreground">100 Market St, San Francisco</p>
        </div>
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">Items</p>
          <p className="text-muted-foreground">2x Studio Headphones</p>
        </div>
      </Collapsible.Content>
    </Collapsible>
  )
}
