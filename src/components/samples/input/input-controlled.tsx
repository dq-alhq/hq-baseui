import { useState } from "react";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default () => {
  const [value, setValue] = useState("");

  return (
    <Field className="w-full max-w-sm">
      <Field.Label>Name</Field.Label>
      <Input
        onChange={(event) => setValue(event.target.value)}
        placeholder="Enter your name"
        value={value}
      />
      <Field.Description>
        {value === "" ? "Start typing your name." : `Hello, ${value}!`}
      </Field.Description>
    </Field>
  );
};
