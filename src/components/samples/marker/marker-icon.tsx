import { IconBookUpload, IconGitBranch, IconSearch } from "@tabler/icons-react"
import { Marker } from "@/components/ui/marker"

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-12 py-12">
      <Marker>
        <Marker.Icon>
          <IconGitBranch />
        </Marker.Icon>
        <Marker.Content>Switched to a new branch</Marker.Content>
      </Marker>
      <Marker variant="separator">
        <Marker.Icon>
          <IconSearch />
        </Marker.Icon>
        <Marker.Content>Explored 4 files</Marker.Content>
      </Marker>
      <Marker className="flex-col">
        <Marker.Icon>
          <IconBookUpload />
        </Marker.Icon>
        <Marker.Content>Syncing completed</Marker.Content>
      </Marker>
    </div>
  )
}
