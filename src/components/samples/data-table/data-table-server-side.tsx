import { type PaginationState, type SortingState, useTable } from "@tanstack/react-table"
import { useEffect, useState } from "react"
import {
  createDataTableColumnHelper,
  DataTableColumnHeader,
  DataTableContent,
  DataTablePagination,
  dataTableFeatures
} from "@/components/ui/data-table"
import { Input } from "@/components/ui/input"

type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

const statuses: Payment["status"][] = ["pending", "processing", "success", "failed"]

// A fake database. Replace `fetchPayments` with a call to your API.
const database: Payment[] = Array.from({ length: 87 }, (_, index) => ({
  id: `payment-${index + 1}`,
  amount: 50 + ((index * 73) % 900),
  status: statuses[index % statuses.length],
  email: `customer${index + 1}@example.com`
}))

async function fetchPayments(params: { pageIndex: number; pageSize: number; sorting: SortingState; search: string }) {
  await new Promise((resolve) => setTimeout(resolve, 400))

  let rows = database.filter((payment) => payment.email.includes(params.search.toLowerCase()))

  const sort = params.sorting[0]
  if (sort) {
    const key = sort.id as keyof Payment
    rows = [...rows].sort((a, b) => (a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0) * (sort.desc ? -1 : 1))
  }

  const start = params.pageIndex * params.pageSize
  return { rows: rows.slice(start, start + params.pageSize), rowCount: rows.length }
}

const columnHelper = createDataTableColumnHelper<Payment>()

const columns = columnHelper.columns([
  columnHelper.accessor("email", {
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />
  }),
  columnHelper.accessor("status", { header: "Status", enableSorting: false }),
  columnHelper.accessor("amount", {
    header: ({ column }) => <DataTableColumnHeader column={column} title="Amount" />,
    cell: ({ cell }) => `$${cell.getValue()}`
  })
])

export default () => {
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 5 })
  const [sorting, setSorting] = useState<SortingState>([])
  const [search, setSearch] = useState("")
  const [result, setResult] = useState<{ rows: Payment[]; rowCount: number }>({
    rows: [],
    rowCount: 0
  })
  const [loading, setLoading] = useState(true)

  // Fetch whenever the page, the sorting or the search changes.
  useEffect(() => {
    let ignore = false
    setLoading(true)

    fetchPayments({ ...pagination, sorting, search }).then((response) => {
      if (!ignore) {
        setResult(response)
        setLoading(false)
      }
    })

    return () => {
      ignore = true
    }
  }, [pagination, sorting, search])

  const table = useTable({
    features: dataTableFeatures,
    data: result.rows,
    columns,
    // The server paginates and sorts, so the table must not do it again.
    manualPagination: true,
    manualSorting: true,
    rowCount: result.rowCount,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    state: { pagination, sorting }
  })

  return (
    <div className="flex w-full flex-col gap-4">
      <Input
        className="max-w-sm"
        onChange={(event) => {
          setSearch(event.target.value)
          setPagination((previous) => ({ ...previous, pageIndex: 0 }))
        }}
        placeholder="Search emails..."
        value={search}
      />
      <div className={loading ? "opacity-60 transition-opacity" : "transition-opacity"}>
        <DataTableContent table={table} />
      </div>
      <DataTablePagination pageSizeOptions={[5, 10, 20]} showSelection={false} table={table} />
    </div>
  )
}
