import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Flex, Box, Text } from '@chakra-ui/react'

import { ITableContainerProps } from './TableContainer'


export default function TablePagination({table}: ITableContainerProps) {
  return (
    <Flex direction='column' align='center' pb='0' pt='20'>
      <Box>
        <IconButton icon={<ArrowLeftIcon />}
          aria-label='navigate first page' 
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
          m='2'
        />
        <IconButton icon={<ChevronLeftIcon />}
          aria-label='navigate previous page'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          m='2'
        />
        <IconButton icon={<ChevronRightIcon />}
          aria-label='navigate next page'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          m='2'
        />
        <IconButton icon={<ArrowRightIcon />}
          aria-label='navigate last page'
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
          m='2'
        />
      </Box>
      <Box>
        <Text textAlign='center'>Page</Text>
        <Text as='strong'>
          {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount()}
        </Text>
      </Box>
    </Flex>      
  )
}