import { IconSearch } from "@tabler/icons-react"
import { InputGroup } from "@/components/ui/input-group"

export default () => {
  return (
    <InputGroup className="max-w-xs">
      <InputGroup.Input placeholder="Search..." />
      <InputGroup.Addon>
        <IconSearch />
      </InputGroup.Addon>
      <InputGroup.Addon align="inline-end">12 results</InputGroup.Addon>
    </InputGroup>
  )
}
