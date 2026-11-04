import { IconCopy, IconTrash } from "@tabler/icons-react"
import { Field } from "@/components/ui/field"
import { InputGroup } from "@/components/ui/input-group"

export default () => {
  return (
    <Field.Set>
      <Field>
        <Field.Label htmlFor="input-button-13">Button</Field.Label>
        <InputGroup>
          <InputGroup.Input id="input-button-13" />
          <InputGroup.Addon>
            <InputGroup.Button>Default</InputGroup.Button>
          </InputGroup.Addon>
        </InputGroup>
        <InputGroup>
          <InputGroup.Input id="input-button-14" />
          <InputGroup.Addon>
            <InputGroup.Button variant="outline">Outline</InputGroup.Button>
          </InputGroup.Addon>
        </InputGroup>
        <InputGroup>
          <InputGroup.Input id="input-button-15" />
          <InputGroup.Addon>
            <InputGroup.Button variant="secondary">Secondary</InputGroup.Button>
          </InputGroup.Addon>
        </InputGroup>
        <InputGroup>
          <InputGroup.Input id="input-button-16" />
          <InputGroup.Addon align="inline-end">
            <InputGroup.Button variant="secondary">Button</InputGroup.Button>
          </InputGroup.Addon>
        </InputGroup>
        <InputGroup>
          <InputGroup.Input id="input-button-17" />
          <InputGroup.Addon align="inline-end">
            <InputGroup.Button size="icon-xs">
              <IconCopy />
            </InputGroup.Button>
          </InputGroup.Addon>
        </InputGroup>
        <InputGroup>
          <InputGroup.Input id="input-button-18" />
          <InputGroup.Addon align="inline-end">
            <InputGroup.Button size="icon-xs" variant="secondary">
              <IconTrash />
            </InputGroup.Button>
          </InputGroup.Addon>
        </InputGroup>
      </Field>
    </Field.Set>
  )
}
