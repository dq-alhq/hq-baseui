import { IconDots } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { Table } from "@/components/ui/table"

export default () => {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Product</Table.Head>
          <Table.Head>Price</Table.Head>
          <Table.Head className="text-right">Actions</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell className="font-medium">Wireless Mouse</Table.Cell>
          <Table.Cell>$29.99</Table.Cell>
          <Table.Cell className="text-right">
            <DropdownMenu>
              <DropdownMenu.Trigger render={<Button className="size-8" size="icon" variant="ghost" />}>
                <IconDots />
                <span className="sr-only">Open menu</span>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content align="end">
                <DropdownMenu.Item>Edit</DropdownMenu.Item>
                <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item variant="destructive">Delete</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="font-medium">Mechanical Keyboard</Table.Cell>
          <Table.Cell>$129.99</Table.Cell>
          <Table.Cell className="text-right">
            <DropdownMenu>
              <DropdownMenu.Trigger render={<Button className="size-8" size="icon" variant="ghost" />}>
                <IconDots />
                <span className="sr-only">Open menu</span>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content align="end">
                <DropdownMenu.Item>Edit</DropdownMenu.Item>
                <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item variant="destructive">Delete</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="font-medium">USB-C Hub</Table.Cell>
          <Table.Cell>$49.99</Table.Cell>
          <Table.Cell className="text-right">
            <DropdownMenu>
              <DropdownMenu.Trigger render={<Button className="size-8" size="icon" variant="ghost" />}>
                <IconDots />
                <span className="sr-only">Open menu</span>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content align="end">
                <DropdownMenu.Item>Edit</DropdownMenu.Item>
                <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item variant="destructive">Delete</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
