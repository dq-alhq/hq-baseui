import type { MarkdownHeading } from "@tanstack/markdown"
import { docsMarkdownExtensions } from "@tanstack/markdown/extensions/docs"
import { parseMarkdown } from "@tanstack/markdown/parser"
import { cn } from "cn"
import { LayoutGroup, motion } from "motion/react"
import { Suspense, useEffect, useId, useMemo, useRef, useState } from "react"

export function Toc({ className, content }: { className?: string; content: string }) {
  const document = parseMarkdown(content, {
    extensions: docsMarkdownExtensions()
  })

  const navRef = useRef<HTMLAnchorElement>(null)

  const headings = document.headings ?? []
  const ids = useMemo(() => headings.map((item) => item.id).filter(Boolean), [headings])
  const activeId = useActiveItem(ids)
  const activeIndex = ids.indexOf(activeId ?? "")
  const id = useId()
  const minDepth = headings.reduce((min, item) => Math.min(min, item.level), Infinity)

  useEffect(() => {
    if (!activeId || activeIndex < 2) return

    const nav = navRef.current
    const anchor = nav?.querySelector<HTMLAnchorElement>(`a[href="#${CSS.escape(activeId)}"]`)

    if (!nav || !anchor) return

    const anchorRect = anchor.getBoundingClientRect()
    const navRect = nav.getBoundingClientRect()

    nav.scrollTo({
      top: nav.scrollTop + anchorRect.top - navRect.top - (nav.clientHeight - anchorRect.height) / 2,
      behavior: "smooth"
    })
  }, [activeId, activeIndex])

  return (
    <LayoutGroup id={id}>
      <aside className={cn("w-80", className)}>
        <nav
          aria-labelledby={`${id}-title`}
          className="scroll-fade-y relative h-[calc(100vh-22rem)] scrollbar-none overflow-y-auto p-6"
          ref={navRef}
        >
          <Suspense>
            {headings.length > 0 && (
              <>
                <h2 className="text-muted-foreground mb-4 text-sm/6" id={`${id}-title`}>
                  On this page
                </h2>

                <ul className="flex flex-col gap-y-2">
                  {headings.map((item) => (
                    <TocLink activeId={activeId} item={item} key={item.id} minDepth={minDepth} />
                  ))}
                </ul>
              </>
            )}
          </Suspense>
        </nav>
      </aside>
    </LayoutGroup>
  )
}

function TocLink({ item, activeId, minDepth }: { item: MarkdownHeading; activeId: string | null; minDepth: number }) {
  const isActive = item.id === activeId

  return (
    <li className="relative">
      {isActive && (
        <motion.span
          className="bg-primary absolute top-1/2 -left-6 hidden h-6 w-0.5 -translate-y-1/2 rounded-full md:block"
          layoutId="currentIndicator"
          transition={{
            type: "spring",
            stiffness: 450,
            damping: 35,
            mass: 0.8
          }}
        />
      )}

      <a
        aria-current={isActive ? "location" : undefined}
        className={cn(
          "block text-sm tracking-tight no-underline outline-hidden duration-200",
          "focus-visible:text-primary focus-visible:outline-hidden",
          "text-muted-foreground/90 data-[active=true]:text-primary"
        )}
        data-active={isActive}
        href={`#${item.id}`}
        style={{
          marginLeft: (item.level - minDepth) * 16
        }}
      >
        {item.text}
      </a>
    </li>
  )
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const elements = itemIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (!elements.length) return

    let ticking = false

    const updateActiveItem = () => {
      ticking = false

      // Garis aktivasi berada sekitar 25% dari atas viewport.
      const activationLine = window.innerHeight * 0.2

      let currentId = elements[0].id

      for (const element of elements) {
        if (element.getBoundingClientRect().top <= activationLine) {
          currentId = element.id
        } else {
          break
        }
      }

      setActiveId((previous) => (previous === currentId ? previous : currentId))
    }

    const scheduleUpdate = () => {
      if (ticking) return

      ticking = true
      requestAnimationFrame(updateActiveItem)
    }

    window.addEventListener("scroll", scheduleUpdate, { passive: true })
    window.addEventListener("resize", scheduleUpdate)

    updateActiveItem()

    return () => {
      window.removeEventListener("scroll", scheduleUpdate)
      window.removeEventListener("resize", scheduleUpdate)
    }
  }, [itemIds])

  return activeId
}
