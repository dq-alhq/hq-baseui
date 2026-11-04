import { IconCopy, IconFileCode } from "@tabler/icons-react"
import { Field } from "@/components/ui/field"
import { InputGroup } from "@/components/ui/input-group"

export default () => {
  return (
    <Field.Set className="max-w-sm">
      <Field>
        <Field.Label htmlFor="block-start-input">Input</Field.Label>
        <InputGroup className="h-auto">
          <InputGroup.Input id="block-start-input" placeholder="Enter your name" />
          <InputGroup.Addon align="block-start">
            <InputGroup.Text>Full Name</InputGroup.Text>
          </InputGroup.Addon>
        </InputGroup>
        <Field.Description>Header positioned above the input.</Field.Description>
      </Field>
      <Field>
        <Field.Label htmlFor="block-start-textarea">Textarea</Field.Label>
        <InputGroup>
          <InputGroup.Textarea
            className="font-mono text-sm"
            id="block-start-textarea"
            placeholder="console.log('Hello, world!');"
          />
          <InputGroup.Addon align="block-start">
            <IconFileCode className="text-muted-foreground" />
            <InputGroup.Text className="font-mono">script.js</InputGroup.Text>
            <InputGroup.Button className="ml-auto" size="icon-xs">
              <IconCopy />
              <span className="sr-only">Copy</span>
            </InputGroup.Button>
          </InputGroup.Addon>
        </InputGroup>
        <Field.Description>Header positioned above the textarea.</Field.Description>
      </Field>
    </Field.Set>
  )
}
