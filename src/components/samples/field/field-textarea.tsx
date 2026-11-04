import { Field } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export default () => {
  return (
    <Field.Set className="w-full max-w-xs">
      <Field>
        <Field.Label htmlFor="feedback">Feedback</Field.Label>
        <Textarea id="feedback" placeholder="Your feedback helps us improve..." rows={4} />
        <Field.Description>Share your thoughts about our service.</Field.Description>
      </Field>
    </Field.Set>
  )
}
