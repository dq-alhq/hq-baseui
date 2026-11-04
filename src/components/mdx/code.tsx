import type { PropsWithChildren } from "react"
import { cn } from "cn"
import { CodeCopy } from "./copy"

export interface CodeProps extends PropsWithChildren {
  lang?: string
  code: string
  className?: string
  copy?: boolean
}

export const Code = async ({ lang = "tsx", className, copy = false, ...props }: CodeProps) => {
  return (
    <div className="relative w-full">
      <div
        {...props}
        className={cn(
          "relative my-4 w-full max-w-none overflow-hidden text-sm",
          "**:[pre]:max-h-96 **:[pre]:overflow-auto",
          "**:[pre]:[&::-webkit-scrollbar-thumb]:bg-muted-foreground/20 **:[pre]:[&::-webkit-scrollbar-track]:bg-muted **:[pre]:[&::-webkit-scrollbar]:size-1.5 **:[pre]:[&::-webkit-scrollbar]:bg-transparent **:[pre]:[&::-webkit-scrollbar-thumb]:rounded-lg **:[pre]:[&::-webkit-scrollbar-track]:rounded-lg",
          className
        )}
      />
      {copy && (
        <CodeCopy
          className="bg-card absolute top-1 right-1 z-10"
          code={typeof props.children === "string" ? props.children : ""}
        />
      )}
    </div>
  )
}
