import { Meter } from "@/components/ui/meter"

export default () => {
  return (
    <Meter max={5} value={3}>
      <Meter.Label>Key used</Meter.Label>
      <Meter.Value>{(_formatted, value) => `${value} / 5`}</Meter.Value>
    </Meter>
  )
}
