import { IconBrandJavascript, IconCopy, IconCornerDownLeft, IconRefresh } from "@tabler/icons-react"
import { InputGroup } from "@/components/ui/input-group"

export default () => {
  return (
    <div className="grid w-full max-w-md gap-4">
      <InputGroup>
        <InputGroup.Textarea className="min-h-50" id="textarea-code-32" placeholder="console.log('Hello, world!');" />
        <InputGroup.Addon align="block-end" className="border-t">
          <InputGroup.Text>Line 1, Column 1</InputGroup.Text>
          <InputGroup.Button className="ml-auto" size="sm" variant="primary">
            Run <IconCornerDownLeft />
          </InputGroup.Button>
        </InputGroup.Addon>
        <InputGroup.Addon align="block-start" className="border-b">
          <InputGroup.Text className="font-mono font-medium">
            <IconBrandJavascript />
            script.js
          </InputGroup.Text>
          <InputGroup.Button className="ml-auto" size="icon-xs">
            <IconRefresh />
          </InputGroup.Button>
          <InputGroup.Button size="icon-xs" variant="ghost">
            <IconCopy />
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
    </div>
  )
}
