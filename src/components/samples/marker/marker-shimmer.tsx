import { Marker } from "@/components/ui/marker"

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Marker role="status">
        <Marker.Content className="shimmer">Thinking...</Marker.Content>
      </Marker>
      <Marker role="status" variant="separator">
        <Marker.Content className="shimmer">Reading 4 files</Marker.Content>
      </Marker>
    </div>
  )
}
