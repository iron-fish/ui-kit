/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { ReactNode, MouseEvent } from 'react'
import {
  FlexProps,
  StyleProps,
  TableBodyProps,
  TableCellProps,
  TableHeadProps,
  TableProps,
  TableRowProps,
} from '@chakra-ui/react'

export interface TableComponentProps {
  tableProps?: TableProps
  tableHeadProps?: TableHeadProps
  tableHeadRowProps?: TableRowProps
  tableHeadCellProps?: TableCellProps
  tableBodyProps?: TableBodyProps
  tableBodyRowProps?: TableRowProps
  tableBodyCellProps?: TableCellProps
}
export interface RowItemProps extends FlexProps {
  label: ReactNode
  tableComponentProps?: TableComponentProps
}

export interface DataRowProps {
  onClick?: (e: MouseEvent<HTMLTableRowElement>) => void
}

export interface ColumnProps<T> {
  key: string
  label: ReactNode
  ItemProps?: FlexProps
  WrapperProps?: StyleProps
  render: (data: T) => ReactNode
}

export interface CommonTableProps<T> extends TableProps {
  data?: T[]
  columns?: ColumnProps<T>[]
  onRowClick?: (data: T) => void
  tableComponentProps?: TableComponentProps
  tableComponentRowItemProps?: TableComponentProps
  disableHover?: boolean
}
