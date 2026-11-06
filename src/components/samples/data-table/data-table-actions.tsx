import { IconDots } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { createDataTableColumnHelper, DataTable } from "@/components/ui/data-table"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { toast } from "@/components/ui/toast"

type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

const data: Payment[] = [
  { id: "728ed52f", amount: 100, status: "pending", email: "m@example.com" },
  { id: "489e1d42", amount: 125, status: "processing", email: "example@gmail.com" },
  { id: "9f3a1c77", amount: 316, status: "success", email: "ken99@example.com" },
  { id: "bhqecj4p", amount: 721, status: "failed", email: "carmella@example.com" }
]

const columnHelper = createDataTableColumnHelper<Payment>()

const columns = columnHelper.columns([
  columnHelper.accessor("email", { header: "Email" }),
  columnHelper.accessor("status", { header: "Status" }),
  columnHelper.display({
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original

      return (
        <div className="text-right">
          <DropdownMenu>
            <DropdownMenu.Trigger render={<Button className="size-8" size="icon" variant="ghost" />}>
              <IconDots />
              <span className="sr-only">Open menu</span>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="end">
              <DropdownMenu.Group>
                <DropdownMenu.Label>Actions</DropdownMenu.Label>
                <DropdownMenu.Item
                  onClick={() => {
                    navigator.clipboard.writeText(payment.id)
                    toast.add({ description: `Copied ${payment.id}` })
                  }}
                >
                  Copy payment ID
                </DropdownMenu.Item>
              </DropdownMenu.Group>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>View customer</DropdownMenu.Item>
              <DropdownMenu.Item>View payment details</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      )
    }
  })
])

export default () => {
  return <DataTable columns={columns} data={data} pagination={false} />
}
