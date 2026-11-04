import { useState } from "react"
import { Field } from "@/components/ui/field"
import { Kbd } from "@/components/ui/kbd"
import { Switch } from "@/components/ui/switch"

export default () => {
  const [showSymbol, setShowSymbol] = useState<boolean>(true)
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Field>
        <Field.Label>Show Symbol</Field.Label>
        <Switch checked={showSymbol} onCheckedChange={setShowSymbol} />
      </Field>
      <Kbd.Group>
        <Kbd symbol={showSymbol}>cmd</Kbd>
        <Kbd symbol={showSymbol}>option</Kbd>
        <Kbd symbol={showSymbol}>shift</Kbd>
        <Kbd symbol={showSymbol}>alt</Kbd>
        <Kbd symbol={showSymbol}>ctrl</Kbd>
      </Kbd.Group>
      <Kbd.Group>
        <Kbd symbol={showSymbol}>ctrl</Kbd>
        <span>+</span>
        <Kbd>B</Kbd>
      </Kbd.Group>
    </div>
  )
}
