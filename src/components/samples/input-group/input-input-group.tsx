import { IconInfoCircle } from "@tabler/icons-react"
import { Field } from "@/components/ui/field"
import { InputGroup } from "@/components/ui/input-group"

export default () => {
  return (
    <Field>
      <Field.Label htmlFor="input-group-url">Website URL</Field.Label>
      <InputGroup>
        <InputGroup.Input id="input-group-url" placeholder="example.com" />
        <InputGroup.Addon>
          <InputGroup.Text>https://</InputGroup.Text>
        </InputGroup.Addon>
        <InputGroup.Addon align="inline-end">
          <IconInfoCircle />
        </InputGroup.Addon>
      </InputGroup>
    </Field>
  )
}
