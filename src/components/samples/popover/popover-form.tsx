import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Popover } from "@/components/ui/popover"

export default () => {
  return (
    <Popover>
      <Popover.Trigger render={<Button variant="outline" />}>Open Popover</Popover.Trigger>
      <Popover.Content align="start" className="w-64">
        <Popover.Header>
          <Popover.Title>Dimensions</Popover.Title>
          <Popover.Description>Set the dimensions for the layer.</Popover.Description>
        </Popover.Header>
        <Field.Group>
          <Field>
            <Field.Label>Width</Field.Label>
            <Input defaultValue="100%" />
          </Field>
          <Field>
            <Field.Label>Height</Field.Label>
            <Input defaultValue="25px" />
          </Field>
        </Field.Group>
      </Popover.Content>
    </Popover>
  )
}
