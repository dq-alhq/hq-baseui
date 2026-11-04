"use client"

import { IconBuilding, IconCreditCard, IconWallet } from "@tabler/icons-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu } from "@/components/ui/dropdown-menu"

export default () => {
  const [paymentMethod, setPaymentMethod] = useState("card")

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger render={<Button variant="outline" />}>Payment Method</DropdownMenu.Trigger>
      <DropdownMenu.Content className="min-w-56">
        <DropdownMenu.Group>
          <DropdownMenu.Label>Select Payment Method</DropdownMenu.Label>
          <DropdownMenu.RadioGroup onValueChange={setPaymentMethod} value={paymentMethod}>
            <DropdownMenu.RadioItem value="card">
              <IconCreditCard />
              Credit Card
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="paypal">
              <IconWallet />
              PayPal
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="bank">
              <IconBuilding />
              Bank Transfer
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
