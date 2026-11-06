import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { Field } from "@/components/ui/field";

export default () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="mx-auto flex w-44 flex-col gap-3">
      <Field>
        <Field.Label>Date</Field.Label>
        <DatePicker onChange={setDate} value={date} />
      </Field>
      <Button onClick={() => setDate(new Date())} size="sm" variant="outline">
        Today
      </Button>
      <span className="text-muted-foreground text-sm">
        Selected: {date ? date.toDateString() : "none"}
      </span>
    </div>
  );
};
