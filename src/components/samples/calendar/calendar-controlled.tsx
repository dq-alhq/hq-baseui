"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export default () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col items-center gap-3">
      <Calendar className="rounded-lg border" mode="single" onSelect={setDate} selected={date} />
      <span className="text-muted-foreground text-sm">
        Selected: {date ? date.toDateString() : "none"}
      </span>
    </div>
  );
};
