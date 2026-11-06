import { useState } from "react";
import { Combobox } from "@/components/ui/combobox";

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"] as const;

export default () => {
  const [value, setValue] = useState<string | null>("Remix");

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Combobox
        items={frameworks}
        onValueChange={(next) => setValue(next as string | null)}
        value={value}
      >
        <Combobox.Input placeholder="Select a framework" />
        <Combobox.Content>
          <Combobox.Empty>No items found.</Combobox.Empty>
          <Combobox.List>
            {(item) => (
              <Combobox.Item key={item} value={item}>
                {item}
              </Combobox.Item>
            )}
          </Combobox.List>
        </Combobox.Content>
      </Combobox>
      <span className="text-muted-foreground text-sm">Selected: {value ?? "none"}</span>
    </div>
  );
};
