import { Card, CardContent } from "@/components/ui/card"
import { Carousel } from "@/components/ui/carousel"

export default () => {
  return (
    <Carousel className="w-full max-w-48 sm:max-w-xs md:max-w-sm">
      <Carousel.Content className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Carousel.Item className="basis-1/2 pl-1 lg:basis-1/3" key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
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
