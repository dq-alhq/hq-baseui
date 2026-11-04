import { Field } from "@/components/ui/field"
import { NativeSelect } from "@/components/ui/native-select"

export default () => {
  return (
    <Field>
      <Field.Control className="w-full" render={<NativeSelect />}>
        <NativeSelect.Item value="">Select department</NativeSelect.Item>
        <NativeSelect.Group label="Engineering">
          <NativeSelect.Item value="frontend">Frontend</NativeSelect.Item>
          <NativeSelect.Item value="backend">Backend</NativeSelect.Item>
          <NativeSelect.Item value="devops">DevOps</NativeSelect.Item>
        </NativeSelect.Group>
        <NativeSelect.Group label="Sales">
          <NativeSelect.Item value="sales-rep">Sales Rep</NativeSelect.Item>
          <NativeSelect.Item value="account-manager">Account Manager</NativeSelect.Item>
          <NativeSelect.Item value="sales-director">Sales Director</NativeSelect.Item>
        </NativeSelect.Group>
        <NativeSelect.Group label="Operations">
          <NativeSelect.Item value="support">Customer Support</NativeSelect.Item>
          <NativeSelect.Item value="product-manager">Product Manager</NativeSelect.Item>
          <NativeSelect.Item value="ops-manager">Operations Manager</NativeSelect.Item>
        </NativeSelect.Group>
      </Field.Control>
    </Field>
  )
}
