import { IconArrowUp, IconCode, IconCopy, IconInfoCircle, IconRefresh } from "@tabler/icons-react"
import { Field } from "@/components/ui/field"
import { InputGroup } from "@/components/ui/input-group"
import { Textarea } from "@/components/ui/textarea"

export default () => {
  return (
    <Field.Set>
      <Field>
        <Field.Label htmlFor="textarea-header-footer-12">Default Textarea (No Input Group)</Field.Label>
        <Textarea id="textarea-header-footer-12" placeholder="Enter your text here..." />
      </Field>
      <Field>
        <Field.Label htmlFor="textarea-header-footer-13">Input Group</Field.Label>
        <InputGroup>
          <InputGroup.Textarea id="textarea-header-footer-13" placeholder="Enter your text here..." />
        </InputGroup>
        <Field.Description>This is a description of the input group.</Field.Description>
      </Field>
      <Field data-invalid="true">
        <Field.Label htmlFor="textarea-header-footer-14">Invalid</Field.Label>
        <InputGroup>
          <InputGroup.Textarea
            aria-invalid="true"
            id="textarea-header-footer-14"
            placeholder="Enter your text here..."
          />
        </InputGroup>
        <Field.Description>This is a description of the input group.</Field.Description>
      </Field>
      <Field data-disabled="true">
        <Field.Label htmlFor="textarea-header-footer-15">Disabled</Field.Label>
        <InputGroup>
          <InputGroup.Textarea disabled id="textarea-header-footer-15" placeholder="Enter your text here..." />
        </InputGroup>
        <Field.Description>This is a description of the input group.</Field.Description>
      </Field>
      <Field>
        <Field.Label htmlFor="prompt-31">Addon (block-start)</Field.Label>
        <InputGroup>
          <InputGroup.Textarea id="prompt-31" />
          <InputGroup.Addon align="block-start">
            <InputGroup.Text>Ask, Search or Chat...</InputGroup.Text>
            <IconInfoCircle className="text-muted-foreground ml-auto" />
          </InputGroup.Addon>
        </InputGroup>
        <Field.Description>This is a description of the input group.</Field.Description>
      </Field>
      <Field>
        <Field.Label htmlFor="textarea-header-footer-30">Addon (block-end)</Field.Label>
        <InputGroup>
          <InputGroup.Textarea id="textarea-header-footer-30" placeholder="Enter your text here..." />
          <InputGroup.Addon align="block-end">
            <InputGroup.Text>0/280 characters</InputGroup.Text>
            <InputGroup.Button className="ml-auto rounded-full" size="icon-xs" variant="primary">
              <IconArrowUp />
              <span className="sr-only">Send</span>
            </InputGroup.Button>
          </InputGroup.Addon>
        </InputGroup>
      </Field>
      <Field>
        <Field.Label htmlFor="textarea-comment-31">Addon (Buttons)</Field.Label>
        <InputGroup>
          <InputGroup.Textarea className="min-h-30" id="textarea-comment-31" placeholder="Share your thoughts..." />
          <InputGroup.Addon align="block-end">
            <InputGroup.Button className="ml-auto" size="sm" variant="ghost">
              Cancel
            </InputGroup.Button>
            <InputGroup.Button size="sm" variant="primary">
              Post Comment
            </InputGroup.Button>
          </InputGroup.Addon>
        </InputGroup>
      </Field>
      <Field>
        <Field.Label htmlFor="textarea-code-32">Code Editor</Field.Label>
        <InputGroup>
          <InputGroup.Textarea
            className="min-h-75 py-3"
            id="textarea-code-32"
            placeholder="console.log('Hello, world!');"
          />
          <InputGroup.Addon align="block-start" className="border-b">
            <InputGroup.Text className="font-mono font-medium">
              <IconCode />
              script.js
            </InputGroup.Text>
            <InputGroup.Button className="ml-auto" size="icon-xs">
              <IconRefresh />
            </InputGroup.Button>
            <InputGroup.Button size="icon-xs" variant="ghost">
              <IconCopy />
            </InputGroup.Button>
          </InputGroup.Addon>
          <InputGroup.Addon align="block-end" className="border-t">
            <InputGroup.Text>Line 1, Column 1</InputGroup.Text>
            <InputGroup.Text className="ml-auto">JavaScript</InputGroup.Text>
          </InputGroup.Addon>
        </InputGroup>
      </Field>
    </Field.Set>
  )
}
