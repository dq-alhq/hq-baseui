import { Field } from "@/components/ui/field"
import { Select } from "@/components/ui/select"

const items = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" }
]

export default () => {
  return (
    <Field className="w-full max-w-48" invalid>
      <Field.Label>Fruit</Field.Label>
      <Select items={items}>
        <Select.Trigger>
          <Select.Value />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            {items.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select>
      <Field.Error>Please select a fruit.</Field.Error>
    </Field>
  )
}
