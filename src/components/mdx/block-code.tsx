import { type ComponentProps, type JSX, Suspense, useCallback, useRef } from "react"
import { FileIcon } from "@/components/mdx/file-icon"
import { useCopyButton } from "@/hooks/use-copy"
import { Skeleton } from "../ui/skeleton"
import { CopyButton } from "./copy-button"

export const Figure = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const areaRef = useRef<HTMLDivElement>(null)
  const onCopy = useCallback(() => {
    const pre = areaRef.current?.getElementsByTagName("pre").item(0)

    if (!pre) return

    const clone = pre.cloneNode(true) as HTMLElement
    for (const node of clone.querySelectorAll(".nd-copy-ignore")) {
      node.remove()
    }
    void navigator.clipboard.writeText(clone.textContent ?? "")
  }, [])
  const [checked, onClick] = useCopyButton(onCopy)
  return (
    <Suspense fallback={<Skeleton className="flex size-full items-center justify-center" />}>
      <figure className="relative my-4 overflow-hidden rounded-lg border text-sm shadow-sm" ref={areaRef}>
        {Array.isArray(children) ? (
          <>
            <figcaption className="bg-accent text-accent-foreground flex w-full flex-row items-center justify-between p-1">
              <div className="ml-2 flex items-center gap-2">
                <FileIcon
                  className="text-accent-foreground size-4"
                  lang={children[0].props?.children.split(".").at(-1) ?? ""}
                />
                <span className="text-accent-foreground flex-1 truncate font-mono">{children[0].props?.children}</span>
              </div>
              <CopyButton className="z-10" isCopied={checked} onClick={onClick} />
            </figcaption>
            <Pre {...children[1].props} />
          </>
        ) : (
          <>
            <CopyButton className="peer absolute top-2 right-2 z-10" isCopied={checked} onClick={onClick} />
            <Pre {...children.props} />
          </>
        )}
      </figure>
    </Suspense>
  )
}

export const Pre = (props: ComponentProps<"pre">) => {
  return (
    <Suspense fallback={<Skeleton className="m-2 flex h-64 items-center justify-center" />}>
      <pre className="shiki max-h-64 w-full overflow-auto p-2 focus-visible:outline-hidden" {...props} />
    </Suspense>
  )
}
