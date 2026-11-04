"use client"

import { IconCode, IconDeviceDesktop, IconDeviceMobile, IconDeviceTablet, IconMaximize } from "@tabler/icons-react"
import { cn } from "cn"
import { useEffect, useRef, useState } from "react"
import { Install } from "@/components/mdx/install"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Dialog } from "@/components/ui/dialog"
import { toast } from "../ui/toast"
import { ToggleGroup } from "../ui/toggle"
import { Tooltip } from "../ui/tooltip"

export function Iframe({ component }: { component: string }) {
  const [screenWidth, setScreenWidth] = useState("desktop")
  const [isVisible, setIsVisible] = useState(false)
  const frameRef = useRef<HTMLDivElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [code, setCode] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!isOpen || code || isLoading) return
    setIsLoading(true)
    fetch(`/r/${component}`)
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load code")
        const data = await res.json()
        setCode(data.files[0].content)
      })
      .catch(() => {
        toast.add({ description: "Failed to load code." })
      })
      .finally(() => setIsLoading(false))
  }, [code, isLoading, isOpen, component])

  useEffect(() => {
    const element = frameRef.current
    if (!element || isVisible) return
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px 0px" }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [isVisible])

  return (
    <div className="group/demo relative overflow-hidden rounded-lg border py-0">
      <div className="flex h-0 w-full items-center justify-between gap-1 overflow-hidden backdrop-blur-2xl transition-[height,padding,border] group-hover/demo:h-12 group-hover/demo:border-b group-hover/demo:p-2">
        <Badge className="text-xs font-medium">{component.split("/").pop()}</Badge>
        <div className="hidden gap-1 sm:flex">
          <ToggleGroup
            onValueChange={(v) => setScreenWidth(v[0])}
            size="sm"
            spacing={0}
            value={[screenWidth]}
            variant="outline"
          >
            <Tooltip>
              <Tooltip.Trigger
                render={
                  <ToggleGroup.Item value="mobile">
                    <IconDeviceMobile />
                  </ToggleGroup.Item>
                }
              />
              <Tooltip.Content>
                <p>Mobile</p>
              </Tooltip.Content>
            </Tooltip>
            <Tooltip>
              <Tooltip.Trigger
                render={
                  <ToggleGroup.Item value="tablet">
                    <IconDeviceTablet />
                  </ToggleGroup.Item>
                }
              />
              <Tooltip.Content>
                <p>Tablet</p>
              </Tooltip.Content>
            </Tooltip>
            <Tooltip>
              <Tooltip.Trigger
                render={
                  <ToggleGroup.Item value="desktop">
                    <IconDeviceDesktop />
                  </ToggleGroup.Item>
                }
              />
              <Tooltip.Content>
                <p>Desktop</p>
              </Tooltip.Content>
            </Tooltip>
          </ToggleGroup>
          <Dialog onOpenChange={setIsOpen} open={isOpen}>
            <Tooltip>
              <Tooltip.Trigger
                render={
                  <Dialog.Trigger
                    render={
                      <Button size="icon-sm" variant="outline">
                        <IconCode />
                      </Button>
                    }
                  />
                }
              />
              <Tooltip.Content>
                <p>View Code</p>
              </Tooltip.Content>
            </Tooltip>
            <Dialog.Content className="sm:max-w-7xl">
              <Dialog.Header>
                <Dialog.Title>{component.split("/").pop()}</Dialog.Title>
              </Dialog.Header>
              <Install component={component.split("/").pop() || ""} />
            </Dialog.Content>
          </Dialog>
          <Tooltip>
            <Tooltip.Trigger
              render={
                <a
                  className={buttonVariants({ variant: "outline", size: "icon-sm" })}
                  href={`/block/${component}`}
                  rel="noopener"
                  target="_blank"
                >
                  <IconMaximize />
                </a>
              }
            />
            <Tooltip.Content>
              <p>Open in new tab</p>
            </Tooltip.Content>
          </Tooltip>
        </div>
      </div>
      {/** biome-ignore lint/a11y/noStaticElementInteractions: false-positive */}
      <section
        className="bg-background relative flex min-h-56 w-full items-center justify-center lg:min-h-64"
        onMouseEnter={() => setIsVisible(true)}
        ref={frameRef}
      >
        <iframe
          allowFullScreen
          className={cn("relative z-20 w-full overflow-hidden")}
          height={768}
          loading="lazy"
          src={isVisible ? `/block/${component}` : undefined}
          style={{
            zoom: 0.6,
            transformOrigin: "center",
            width: screenWidth === "desktop" ? "100%" : screenWidth === "tablet" ? "768px" : "375px"
          }}
          title="Preview"
        />
      </section>
    </div>
  )
}
