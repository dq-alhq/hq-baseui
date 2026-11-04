import type { ComponentProps } from "react"
import { IconSelector } from "@tabler/icons-react"
import { cn } from "cn"

type NativeSelectProps = Omit<ComponentProps<"select">, "size"> & {
  size?: "sm" | "default"
}

function NativeSelect({ className, size = "default", ...props }: NativeSelectProps) {
  return (
    <div
      className={cn("group/native-select relative w-fit has-[select:disabled]:opacity-50", className)}
      data-size={size}
      data-slot="native-select-wrapper"
    >
      <select
        className="border-input selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 h-8 w-full min-w-0 appearance-none rounded-lg border bg-transparent py-1 pr-8 pl-2.5 text-sm transition-colors outline-none select-none focus-visible:ring-3 disabled:pointer-events-none disabled:cursor-not-allowed aria-invalid:ring-3 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-[size=sm]:py-0.5"
        data-size={size}
        data-slot="native-select"
        slot="control"
        {...props}
      />
      <IconSelector
        aria-hidden="true"
        className="text-muted-foreground pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 select-none"
        data-slot="native-select-icon"
      />
    </div>
  )
}

function NativeSelectItem({ className, ...props }: ComponentProps<"option">) {
  return (
    <option className={cn("bg-[Canvas] text-[CanvasText]", className)} data-slot="native-select-option" {...props} />
  )
}

function NativeSelectGroup({ className, ...props }: ComponentProps<"optgroup">) {
  return (
    <optgroup
      className={cn("bg-[Canvas] text-[CanvasText]", className)}
      data-slot="native-select-optgroup"
      {...props}
    />
  )
}

NativeSelect.Item = NativeSelectItem
NativeSelect.Group = NativeSelectGroup

export { NativeSelect, NativeSelectGroup, NativeSelectItem }
