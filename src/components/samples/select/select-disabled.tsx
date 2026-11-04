import { Select } from "@/components/ui/select"

export default () => {
  const items = [
    { label: "Select a fruit", value: null },
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
    { label: "Grapes", value: "grapes", disabled: true },
    { label: "Pineapple", value: "pineapple" }
  ]
  return (
    <Select disabled items={items}>
      <Select.Trigger className="w-full max-w-48">
        <Select.Value />
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          {items.map((item) => (
            <Select.Item disabled={item.disabled} key={item.value} value={item.value}>
              {item.label}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select>
  )
}
