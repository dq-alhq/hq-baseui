import { useState } from "react"
import { createDataTableColumnHelper, createDataTableSelectColumn, DataTable } from "@/components/ui/data-table"

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
  createDataTableSelectColumn<Payment>(),
  columnHelper.accessor("status", { header: "Status" }),
  columnHelper.accessor("email", { header: "Email" }),
  columnHelper.accessor("amount", { header: "Amount" })
])

export default () => {
  const [selected, setSelected] = useState<string[]>([])

  return (
    <div className="flex flex-col gap-3">
      <DataTable
        columns={columns}
        data={data}
        getRowId={(row) => row.id}
        onRowSelectionChange={(rowSelection) => setSelected(Object.keys(rowSelection).filter((id) => rowSelection[id]))}
        pagination={false}
        showSelection
      />
      <span className="text-muted-foreground text-sm">
        Selected IDs: {selected.length ? selected.join(", ") : "none"}
      </span>
    </div>
  )
}
