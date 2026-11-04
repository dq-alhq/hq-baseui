import { IconGitBranch, IconSearch } from "@tabler/icons-react"
import { Marker } from "@/components/ui/marker"
import { Spinner } from "@/components/ui/spinner"

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Marker>
        <Marker.Icon>
          <IconGitBranch />
        </Marker.Icon>
        <Marker.Content>Switched to a new branch</Marker.Content>
      </Marker>
      <Marker role="status">
        <Marker.Icon>
          <Spinner />
        </Marker.Icon>
        <Marker.Content className="shimmer">Thinking...</Marker.Content>
      </Marker>
      <Marker variant="separator">
        <Marker.Content>Conversation compacted</Marker.Content>
      </Marker>
      <Marker>
        <Marker.Icon>
          <IconSearch />
        </Marker.Icon>
        <Marker.Content>Explored 4 files</Marker.Content>
      </Marker>
    </div>
  )
}
