import { Marker } from "@/components/ui/marker"
import { Spinner } from "@/components/ui/spinner"

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Marker role="status">
        <Marker.Icon>
          <Spinner />
        </Marker.Icon>
        <Marker.Content>Compacting conversation</Marker.Content>
      </Marker>
      <Marker role="status" variant="separator">
        <Marker.Icon>
          <Spinner />
        </Marker.Icon>
        <Marker.Content>Running tests</Marker.Content>
      </Marker>
    </div>
  )
}
