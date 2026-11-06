import { createDataTableColumnHelper, DataTable, DataTableColumnHeader } from "@/components/ui/data-table"

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

const columnHelper = createDataTableColumnHelper<Payment>()

const columns = columnHelper.columns([
  columnHelper.accessor("status", { header: "Status", enableSorting: false }),
  columnHelper.accessor("email", {
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />
  }),
  columnHelper.accessor("amount", {
    header: ({ column }) => <DataTableColumnHeader column={column} title="Amount" />,
    cell: ({ cell }) => (
      <span className="font-medium">
        {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cell.getValue())}
      </span>
    )
  })
])

export default () => {
  return <DataTable columns={columns} data={data} pagination={false} />
}
