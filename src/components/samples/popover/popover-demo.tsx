import { Field } from "#/components/ui/field"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover } from "@/components/ui/popover"

export default () => {
  return (
    <Popover>
      <Popover.Trigger render={<Button variant="outline" />}>Open popover</Popover.Trigger>
      <Popover.Content className="w-80">
        <Popover.Header>
          <Popover.Title>Dimensions</Popover.Title>
          <Popover.Description>Set the dimensions for the layer</Popover.Description>
        </Popover.Header>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Field className="grid grid-cols-3 items-center gap-4">
              <Field.Label>Width</Field.Label>
              <Input className="col-span-2 h-8" defaultValue="100%" />
            </Field>
            <Field className="grid grid-cols-3 items-center gap-4">
              <Field.Label>Max. width</Field.Label>
              <Input className="col-span-2 h-8" defaultValue="300px" />
            </Field>
            <Field className="grid grid-cols-3 items-center gap-4">
              <Field.Label>Height</Field.Label>
              <Input className="col-span-2 h-8" defaultValue="25px" />
            </Field>
            <Field className="grid grid-cols-3 items-center gap-4">
              <Field.Label>Max. height</Field.Label>
              <Input className="col-span-2 h-8" defaultValue="none" />
            </Field>
          </div>
        </div>
      </Popover.Content>
    </Popover>
  )
}
