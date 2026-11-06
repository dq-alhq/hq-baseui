import { createDataTableColumnHelper, DataTable } from "@/components/ui/data-table"

type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

const statuses: Payment["status"][] = ["pending", "processing", "success", "failed"]

const data: Payment[] = Array.from({ length: 36 }, (_, index) => ({
  id: `payment-${index + 1}`,
  amount: 50 + ((index * 73) % 900),
  status: statuses[index % statuses.length],
  email: `customer${index + 1}@example.com`
}))

const columnHelper = createDataTableColumnHelper<Payment>()

const columns = columnHelper.columns([
  columnHelper.accessor("email", { header: "Email" }),
  columnHelper.accessor("status", { header: "Status" }),
  columnHelper.accessor("amount", {
    header: () => <div className="text-right">Amount</div>,
    cell: ({ cell }) => (
      <div className="text-right font-medium">
        {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cell.getValue())}
      </div>
    )
  })
])

export default () => {
  return <DataTable columns={columns} data={data} pageSize={5} pageSizeOptions={[5, 10, 20]} />
}
