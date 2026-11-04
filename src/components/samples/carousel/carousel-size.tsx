import { Carousel } from "@/components/ui/carousel"

export default () => {
  return (
    <Carousel
      className="w-full max-w-2xl py-4"
      opts={{
        align: "center",
        loop: true
      }}
    >
      <Carousel.Content>
        {Array.from({ length: 16 }, (_, id) => ({ id: id + 1 })).map(({ id }) => (
          <Carousel.Item className="basis-1/2 lg:basis-1/3" key={id}>
            <div className="flex aspect-square items-center justify-center rounded-xl border">{id}</div>
          </Carousel.Item>
        ))}
      </Carousel.Content>

      <Carousel.Handler>
        <Carousel.Button segment="previous" />
        <Carousel.Button segment="next" />
      </Carousel.Handler>
    </Carousel>
  )
}
