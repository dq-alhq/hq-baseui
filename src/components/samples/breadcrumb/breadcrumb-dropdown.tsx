import { IconChevronDown, IconPointFilled } from "@tabler/icons-react"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { DropdownMenu } from "@/components/ui/dropdown-menu"

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
          <DropdownMenu>
            <DropdownMenu.Trigger render={<button className="flex items-center gap-1" type="button" />}>
              Components
              <IconChevronDown className="size-3.5" data-icon="inline-end" />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="start">
              <DropdownMenu.Group>
                <DropdownMenu.Item>Documentation</DropdownMenu.Item>
                <DropdownMenu.Item>Themes</DropdownMenu.Item>
                <DropdownMenu.Item>GitHub</DropdownMenu.Item>
              </DropdownMenu.Group>
            </DropdownMenu.Content>
          </DropdownMenu>
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
