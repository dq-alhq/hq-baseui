import { Field } from "@/components/ui/field"
import { NativeSelect } from "@/components/ui/native-select"

export default () => {
  return (
    <div className="w-xs">
      <Field disabled>
        <Field.Label>Disabled Select</Field.Label>
        <Field.Control className="w-full" render={<NativeSelect />}>
          <NativeSelect.Item value="">Disabled</NativeSelect.Item>
          <NativeSelect.Item value="apple">Apple</NativeSelect.Item>
          <NativeSelect.Item value="banana">Banana</NativeSelect.Item>
          <NativeSelect.Item value="blueberry">Blueberry</NativeSelect.Item>
        </Field.Control>
      </Field>
    </div>
  )
}
