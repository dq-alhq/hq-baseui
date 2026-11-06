import { router, usePage } from "@inertiajs/react"
import { type SortingState, useTable } from "@tanstack/react-table"
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
  id: number
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

// The shape of Laravel's `paginate()` result (only the keys we use).
type Paginated<T> = {
  data: T[]
  current_page: number
  per_page: number
  total: number
}

type Filters = {
  search?: string
  sort?: string
  direction?: "asc" | "desc"
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

export default function PaymentsIndex({ payments, filters }: { payments: Paginated<Payment>; filters: Filters }) {
  const path = usePage().url.split("?")[0]
  const [search, setSearch] = useState(filters.search ?? "")

  // Every interaction is an Inertia visit. The URL is the single source of truth.
  const visit = (params: Record<string, string | number | undefined>) =>
    router.get(
      path,
      {
        search: filters.search,
        sort: filters.sort,
        direction: filters.direction,
        per_page: payments.per_page,
        ...params
      },
      { preserveState: true, preserveScroll: true, replace: true, only: ["payments", "filters"] }
    )

  // Search after the user stops typing.
  useEffect(() => {
    if (search === (filters.search ?? "")) {
      return
    }
    const timeout = setTimeout(() => visit({ search: search || undefined, page: 1 }), 300)
    return () => clearTimeout(timeout)
  }, [search])

  const pagination = { pageIndex: payments.current_page - 1, pageSize: payments.per_page }
  const sorting: SortingState = filters.sort ? [{ id: filters.sort, desc: filters.direction === "desc" }] : []

  const table = useTable({
    features: dataTableFeatures,
    data: payments.data,
    columns,
    manualPagination: true,
    manualSorting: true,
    rowCount: payments.total,
    state: { pagination, sorting },
    onPaginationChange: (updater) => {
      const next = typeof updater === "function" ? updater(pagination) : updater
      // Go back to the first page when the page size changes.
      visit({
        page: next.pageSize === pagination.pageSize ? next.pageIndex + 1 : 1,
        per_page: next.pageSize
      })
    },
    onSortingChange: (updater) => {
      const next = typeof updater === "function" ? updater(sorting) : updater
      visit({
        sort: next[0]?.id,
        direction: next[0] ? (next[0].desc ? "desc" : "asc") : undefined,
        page: 1
      })
    }
  })

  return (
    <div className="flex w-full flex-col gap-4">
      <Input
        className="max-w-sm"
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search emails..."
        value={search}
      />
      <DataTableContent table={table} />
      <DataTablePagination showSelection={false} table={table} />
    </div>
  )
}
