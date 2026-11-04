import { IconPointFilled } from "@tabler/icons-react"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export default () => {
  return (
    <Breadcrumb>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link render={<a href="/" />}>Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>
          <IconPointFilled />
        </Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.Link render={<a href="/components" />}>Components</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>
          <IconPointFilled />
        </Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.Page>Breadcrumb.</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb>
  )
}
