import { Carousel } from "@/components/ui/carousel"

export default () => {
  return (
    <Carousel className="w-full max-w-xs">
      <Carousel.Content>
        <Carousel.Item className="basis-1/2">
          <img
            alt="carousel-image 1"
            className="rounded-xl"
            height={300}
            src="https://picsum.photos/id/1/400/300"
            width={400}
          />
        </Carousel.Item>
        <Carousel.Item className="basis-1/2">
          <img
            alt="carousel-image 2"
            className="rounded-xl"
            height={300}
            src="https://picsum.photos/id/2/400/300"
            width={400}
          />
        </Carousel.Item>
        <Carousel.Item className="basis-1/2">
          <img
            alt="carousel-image 3"
            className="rounded-xl"
            height={300}
            src="https://picsum.photos/id/3/400/300"
            width={400}
          />
        </Carousel.Item>
        <Carousel.Item className="basis-1/2">
          <img
            alt="carousel-image 4"
            className="rounded-xl"
            height={300}
            src="https://picsum.photos/id/4/400/300"
            width={400}
          />
        </Carousel.Item>
        <Carousel.Item className="basis-1/2">
          <img
            alt="carousel-image 5"
            className="rounded-xl"
            height={300}
            src="https://picsum.photos/id/5/400/300"
            width={400}
          />
        </Carousel.Item>
        <Carousel.Item className="basis-1/2">
          <img
            alt="carousel-image 6"
            className="rounded-xl"
            height={300}
            src="https://picsum.photos/id/6/400/300"
            width={400}
          />
        </Carousel.Item>
        <Carousel.Item className="basis-1/2">
          <img
            alt="carousel-image 7"
            className="rounded-xl"
            height={300}
            src="https://picsum.photos/id/7/400/300"
            width={400}
          />
        </Carousel.Item>
      </Carousel.Content>

      <Carousel.Handler>
        <Carousel.Button segment="previous" />
        <Carousel.Button segment="next" />
      </Carousel.Handler>
    </Carousel>
  )
}
