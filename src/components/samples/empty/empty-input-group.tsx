import { IconSearch } from "@tabler/icons-react"
import { Empty } from "@/components/ui/empty"
import { InputGroup } from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"

export default () => {
  return (
    <Empty>
      <Empty.Header>
        <Empty.Title>404 - Not Found</Empty.Title>
        <Empty.Description>
          The page you&apos;re looking for doesn&apos;t exist. Try searching for what you need below.
        </Empty.Description>
      </Empty.Header>
      <Empty.Content>
        <InputGroup className="sm:w-3/4">
          <InputGroup.Input placeholder="Try searching for pages..." />
          <InputGroup.Addon>
            <IconSearch />
          </InputGroup.Addon>
          <InputGroup.Addon align="inline-end">
            <Kbd>/</Kbd>
          </InputGroup.Addon>
        </InputGroup>
        <Empty.Description>
          Need help? <a href="#">Contact support</a>
        </Empty.Description>
      </Empty.Content>
    </Empty>
  )
}
