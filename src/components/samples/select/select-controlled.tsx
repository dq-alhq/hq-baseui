import { useState } from "react";
import { Select } from "@/components/ui/select";

const items = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" },
];

export default () => {
  const [value, setValue] = useState<string | null>("apple");

  return (
    <div className="flex flex-col gap-3">
      <Select items={items} onValueChange={(next) => setValue(next as string | null)} value={value}>
        <Select.Trigger className="w-full max-w-48">
          <Select.Value />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            {items.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select>
      <span className="text-muted-foreground text-sm">Selected: {value ?? "none"}</span>
    </div>
  );
};
