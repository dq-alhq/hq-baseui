import { Field } from "@/components/ui/field"
import { InputGroup } from "@/components/ui/input-group"

export default () => {
  return (
    <Field.Set className="max-w-sm">
      <Field>
        <Field.Label htmlFor="block-end-input">Input</Field.Label>
        <InputGroup className="h-auto">
          <InputGroup.Input id="block-end-input" placeholder="Enter amount" />
          <InputGroup.Addon align="block-end">
            <InputGroup.Text>USD</InputGroup.Text>
          </InputGroup.Addon>
        </InputGroup>
        <Field.Description>Footer positioned below the input.</Field.Description>
      </Field>
      <Field>
        <Field.Label htmlFor="block-end-textarea">Textarea</Field.Label>
        <InputGroup>
          <InputGroup.Textarea id="block-end-textarea" placeholder="Write a comment..." />
          <InputGroup.Addon align="block-end">
            <InputGroup.Text>0/280</InputGroup.Text>
            <InputGroup.Button className="ml-auto" size="sm" variant="primary">
              Post
            </InputGroup.Button>
          </InputGroup.Addon>
        </InputGroup>
        <Field.Description>Footer positioned below the textarea.</Field.Description>
      </Field>
    </Field.Set>
  )
}
