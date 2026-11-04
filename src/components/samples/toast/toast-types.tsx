"use client"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export default () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => toast.add({ description: "Event has been created." })} variant="outline">
        Default
      </Button>
      <Button
        onClick={() =>
          toast.add({
            type: "success",
            description: "Event has been created."
          })
        }
        variant="outline"
      >
        Success
      </Button>
      <Button
        onClick={() =>
          toast.add({
            type: "info",
            description: "Arrive 10 minutes before the event."
          })
        }
        variant="outline"
      >
        Info
      </Button>
      <Button
        onClick={() =>
          toast.add({
            type: "warning",
            description: "The event cannot start before 8:00 AM."
          })
        }
        variant="outline"
      >
        Warning
      </Button>
      <Button
        onClick={() =>
          toast.add({
            type: "error",
            description: "The event could not be created.",
            priority: "high"
          })
        }
        variant="outline"
      >
        Error
      </Button>
    </div>
  )
}
