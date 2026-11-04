import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Field } from "@/components/ui/field"

export default () => {
  const [enabled, setEnabled] = useState<boolean>(false)
  return (
    <div className="space-y-4">
      <Field>
        <Checkbox checked={enabled} onCheckedChange={setEnabled} />
        <Field.Label>Enable notification</Field.Label>
      </Field>
      <pre className="rounded-lg border border-dashed p-3">{JSON.stringify({ enabled }, null, 2)}</pre>
    </div>
  )
}
