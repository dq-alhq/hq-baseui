"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default () => {
  const [key, setKey] = useState(0)

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="shimmer text-muted-foreground shimmer-duration-1100 shimmer-once text-sm" key={key}>
        Generating response&hellip;
      </p>
      <Button onClick={() => setKey((value) => value + 1)} size="sm" variant="outline">
        Replay
      </Button>
    </div>
  )
}
