import { IconInbox } from "@tabler/icons-react"
import { Item } from "@/components/ui/item"

export default () => {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <Item.Media variant="icon">
          <IconInbox />
        </Item.Media>
        <Item.Content>
          <Item.Title>Default Size</Item.Title>
          <Item.Description>The standard size for most use cases.</Item.Description>
        </Item.Content>
      </Item>
      <Item size="sm" variant="outline">
        <Item.Media variant="icon">
          <IconInbox />
        </Item.Media>
        <Item.Content>
          <Item.Title>Small Size</Item.Title>
          <Item.Description>A compact size for dense layouts.</Item.Description>
        </Item.Content>
      </Item>
      <Item size="xs" variant="outline">
        <Item.Media variant="icon">
          <IconInbox />
        </Item.Media>
        <Item.Content>
          <Item.Title>Extra Small Size</Item.Title>
          <Item.Description>The most compact size available.</Item.Description>
        </Item.Content>
      </Item>
    </div>
  )
}
