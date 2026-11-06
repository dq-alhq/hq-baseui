import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NumberField } from "@/components/ui/number-field";

export default () => {
  const [value, setValue] = useState<number | null>(1);

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <NumberField max={10} min={0} onValueChange={setValue} value={value}>
        <NumberField.Label>Quantity</NumberField.Label>
        <NumberField.Input />
      </NumberField>
      <div className="flex flex-wrap items-center gap-2">
        <Button onClick={() => setValue(5)} size="sm" variant="outline">
          Set to 5
        </Button>
        <Button onClick={() => setValue(null)} size="sm" variant="outline">
          Clear
        </Button>
        <span className="text-muted-foreground text-sm">Value: {value ?? "empty"}</span>
      </div>
    </div>
  );
};
