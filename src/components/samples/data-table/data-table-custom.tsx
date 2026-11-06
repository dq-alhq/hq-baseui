import { useTable } from "@tanstack/react-table"
import {
  createDataTableColumnHelper,
  createDataTableSelectColumn,
  DataTableColumnHeader,
  DataTableContent,
  DataTablePagination,
  DataTableViewOptions,
  dataTableFeatures
} from "@/components/ui/data-table"

type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

const statuses: Payment["status"][] = ["pending", "processing", "success", "failed"]

const data: Payment[] = Array.from({ length: 24 }, (_, index) => ({
  id: `payment-${index + 1}`,
  amount: 50 + ((index * 73) % 900),
  status: statuses[index % statuses.length],
  email: `customer${index + 1}@example.com`
}))

const columnHelper = createDataTableColumnHelper<Payment>()

const columns = columnHelper.columns([
  createDataTableSelectColumn<Payment>(),
  columnHelper.accessor("email", {
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />
  }),
  columnHelper.accessor("status", { header: "Status" }),
  columnHelper.accessor("amount", {
    header: ({ column }) => <DataTableColumnHeader column={column} title="Amount" />
  })
])

export default () => {
  // The table instance owns its state. Compose the building blocks the way you need them.
  const table = useTable({
    features: dataTableFeatures,
    data,
    columns,
    initialState: { pagination: { pageIndex: 0, pageSize: 5 } }
  })

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex justify-end">
        <DataTableViewOptions table={table} />
      </div>
      <DataTableContent table={table} />
      <DataTablePagination pageSizeOptions={[5, 10, 20]} table={table} />
    </div>
  )
}
