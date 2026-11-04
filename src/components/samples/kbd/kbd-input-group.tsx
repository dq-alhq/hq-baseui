import { IconSearch } from "@tabler/icons-react"
import { InputGroup } from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"

export default () => {
  return (
    <div className="flex w-full max-w-xs flex-col gap-6">
      <InputGroup>
        <InputGroup.Input placeholder="Search..." />
        <InputGroup.Addon>
          <IconSearch />
        </InputGroup.Addon>
        <InputGroup.Addon align="inline-end">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </InputGroup.Addon>
      </InputGroup>
    </div>
  )
}
