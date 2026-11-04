import { Marker } from "@/components/ui/marker"
import { Spinner } from "@/components/ui/spinner"

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Marker role="status">
        <Marker.Icon>
          <Spinner />
        </Marker.Icon>
        <Marker.Content className="shimmer">Thinking...</Marker.Content>
      </Marker>
      <Marker role="status" variant="separator">
        <Marker.Content className="shimmer">Reading 4 files</Marker.Content>
      </Marker>
    </div>
  )
}
