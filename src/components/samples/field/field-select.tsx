import { Field } from "@/components/ui/field"
import { Select } from "@/components/ui/select"

const items = [
  { label: "Choose department", value: null },
  { label: "Engineering", value: "engineering" },
  { label: "Design", value: "design" },
  { label: "Marketing", value: "marketing" },
  { label: "Sales", value: "sales" },
  { label: "Customer Support", value: "support" },
  { label: "Human Resources", value: "hr" },
  { label: "Finance", value: "finance" },
  { label: "Operations", value: "operations" }
]

export default () => {
  return (
    <Field className="w-full max-w-xs">
      <Field.Label>Department</Field.Label>
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
      <Field.Description>Select your department or area of work.</Field.Description>
    </Field>
  )
}
