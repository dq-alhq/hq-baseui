import { Badge } from "@/components/ui/badge"
import { createDataTableColumnHelper, DataTable } from "@/components/ui/data-table"

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

const statusVariants = {
  pending: "warning",
  processing: "info",
  success: "success",
  failed: "destructive"
} as const

const columnHelper = createDataTableColumnHelper<Payment>()

const columns = columnHelper.columns([
  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ cell }) => (
      <Badge className="capitalize" variant={statusVariants[cell.getValue()]}>
        {cell.getValue()}
      </Badge>
    )
  }),
  columnHelper.accessor("email", { header: "Email" }),
  columnHelper.accessor("amount", {
    header: () => <div className="text-right">Amount</div>,
    cell: ({ cell }) => {
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(cell.getValue())
      return <div className="text-right font-medium">{formatted}</div>
    }
  })
])

export default () => {
  return <DataTable columns={columns} data={data} pagination={false} />
}
