"use client"

import { IconGitBranch, IconRotateClockwise } from "@tabler/icons-react"
import { Marker } from "@/components/ui/marker"
import { toast } from "@/components/ui/toast"

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Marker render={<a href="#links-and-buttons" />}>
        <Marker.Icon>
          <IconGitBranch />
        </Marker.Icon>
        <Marker.Content>View the pull request</Marker.Content>
      </Marker>
      <Marker
        render={
          <button
            className="hover:text-foreground transition-colors"
            onClick={() => toast.add({ description: "You clicked the revert button" })}
            type="button"
          />
        }
      >
        <Marker.Icon>
          <IconRotateClockwise />
        </Marker.Icon>
        <Marker.Content>Revert this change</Marker.Content>
      </Marker>
    </div>
  )
}
