import { Field } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export default () => {
  return (
    <Field invalid>
      <Field.Label>Message</Field.Label>
      <Textarea placeholder="Type your message here." />
      <Field.Description>Please enter a valid message.</Field.Description>
    </Field>
  )
}
