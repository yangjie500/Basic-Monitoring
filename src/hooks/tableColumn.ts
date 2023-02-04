import { 
  ColumnDef, 
  createColumnHelper
} from '@tanstack/react-table'
import { ITask } from '../pages/Home'

const columnHelper = createColumnHelper<ITask>()

export const columns: ColumnDef<ITask, any>[] = [
  columnHelper.accessor('uuid', {
    header: info => info.column.id,
    cell: info => info.getValue(),
    footer: info => info.column.id,
    enableSorting: false
  }),
  columnHelper.accessor('status', {
    header: info => info.column.id,
    cell: info => info.getValue(),
    enableColumnFilter: false
  }),
  columnHelper.accessor('date_completed', {
    header: info => info.column.id,
    cell: info => info.getValue(),
    enableColumnFilter: false
  }),
  columnHelper.accessor('time_taken', {
    header: info => info.column.id,
    cell: info => info.getValue(),
    enableColumnFilter: false
  }),
  columnHelper.accessor('ip_address', {
    header: info => info.column.id,
    cell: info => info.getValue(),
    enableSorting: false
  })
]

