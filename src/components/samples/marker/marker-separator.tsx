import { Marker } from "@/components/ui/marker"

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Marker variant="separator">
        <Marker.Content>Today</Marker.Content>
      </Marker>
      <Marker variant="separator">
        <Marker.Content>Worked for 42s</Marker.Content>
      </Marker>
      <Marker variant="separator">
        <Marker.Content>Conversation compacted</Marker.Content>
      </Marker>
    </div>
  )
}
