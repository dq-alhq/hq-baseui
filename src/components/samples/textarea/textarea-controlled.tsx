import { useState } from "react";
import { Field } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

const MAX_LENGTH = 120;

export default () => {
  const [value, setValue] = useState("");

  return (
    <Field className="w-full max-w-sm">
      <Field.Label>Message</Field.Label>
      <Textarea
        maxLength={MAX_LENGTH}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Type your message here."
        value={value}
      />
      <Field.Description>
        {value.length}/{MAX_LENGTH} characters
      </Field.Description>
    </Field>
  );
};
