"use client";

import {
	IconArrowDown,
	IconArrowUp,
	IconChevronDown,
	IconChevronLeft,
	IconChevronRight,
	IconChevronsLeft,
	IconChevronsRight,
	IconEyeOff,
	IconSelector,
	IconX,
} from "@tabler/icons-react";
import {
	type Column,
	type ColumnDef,
	type ColumnFiltersState,
	type ColumnVisibilityState,
	columnFilteringFeature,
	columnVisibilityFeature,
	createColumnHelper,
	createFilteredRowModel,
	createPaginatedRowModel,
	createSortedRowModel,
	FlexRender,
	filterFn_includesString,
	type PaginationState,
	type ReactTable,
	type RowData,
	type RowSelectionState,
	rowPaginationFeature,
	rowSelectionFeature,
	rowSortingFeature,
	type SortingState,
	sortFn_alphanumeric,
	sortFn_text,
	type Table as TableInstance,
	tableFeatures,
	useTable,
} from "@tanstack/react-table";
import { cn } from "cn";
import type { ReactElement, ReactNode } from "react";
import { useState } from "react";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { DropdownMenu } from "./dropdown-menu";
import { Input } from "./input";
import { Select } from "./select";
import { Table } from "./table";

/**
 * Declare the features this data table uses. Anything that is not registered is
 * tree-shaken out of the bundle. Pass `DataTableFeatures` as the first generic
 * argument to `ColumnDef`, `Column` and `Table`.
 */
const dataTableFeatures = tableFeatures({
	columnFilteringFeature,
	columnVisibilityFeature,
	rowPaginationFeature,
	rowSelectionFeature,
	rowSortingFeature,
	filteredRowModel: createFilteredRowModel(),
	paginatedRowModel: createPaginatedRowModel(),
	sortedRowModel: createSortedRowModel(),
	filterFns: { includesString: filterFn_includesString },
	sortFns: { alphanumeric: sortFn_alphanumeric, text: sortFn_text },
});

type DataTableFeatures = typeof dataTableFeatures;

type DataTableColumnDef<TData extends RowData, TValue = unknown> = ColumnDef<
	DataTableFeatures,
	TData,
	TValue
>;

function createDataTableColumnHelper<TData extends RowData>() {
	return createColumnHelper<DataTableFeatures, TData>();
}

/** A ready-made column with a checkbox to select a row and a checkbox in the header to select the page. */
function createDataTableSelectColumn<
	TData extends RowData,
>(): DataTableColumnDef<TData> {
	return createDataTableColumnHelper<TData>().display({
		id: "select",
		header: ({ table }) => (
			<Checkbox
				aria-label="Select all"
				checked={table.getIsAllPageRowsSelected()}
				indeterminate={
					table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected()
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				aria-label="Select row"
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
			/>
		),
		enableSorting: false,
		enableHiding: false,
	});
}

type DataTableColumnHeaderProps<TData extends RowData, TValue> = {
	column: Column<DataTableFeatures, TData, TValue>;
	title: ReactNode;
	className?: string;
};

/** A column header that lets the user sort (ascending, descending) and hide the column. */
function DataTableColumnHeader<TData extends RowData, TValue>({
	column,
	title,
	className,
}: DataTableColumnHeaderProps<TData, TValue>): ReactElement {
	if (!(column.getCanSort() || column.getCanHide())) {
		return <div className={className}>{title}</div>;
	}

	const sorted = column.getIsSorted();

	return (
		<div className={cn("flex items-center gap-2", className)}>
			<DropdownMenu>
				<DropdownMenu.Trigger
					render={
						<Button
							className="data-popup-open:bg-accent -ml-2.5"
							size="sm"
							variant="ghost"
						/>
					}
				>
					{title}
					{sorted === "desc" ? (
						<IconArrowDown />
					) : sorted === "asc" ? (
						<IconArrowUp />
					) : (
						<IconSelector />
					)}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="start">
					{column.getCanSort() && (
						<>
							<DropdownMenu.Item onClick={() => column.toggleSorting(false)}>
								<IconArrowUp />
								Asc
							</DropdownMenu.Item>
							<DropdownMenu.Item onClick={() => column.toggleSorting(true)}>
								<IconArrowDown />
								Desc
							</DropdownMenu.Item>
							{sorted && (
								<DropdownMenu.Item onClick={() => column.clearSorting()}>
									<IconX />
									Reset
								</DropdownMenu.Item>
							)}
						</>
					)}
					{column.getCanSort() && column.getCanHide() && (
						<DropdownMenu.Separator />
					)}
					{column.getCanHide() && (
						<DropdownMenu.Item onClick={() => column.toggleVisibility(false)}>
							<IconEyeOff />
							Hide
						</DropdownMenu.Item>
					)}
				</DropdownMenu.Content>
			</DropdownMenu>
		</div>
	);
}

type DataTableViewOptionsProps<TData extends RowData> = {
	table: TableInstance<DataTableFeatures, TData>;
	label?: ReactNode;
};

/** A dropdown to toggle the visibility of the columns. */
function DataTableViewOptions<TData extends RowData>({
	table,
	label = "Columns",
}: DataTableViewOptionsProps<TData>): ReactElement {
	return (
		<DropdownMenu>
			<DropdownMenu.Trigger render={<Button variant="outline" />}>
				{label}
				<IconChevronDown />
			</DropdownMenu.Trigger>
			<DropdownMenu.Content align="end">
				{table
					.getAllColumns()
					.filter((column) => column.getCanHide())
					.map((column) => (
						<DropdownMenu.CheckboxItem
							checked={column.getIsVisible()}
							className="capitalize"
							key={column.id}
							onCheckedChange={(value) => column.toggleVisibility(!!value)}
						>
							{column.id}
						</DropdownMenu.CheckboxItem>
					))}
			</DropdownMenu.Content>
		</DropdownMenu>
	);
}

type DataTablePaginationProps<TData extends RowData> = {
	table: ReactTable<DataTableFeatures, TData>;
	pageSizeOptions?: number[];
	/** Show how many rows are selected. */
	showSelection?: boolean;
	className?: string;
};

/** Pagination controls including the page size, the page number and the selected rows count. */
function DataTablePagination<TData extends RowData>({
	table,
	pageSizeOptions = [10, 20, 30, 50],
	showSelection = true,
	className,
}: DataTablePaginationProps<TData>): ReactElement {
	const { pageIndex, pageSize } = table.state.pagination;
	const pageSizeItems = pageSizeOptions.map((size) => ({
		label: `${size}`,
		value: `${size}`,
	}));

	return (
		<div
			className={cn(
				"flex flex-wrap items-center justify-between gap-4",
				className,
			)}
		>
			<div className="text-muted-foreground flex-1 text-sm">
				{showSelection
					? `${table.getFilteredSelectedRowModel().rows.length} of ${table.getRowCount()} row(s) selected.`
					: `${table.getRowCount()} row(s).`}
			</div>
			<div className="flex flex-wrap items-center gap-4 lg:gap-8">
				<div className="flex items-center gap-2">
					<span className="text-sm font-medium">Rows per page</span>
					<Select
						items={pageSizeItems}
						onValueChange={(value) => table.setPageSize(Number(value))}
						value={`${pageSize}`}
					>
						<Select.Trigger className="w-18" size="sm">
							<Select.Value />
						</Select.Trigger>
						<Select.Content>
							<Select.Group>
								{pageSizeItems.map((item) => (
									<Select.Item key={item.value} value={item.value}>
										{item.label}
									</Select.Item>
								))}
							</Select.Group>
						</Select.Content>
					</Select>
				</div>
				<div className="flex min-w-24 items-center justify-center text-sm font-medium">
					Page {pageIndex + 1} of {Math.max(table.getPageCount(), 1)}
				</div>
				<div className="flex items-center gap-1">
					<Button
						disabled={!table.getCanPreviousPage()}
						onClick={() => table.firstPage()}
						size="icon"
						variant="outline"
					>
						<span className="sr-only">Go to first page</span>
						<IconChevronsLeft />
					</Button>
					<Button
						disabled={!table.getCanPreviousPage()}
						onClick={() => table.previousPage()}
						size="icon"
						variant="outline"
					>
						<span className="sr-only">Go to previous page</span>
						<IconChevronLeft />
					</Button>
					<Button
						disabled={!table.getCanNextPage()}
						onClick={() => table.nextPage()}
						size="icon"
						variant="outline"
					>
						<span className="sr-only">Go to next page</span>
						<IconChevronRight />
					</Button>
					<Button
						disabled={!table.getCanNextPage()}
						onClick={() => table.lastPage()}
						size="icon"
						variant="outline"
					>
						<span className="sr-only">Go to last page</span>
						<IconChevronsRight />
					</Button>
				</div>
			</div>
		</div>
	);
}

type DataTableContentProps<TData extends RowData> = {
	table: TableInstance<DataTableFeatures, TData>;
	emptyMessage?: ReactNode;
	className?: string;
};

/** Renders the header groups and the rows of a table instance. */
function DataTableContent<TData extends RowData>({
	table,
	emptyMessage = "No results.",
	className,
}: DataTableContentProps<TData>): ReactElement {
	const rows = table.getRowModel().rows;

	return (
		<div
			className={cn("overflow-hidden rounded-lg border", className)}
			data-slot="data-table"
		>
			<Table>
				<Table.Header>
					{table.getHeaderGroups().map((headerGroup) => (
						<Table.Row key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<Table.Head colSpan={header.colSpan} key={header.id}>
									{header.isPlaceholder ? null : <FlexRender header={header} />}
								</Table.Head>
							))}
						</Table.Row>
					))}
				</Table.Header>
				<Table.Body>
					{rows.length ? (
						rows.map((row) => (
							<Table.Row
								data-state={row.getIsSelected() ? "selected" : undefined}
								key={row.id}
							>
								{row.getVisibleCells().map((cell) => (
									<Table.Cell key={cell.id}>
										<FlexRender cell={cell} />
									</Table.Cell>
								))}
							</Table.Row>
						))
					) : (
						<Table.Row>
							<Table.Cell
								className="h-24 text-center"
								colSpan={table.getAllLeafColumns().length}
							>
								{emptyMessage}
							</Table.Cell>
						</Table.Row>
					)}
				</Table.Body>
			</Table>
		</div>
	);
}

type DataTableProps<TData extends RowData> = {
	columns: DataTableColumnDef<TData, any>[];
	data: TData[];
	/** The id of the column the search input filters on. The input is hidden when omitted. */
	filterColumn?: string;
	filterPlaceholder?: string;
	/** Show the column visibility dropdown. */
	columnToggle?: boolean;
	/** Show the pagination controls. When `false`, all the rows are rendered. */
	pagination?: boolean;
	pageSize?: number;
	pageSizeOptions?: number[];
	/** Show the selected rows count in the footer. Use with `createDataTableSelectColumn`. */
	showSelection?: boolean;
	getRowId?: (row: TData, index: number) => string;
	emptyMessage?: ReactNode;
	className?: string;
	onRowSelectionChange?: (rowSelection: RowSelectionState) => void;
};

/**
 * An all-in-one data table with sorting, filtering, column visibility, row selection and pagination
 * built on TanStack Table. Compose `DataTableContent`, `DataTablePagination` and `DataTableViewOptions`
 * with `useTable` if you need more control.
 */
function DataTable<TData extends RowData>({
	columns,
	data,
	filterColumn,
	filterPlaceholder = "Filter...",
	columnToggle = false,
	pagination = true,
	pageSize = 10,
	pageSizeOptions,
	showSelection = false,
	getRowId,
	emptyMessage,
	className,
	onRowSelectionChange,
}: DataTableProps<TData>): ReactElement {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [columnVisibility, setColumnVisibility] =
		useState<ColumnVisibilityState>({});
	const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
	const [paginationState, setPaginationState] = useState<PaginationState>({
		pageIndex: 0,
		pageSize,
	});

	const table = useTable({
		features: dataTableFeatures,
		data,
		columns,
		getRowId,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: (updater) => {
			setRowSelection((previous) => {
				const next =
					typeof updater === "function" ? updater(previous) : updater;
				onRowSelectionChange?.(next);
				return next;
			});
		},
		onPaginationChange: setPaginationState,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
			pagination: pagination
				? paginationState
				: { pageIndex: 0, pageSize: Math.max(data.length, 1) },
		},
	});

	const filter = filterColumn ? table.getColumn(filterColumn) : undefined;

	return (
		<div className={cn("flex w-full flex-col gap-4", className)}>
			{(filter || columnToggle) && (
				<div className="flex items-center gap-2">
					{filter && (
						<Input
							className="max-w-sm"
							onChange={(event) => filter.setFilterValue(event.target.value)}
							placeholder={filterPlaceholder}
							value={(filter.getFilterValue() as string | undefined) ?? ""}
						/>
					)}
					{columnToggle && (
						<div className="ml-auto">
							<DataTableViewOptions table={table} />
						</div>
					)}
				</div>
			)}
			<DataTableContent emptyMessage={emptyMessage} table={table} />
			{pagination ? (
				<DataTablePagination
					pageSizeOptions={pageSizeOptions}
					showSelection={showSelection}
					table={table}
				/>
			) : (
				showSelection && (
					<div className="text-muted-foreground text-sm">
						{table.getFilteredSelectedRowModel().rows.length} of{" "}
						{table.getFilteredRowModel().rows.length} row(s) selected.
					</div>
				)
			)}
		</div>
	);
}

export type { DataTableColumnDef, DataTableFeatures, DataTableProps };
export {
	createDataTableColumnHelper,
	createDataTableSelectColumn,
	DataTable,
	DataTableColumnHeader,
	DataTableContent,
	DataTablePagination,
	DataTableViewOptions,
	dataTableFeatures,
};
