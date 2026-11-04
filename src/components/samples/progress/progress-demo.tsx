"use client"

import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"

export default () => {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Progress value={progress}>
      <Progress.Label>Progress</Progress.Label>
      <Progress.Value />
    </Progress>
  )
}
