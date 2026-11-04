import { IconChevronRight, IconExternalLink } from "@tabler/icons-react"
import { Item } from "@/components/ui/item"

export default () => {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Item render={<a href="#" />}>
        <Item.Content>
          <Item.Title>Visit our documentation</Item.Title>
          <Item.Description>Learn how to get started with our components.</Item.Description>
        </Item.Content>
        <Item.Actions>
          <IconChevronRight className="size-4" />
        </Item.Actions>
      </Item>
      <Item render={<a href="#" rel="noopener noreferrer" target="_blank" />} variant="outline">
        <Item.Content>
          <Item.Title>External resource</Item.Title>
          <Item.Description>Opens in a new tab with security attributes.</Item.Description>
        </Item.Content>
        <Item.Actions>
          <IconExternalLink className="size-4" />
        </Item.Actions>
      </Item>
    </div>
  )
}
