import { Badge } from "@/components/ui/badge"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default () => {
  return (
    <Field>
      <Field.Label htmlFor="input-badge">
        Webhook URL{" "}
        <Badge className="ml-auto" variant="secondary">
          Beta
        </Badge>
      </Field.Label>
      <Input id="input-badge" placeholder="https://api.example.com/webhook" type="url" />
    </Field>
  )
}
