import React from 'react'
import { Thead, Th, Tr, Text } from '@chakra-ui/react'
import { flexRender } from '@tanstack/react-table'
import TableFilter from './TableFilter'

import { ITableContainerProps } from './TableContainer'


export default function TableHeader({table}: ITableContainerProps) {
  return (
    <Thead>
      {table.getHeaderGroups().map(headerGroup => (
        <Tr key={headerGroup.id}>
          {headerGroup.headers.map(header => (
            <Th key={header.id} colSpan={header.colSpan}>
              {header.isPlaceholder
                ? null
                : <Text as='strong' display='block' textAlign='center'
                    {...{
                      cursor: header.column.getCanSort() ? 'pointer': '',
                      onClick: header.column.getToggleSortingHandler()
                    }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{asc: ' 🔼', desc: ' 🔽',}[header.column.getIsSorted() as string] ?? null}
                  </Text>}
                  {header.column.getCanFilter() ? (<TableFilter column={header.column} table={table}/>) : null}
            </Th>
          ))}
        </Tr>
      ))}
    </Thead>
  )
}