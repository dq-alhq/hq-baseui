import type { ComponentProps, ReactNode } from "react"
import { IconCheck, IconCopy } from "@tabler/icons-react"
import { cn } from "cn"
import { Button } from "@/components/ui/button"

interface CopyButtonProps extends ComponentProps<typeof Button> {
  isCopied?: boolean
}

export const CopyButton = ({ isCopied, ...props }: CopyButtonProps) => {
  return (
    <Button aria-label="Copy" size={props.size ?? "icon-sm"} variant={props.variant ?? "secondary"} {...props}>
      <IconCopy
        className={cn(
          "scale-100 rotate-0 transition-all duration-200",
          isCopied && "absolute scale-0 rotate-90 transition-none"
        )}
      />
      <IconCheck
        className={cn(
          "absolute scale-0 rotate-90",
          isCopied && "relative scale-100 rotate-0 transition-all duration-200"
        )}
      />
      {props?.children as ReactNode}
    </Button>
  )
}
