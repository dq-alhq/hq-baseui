"use client"

import { useState } from "react"
import { Field } from "@/components/ui/field"
import { ToggleGroup } from "@/components/ui/toggle"

export default () => {
  const [fontWeight, setFontWeight] = useState("normal")
  return (
    <div className="max-w-lg">
      <Field>
        <Field.Label>Font Weight</Field.Label>
        <ToggleGroup
          onValueChange={(value) => setFontWeight(value[0])}
          size="lg"
          spacing={2}
          value={[fontWeight]}
          variant="outline"
        >
          <ToggleGroup.Item
            aria-label="Light"
            className="flex size-16 flex-col items-center justify-center rounded-xl"
            value="light"
          >
            <span className="text-2xl leading-none font-light">Aa</span>
            <span className="text-muted-foreground text-xs">Light</span>
          </ToggleGroup.Item>
          <ToggleGroup.Item
            aria-label="Normal"
            className="flex size-16 flex-col items-center justify-center rounded-xl"
            value="normal"
          >
            <span className="text-2xl leading-none font-normal">Aa</span>
            <span className="text-muted-foreground text-xs">Normal</span>
          </ToggleGroup.Item>
          <ToggleGroup.Item
            aria-label="Medium"
            className="flex size-16 flex-col items-center justify-center rounded-xl"
            value="medium"
          >
            <span className="text-2xl leading-none font-medium">Aa</span>
            <span className="text-muted-foreground text-xs">Medium</span>
          </ToggleGroup.Item>
          <ToggleGroup.Item
            aria-label="Bold"
            className="flex size-16 flex-col items-center justify-center rounded-xl"
            value="bold"
          >
            <span className="text-2xl leading-none font-bold">Aa</span>
            <span className="text-muted-foreground text-xs">Bold</span>
          </ToggleGroup.Item>
        </ToggleGroup>
        <Field.Description>
          Use <code className="bg-muted rounded-md px-1 py-0.5 font-mono">font-{fontWeight}</code> to set the font
          weight.
        </Field.Description>
      </Field>
    </div>
  )
}
