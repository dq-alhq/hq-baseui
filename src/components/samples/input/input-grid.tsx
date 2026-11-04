import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default () => {
  return (
    <Field.Set className="grid max-w-sm grid-cols-2">
      <Field>
        <Field.Label htmlFor="first-name">First Name</Field.Label>
        <Input id="first-name" placeholder="Jordan" />
      </Field>
      <Field>
        <Field.Label htmlFor="last-name">Last Name</Field.Label>
        <Input id="last-name" placeholder="Lee" />
      </Field>
    </Field.Set>
  )
}
