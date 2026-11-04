import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default () => {
  return (
    <Field.Set>
      <Field>
        <Field.Label htmlFor="fieldgroup-name">Name</Field.Label>
        <Input id="fieldgroup-name" placeholder="Jordan Lee" />
      </Field>
      <Field>
        <Field.Label htmlFor="fieldgroup-email">Email</Field.Label>
        <Input id="fieldgroup-email" placeholder="name@example.com" type="email" />
        <Field.Description>We&apos;ll send updates to this address.</Field.Description>
      </Field>
      <div className="flex gap-2">
        <Button type="reset" variant="outline">
          Reset
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </Field.Set>
  )
}
