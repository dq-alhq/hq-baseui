"use client"

import { IconMaximize, IconMinimize } from "@tabler/icons-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Collapsible } from "@/components/ui/collapsible"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="mx-auto w-full max-w-xs" size="sm">
      <Card.Header>
        <Card.Title>Radius</Card.Title>
        <Card.Description>Set the corner radius of the element.</Card.Description>
      </Card.Header>
      <Card.Content>
        <Collapsible className="flex items-start gap-2" onOpenChange={setIsOpen} open={isOpen}>
          <div className="grid w-full grid-cols-2 gap-2">
            <Field>
              <Field.Label className="sr-only" htmlFor="radius-x">
                Radius X
              </Field.Label>
              <Input defaultValue={0} id="radius" placeholder="0" />
            </Field>
            <Field>
              <Field.Label className="sr-only" htmlFor="radius-y">
                Radius Y
              </Field.Label>
              <Input defaultValue={0} id="radius" placeholder="0" />
            </Field>
            <Collapsible.Content className="col-span-full grid grid-cols-subgrid gap-2">
              <Field>
                <Field.Label className="sr-only" htmlFor="radius-x">
                  Radius X
                </Field.Label>
                <Input defaultValue={0} id="radius" placeholder="0" />
              </Field>
              <Field>
                <Field.Label className="sr-only" htmlFor="radius-y">
                  Radius Y
                </Field.Label>
                <Input defaultValue={0} id="radius" placeholder="0" />
              </Field>
            </Collapsible.Content>
          </div>
          <Collapsible.Trigger render={<Button size="icon" variant="outline" />}>
            {isOpen ? <IconMinimize /> : <IconMaximize />}
          </Collapsible.Trigger>
        </Collapsible>
      </Card.Content>
    </Card>
  )
}
