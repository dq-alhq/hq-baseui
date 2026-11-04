import { IconInbox } from "@tabler/icons-react"
import { Item } from "@/components/ui/item"

export default () => {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item>
        <Item.Media variant="icon">
          <IconInbox />
        </Item.Media>
        <Item.Content>
          <Item.Title>Default Variant</Item.Title>
          <Item.Description>Transparent background with no border.</Item.Description>
        </Item.Content>
      </Item>
      <Item variant="outline">
        <Item.Media variant="icon">
          <IconInbox />
        </Item.Media>
        <Item.Content>
          <Item.Title>Outline Variant</Item.Title>
          <Item.Description>Outlined style with a visible border.</Item.Description>
        </Item.Content>
      </Item>
      <Item variant="muted">
        <Item.Media variant="icon">
          <IconInbox />
        </Item.Media>
        <Item.Content>
          <Item.Title>Muted Variant</Item.Title>
          <Item.Description>Muted background for secondary content.</Item.Description>
        </Item.Content>
      </Item>
    </div>
  )
}
