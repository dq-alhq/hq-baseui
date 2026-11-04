import { IconEyeOff } from "@tabler/icons-react"
import { Field } from "@/components/ui/field"
import { InputGroup } from "@/components/ui/input-group"

export default () => {
  return (
    <Field className="max-w-sm">
      <Field.Label htmlFor="inline-end-input">Input</Field.Label>
      <InputGroup>
        <InputGroup.Input id="inline-end-input" placeholder="Enter password" type="password" />
        <InputGroup.Addon align="inline-end">
          <IconEyeOff />
        </InputGroup.Addon>
      </InputGroup>
      <Field.Description>Icon positioned at the end.</Field.Description>
    </Field>
  )
}
