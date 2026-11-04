import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup } from "@/components/ui/input-group"

export default () => {
  return (
    <Field.Set>
      <Field>
        <Field.Label htmlFor="input-default-01">Default (No Input Group)</Field.Label>
        <Input id="input-default-01" placeholder="Placeholder" />
      </Field>
      <Field>
        <Field.Label htmlFor="input-group-02">Input Group</Field.Label>
        <InputGroup>
          <InputGroup.Input id="input-group-02" placeholder="Placeholder" />
        </InputGroup>
      </Field>
      <Field data-disabled="true">
        <Field.Label htmlFor="input-disabled-03">Disabled</Field.Label>
        <InputGroup>
          <InputGroup.Input disabled id="input-disabled-03" placeholder="This field is disabled" />
        </InputGroup>
      </Field>
      <Field data-invalid="true">
        <Field.Label htmlFor="input-invalid-04">Invalid</Field.Label>
        <InputGroup>
          <InputGroup.Input aria-invalid="true" id="input-invalid-04" placeholder="This field is invalid" />
        </InputGroup>
      </Field>
    </Field.Set>
  )
}
