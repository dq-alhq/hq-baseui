"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Table } from "@/components/ui/table"

const tableData = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah.chen@example.com",
    role: "Admin"
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    email: "marcus.rodriguez@example.com",
    role: "User"
  },
  {
    id: "3",
    name: "Priya Patel",
    email: "priya.patel@example.com",
    role: "User"
  },
  {
    id: "4",
    name: "David Kim",
    email: "david.kim@example.com",
    role: "Editor"
  }
]

export default () => {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set(["1"]))

  const selectAll = selectedRows.size === tableData.length

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(tableData.map((row) => row.id)))
    } else {
      setSelectedRows(new Set())
    }
  }

  const handleSelectRow = (id: string, checked: boolean) => {
    const newSelected = new Set(selectedRows)
    if (checked) {
      newSelected.add(id)
    } else {
      newSelected.delete(id)
    }
    setSelectedRows(newSelected)
  }

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head className="w-8">
            <Checkbox
              checked={selectAll}
              id="select-all-checkbox"
              name="select-all-checkbox"
              onCheckedChange={handleSelectAll}
            />
          </Table.Head>
          <Table.Head>Name</Table.Head>
          <Table.Head>Email</Table.Head>
          <Table.Head>Role</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {tableData.map((row) => (
          <Table.Row data-state={selectedRows.has(row.id) ? "selected" : undefined} key={row.id}>
            <Table.Cell>
              <Checkbox
                checked={selectedRows.has(row.id)}
                id={`row-${row.id}-checkbox`}
                name={`row-${row.id}-checkbox`}
                onCheckedChange={(checked) => handleSelectRow(row.id, checked === true)}
              />
            </Table.Cell>
            <Table.Cell className="font-medium">{row.name}</Table.Cell>
            <Table.Cell>{row.email}</Table.Cell>
            <Table.Cell>{row.role}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
