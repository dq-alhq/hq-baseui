import { IconFileText, IconGitBranch, IconSearch } from "@tabler/icons-react"
import { Marker } from "@/components/ui/marker"

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 py-12">
      <Marker variant="border">
        <Marker.Icon>
          <IconGitBranch />
        </Marker.Icon>
        <Marker.Content>Switched to release-candidate</Marker.Content>
      </Marker>
      <Marker variant="border">
        <Marker.Icon>
          <IconSearch />
        </Marker.Icon>
        <Marker.Content>Reviewed 8 related files</Marker.Content>
      </Marker>
      <Marker variant="border">
        <Marker.Icon>
          <IconFileText />
        </Marker.Icon>
        <Marker.Content>Opened implementation notes</Marker.Content>
      </Marker>
    </div>
  )
}
