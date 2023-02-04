import React from 'react'
import {
  Table as ChakraTable,
  Tbody,
  Tr,
  Td,
  TableContainer as ChakraTableContainer,
  TableCaption,
} from '@chakra-ui/react'
import { flexRender, Table } from '@tanstack/react-table'

import TableHeader from './TableHeader'
import { ITask } from '../../pages/Home' 
import TableBody from './TableBody'

export default function TableContainer({table}: ITableContainerProps) {
  return (
    <ChakraTableContainer ml='0'>
      <ChakraTable variant='simple'>
        <TableHeader table={table}/>
        <TableBody table={table}/>
        </ChakraTable>
    </ ChakraTableContainer>
  )
}

export interface ITableContainerProps {
  table: Table<ITask>
}