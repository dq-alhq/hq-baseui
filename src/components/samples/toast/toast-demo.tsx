"use client"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export default () => {
  function showToast() {
    const id = toast.add({
      title: "Event created",
      description: "Sunday, December 3 at 9:00 AM",
      actionProps: {
        children: "Undo",
        onClick() {
          toast.close(id)
        }
      }
    })
  }

  return (
    <Button onClick={showToast} variant="outline">
      Show Toast
    </Button>
  )
}
