import React from 'react'
import { Tbody, Tr, Td, Text, Badge, Link  } from '@chakra-ui/react'
import { flexRender, Row } from '@tanstack/react-table'
import { Link as RouterLink } from 'react-router-dom';

import { ITableContainerProps } from './TableContainer'
import { ITask } from '../../pages/Home';

import './custom-link.css'


export default function TableBody({table}: ITableContainerProps) {
  function setBadgeColor(cellValue: string) {
    
    let colorScheme;
    if (cellValue == 'Success') {
      colorScheme = 'green'
    } else if (cellValue == 'Failure') {
      colorScheme = 'red'
    } else {
      colorScheme = 'yellow'
    }
    return (
      <Badge colorScheme={colorScheme}>
        {cellValue}
      </Badge>
    )
  }

  function setClickableLink(row: Row<ITask>, uuid: string) {
    if (row.original.status == 'Success') {
      return <Link as={RouterLink} to={uuid} className='custom-link' data-replace={uuid}><span>{uuid}</span></Link>
    } else {
      return uuid
    }
      
  }
  // console.log(table.getRowModel().rows[0].getVisibleCells()[0])
  // console.log(table.getRowModel().rows[0].getVisibleCells()[0].getValue())
  return (
    <Tbody>
      {table.getRowModel().rows.map(row => (
        <Tr key={row.id}>
          {row.getVisibleCells().map(cell => (
            <Td key={cell.id}>
              <Text textAlign='center'>
                {
                cell.column.id == 'status' ? 
                setBadgeColor(cell.getValue() as string)
                :
                cell.column.id == 'uuid' ? 
                setClickableLink(row, cell.getValue() as string)
                :
                flexRender(cell.column.columnDef.cell, cell.getContext())
                }
              </Text>
            </Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  )
}