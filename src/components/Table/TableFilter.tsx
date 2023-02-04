import React from "react";
import { Column, Table } from '@tanstack/react-table'
import { Input } from "@chakra-ui/react";

export default function TableFilter({
  column,
  table,
}: {
  column: Column<any, any>
  table: Table<any>
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  return typeof firstValue === 'number' ? (
    <div className="flex space-x-2">
      <Input
        display='block'
        ml='auto'
        mr='auto'
        maxW='50%'
        size='xs'
        type="number"
        value={(columnFilterValue as [number, number])?.[0] ?? ''}
        onChange={e =>
          column.setFilterValue((old: [number, number]) => [
            e.target.value,
            old?.[1],
          ])
        }
        placeholder={`Min`}
      />
      <Input
        display='block'
        ml='auto'
        mr='auto'
        maxW='50%'
        size='xs'
        type="number"
        value={(columnFilterValue as [number, number])?.[1] ?? ''}
        onChange={e =>
          column.setFilterValue((old: [number, number]) => [
            old?.[0],
            e.target.value,
          ])
        }
        placeholder={`Max`}
      />
    </div>
  ) : (
    <Input
      display='block'
      ml='auto'
      mr='auto'
      maxW='50%'
      size='xs'
      type="text"
      value={(columnFilterValue ?? '') as string}
      onChange={e => {
        column.setFilterValue(e.target.value)
        table.setPageIndex(0)
      }}
      placeholder={`Search...`}
    />
  )
}
