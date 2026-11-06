import { IconDots } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  createDataTableColumnHelper,
  createDataTableSelectColumn,
  DataTable,
  DataTableColumnHeader
} from "@/components/ui/data-table"
import { DropdownMenu } from "@/components/ui/dropdown-menu"

type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

const data: Payment[] = [
  { id: "m5gr84i9", amount: 316, status: "success", email: "ken99@example.com" },
  { id: "3u1reuv4", amount: 242, status: "success", email: "Abe45@example.com" },
  { id: "derv1ws0", amount: 837, status: "processing", email: "Monserrat44@example.com" },
  { id: "5kma53ae", amount: 874, status: "success", email: "Silas22@example.com" },
  { id: "bhqecj4p", amount: 721, status: "failed", email: "carmella@example.com" }
]

const statusVariants = {
  pending: "warning",
  processing: "info",
  success: "success",
  failed: "destructive"
} as const

const columnHelper = createDataTableColumnHelper<Payment>()

const columns = columnHelper.columns([
  createDataTableSelectColumn<Payment>(),
  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ cell }) => {
      const status = cell.getValue()
      return (
        <Badge className="capitalize" variant={statusVariants[status]}>
          {status}
        </Badge>
      )
    }
  }),
  columnHelper.accessor("email", {
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
    cell: ({ cell }) => <span className="lowercase">{cell.getValue()}</span>
  }),
  columnHelper.accessor("amount", {
    header: () => <div className="text-right">Amount</div>,
    cell: ({ cell }) => {
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(cell.getValue())
      return <div className="text-right font-medium">{formatted}</div>
    }
  }),
  columnHelper.display({
    id: "actions",
    enableHiding: false,
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
                <DropdownMenu.Item onClick={() => navigator.clipboard.writeText(payment.id)}>
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
  return (
    <DataTable
      columns={columns}
      columnToggle
      data={data}
      filterColumn="email"
      filterPlaceholder="Filter emails..."
      showSelection
    />
  )
}
