import { Slider } from "@/components/ui/slider"

export default () => {
  return (
    <Slider className="mx-auto w-full max-w-xs" defaultValue={[10, 20, 70]} max={100} step={10}>
      <Slider.Label>Multi Value Slider</Slider.Label>
      <Slider.Value />
    </Slider>
  )
}
