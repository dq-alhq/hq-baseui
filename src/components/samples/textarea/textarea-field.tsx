import { Field } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export default () => {
  return (
    <Field>
      <Field.Label>Message</Field.Label>
      <Field.Description>Enter your message below.</Field.Description>
      <Textarea placeholder="Type your message here." />
    </Field>
  )
}
