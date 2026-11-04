import { Field } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export default () => {
  return (
    <Field disabled>
      <Field.Label>Message</Field.Label>
      <Textarea placeholder="Type your message here." />
    </Field>
  )
}
