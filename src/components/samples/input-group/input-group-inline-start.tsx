import { IconSearch } from "@tabler/icons-react"
import { Field } from "@/components/ui/field"
import { InputGroup } from "@/components/ui/input-group"

export default () => {
  return (
    <Field className="max-w-sm">
      <Field.Label htmlFor="inline-start-input">Input</Field.Label>
      <InputGroup>
        <InputGroup.Input id="inline-start-input" placeholder="Search..." />
        <InputGroup.Addon align="inline-start">
          <IconSearch className="text-muted-foreground" />
        </InputGroup.Addon>
      </InputGroup>
      <Field.Description>Icon positioned at the start.</Field.Description>
    </Field>
  )
}
