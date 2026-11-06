import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import { Form } from "@base-ui/react";
import { toast } from "#/components/ui/toast";
import { Button } from "#/components/ui/button";

export default () => {
  const [active, setActive] = useState<boolean>(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const value = formData.get("subscription") as string;

    toast.add({ description: value });
  };

  return (
    <Form onSubmit={submit} className="space-y-4">
      <Field name="subscription">
        <Checkbox
          value="active"
          uncheckedValue="inactive"
          checked={active}
          onCheckedChange={setActive}
        />
        <Field.Label>Email Subscription</Field.Label>
      </Field>
      <Button type="submit">Submit</Button>
      <pre className="rounded-lg border border-dashed p-2 text-xs">
        {JSON.stringify({ active }, null, 2)}
      </pre>
    </Form>
  );
};
