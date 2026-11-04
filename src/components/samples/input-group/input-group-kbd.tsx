import { IconSearch } from "@tabler/icons-react"
import { InputGroup } from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"

export default () => {
  return (
    <InputGroup className="max-w-sm">
      <InputGroup.Input placeholder="Search..." />
      <InputGroup.Addon>
        <IconSearch className="text-muted-foreground" />
      </InputGroup.Addon>
      <InputGroup.Addon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroup.Addon>
    </InputGroup>
  )
}
