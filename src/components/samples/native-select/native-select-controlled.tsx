import { useState } from "react";
import { Field } from "@/components/ui/field";
import { NativeSelect } from "@/components/ui/native-select";

export default () => {
  const [value, setValue] = useState("in-progress");

  return (
    <Field className="w-full max-w-xs">
      <Field.Label>Status</Field.Label>
      <NativeSelect
        className="w-full"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      >
        <NativeSelect.Item value="">Select status</NativeSelect.Item>
        <NativeSelect.Item value="todo">Todo</NativeSelect.Item>
        <NativeSelect.Item value="in-progress">In Progress</NativeSelect.Item>
        <NativeSelect.Item value="done">Done</NativeSelect.Item>
        <NativeSelect.Item value="cancelled">Cancelled</NativeSelect.Item>
      </NativeSelect>
      <Field.Description>Selected: {value === "" ? "none" : value}</Field.Description>
    </Field>
  );
};
