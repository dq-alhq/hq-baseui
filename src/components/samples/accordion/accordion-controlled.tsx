import { useState } from "react";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const items = [
  {
    value: "account",
    trigger: "Account Settings",
    content: "Update your profile information, change your email address, or reset your password.",
  },
  {
    value: "notifications",
    trigger: "Notification Preferences",
    content: "Choose which email and push notifications you want to receive and how often.",
  },
  {
    value: "billing",
    trigger: "Billing & Subscription",
    content: "View your current plan, payment history, and upcoming invoices.",
  },
];

export default () => {
  const [value, setValue] = useState<string[]>(["account"]);

  return (
    <div className="flex w-full max-w-lg flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button
          onClick={() => setValue(items.map((item) => item.value))}
          size="sm"
          variant="outline"
        >
          Expand all
        </Button>
        <Button onClick={() => setValue([])} size="sm" variant="outline">
          Collapse all
        </Button>
        <span className="text-muted-foreground text-sm">
          Open: {value.length > 0 ? value.join(", ") : "none"}
        </span>
      </div>
      <Accordion multiple onValueChange={setValue} value={value}>
        {items.map((item) => (
          <Accordion.Item key={item.value} value={item.value}>
            <Accordion.Trigger>{item.trigger}</Accordion.Trigger>
            <Accordion.Content>{item.content}</Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};
