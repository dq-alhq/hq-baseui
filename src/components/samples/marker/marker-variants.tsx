import { Marker } from "@/components/ui/marker"

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Marker>
        <Marker.Content>A default marker for inline notes.</Marker.Content>
      </Marker>
      <Marker variant="separator">
        <Marker.Content>A separator marker</Marker.Content>
      </Marker>
      <Marker variant="border">
        <Marker.Content>A border marker for row boundaries.</Marker.Content>
      </Marker>
    </div>
  )
}
