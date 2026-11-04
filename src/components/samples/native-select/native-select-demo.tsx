import { Field } from "@/components/ui/field"
import { NativeSelect } from "@/components/ui/native-select"

export default () => {
  return (
    <Field>
      <Field.Control className="w-full" render={<NativeSelect />}>
        <NativeSelect.Item value="">Select status</NativeSelect.Item>
        <NativeSelect.Item value="todo">Todo</NativeSelect.Item>
        <NativeSelect.Item value="in-progress">In Progress</NativeSelect.Item>
        <NativeSelect.Item value="done">Done</NativeSelect.Item>
        <NativeSelect.Item value="cancelled">Cancelled</NativeSelect.Item>
      </Field.Control>
    </Field>
  )
}
