import { useState } from "react";
import { Field } from "@/components/ui/field";
import { Radio } from "@/components/ui/radio";

const options = [
  { value: "default", label: "Default" },
  { value: "comfortable", label: "Comfortable" },
  { value: "compact", label: "Compact" },
];

export default () => {
  const [value, setValue] = useState("comfortable");

  return (
    <div className="flex flex-col gap-3">
      <Radio.Group className="w-fit" onValueChange={setValue} value={value}>
        {options.map((option) => (
          <Field key={option.value}>
            <Radio value={option.value} />
            <Field.Label>{option.label}</Field.Label>
          </Field>
        ))}
      </Radio.Group>
      <span className="text-muted-foreground text-sm">Selected: {value}</span>
    </div>
  );
};
