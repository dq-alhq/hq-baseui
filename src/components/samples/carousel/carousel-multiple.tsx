import { Card } from "@/components/ui/card"
import { Carousel } from "@/components/ui/carousel"

export default () => {
  return (
    <Carousel
      className="mx-auto max-w-xs sm:max-w-sm"
      opts={{
        align: "start"
      }}
    >
      <Carousel.Content>
        {Array.from({ length: 5 }).map((_, index) => (
          <Carousel.Item className="sm:basis-1/2 lg:basis-1/3" key={index}>
            <div className="p-1">
              <Card>
                <Card.Content className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </Card.Content>
              </Card>
            </div>
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
