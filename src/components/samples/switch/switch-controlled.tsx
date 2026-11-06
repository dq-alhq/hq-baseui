import { useState } from "react";
import { Field } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";

export default () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex max-w-xs flex-col gap-3">
      <Field>
        <Switch checked={checked} onCheckedChange={setChecked} />
        <Field.Label>Airplane Mode</Field.Label>
      </Field>
      <span className="text-muted-foreground text-sm">
        Airplane mode is {checked ? "on" : "off"}.
      </span>
    </div>
  );
};
