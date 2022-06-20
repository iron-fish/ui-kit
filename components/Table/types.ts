import { ReactNode, MouseEvent } from 'react'
import { FlexProps, StyleProps, TableProps } from '@chakra-ui/react'

export interface RowItemProps extends FlexProps {
  label: ReactNode
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
}
