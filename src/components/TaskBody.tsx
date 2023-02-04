import React, { useState, useMemo } from 'react'
import { useLoaderData } from 'react-router-dom';
import { 
  useReactTable, 
  getCoreRowModel, 
  getFilteredRowModel,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel
} from '@tanstack/react-table';
import { Flex, Spacer } from '@chakra-ui/react';

import { columns } from '../hooks/tableColumn';
import { ITask } from '../pages/Home';
import TableContainer from './Table/TableContainer';
import TablePagination from './Table/TablePagination';

export default function TaskBody() {
  const loaderData = useLoaderData() as ILoaderData
  const data = loaderData.data

  const [sorting, setSorting] = React.useState<SortingState>([])
  const table = useReactTable<ITask>({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      pagination: {
        pageSize: 10
      },
      sorting
    },
    autoResetAll: false
  })
  return (
    <Flex direction='column' p='8' pb='2' mt='8'>
      <TableContainer table={table} />
      <TablePagination table={table} />
    </Flex>
  )
}


interface ILoaderData {
  data: ITask[]
}




