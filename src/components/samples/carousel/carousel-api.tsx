"use client"

import { cn } from "cn"
import { useEffect, useState } from "react"
import { Carousel, type CarouselApi } from "@/components/ui/carousel"

export default () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const handleSelect = (index: number) => {
    if (api) {
      api.scrollTo(index)
      setCurrent(index + 1)
    }
  }

  return (
    <Carousel className="w-full max-w-xs" setApi={setApi}>
      <Carousel.Content>
        {Array.from({ length: 10 }, (_, id) => ({ id: id + 1 })).map(({ id }) => (
          <Carousel.Item key={id}>
            <div className="flex items-center justify-center rounded-xl border p-6">
              <span className="text-4xl font-semibold">{id}</span>
            </div>
          </Carousel.Item>
        ))}
      </Carousel.Content>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-muted-foreground flex gap-1 py-2 text-center text-sm">
          {Array.from({ length: 10 }).map((_, index) => (
            <button
              aria-label={`Slide ${current} of ${count}`}
              className={cn(
                "rounded-xl transition focus:outline-hidden",
                current === index + 1
                  ? "bg-primary hover:bg-primary/80 h-3 w-5 transition-all"
                  : "bg-foreground/10 hover:bg-foreground/15 h-3 w-3"
              )}
              key={index}
              onClick={() => handleSelect(index)}
              type="button"
            />
          ))}
        </div>

        <div className="space-x-2">
          <Carousel.Button segment="previous" />
          <Carousel.Button segment="next" />
        </div>
      </div>
    </Carousel>
  )
}
