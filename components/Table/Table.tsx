/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC } from 'react'

import {
  Link,
  LinkOverlay,
  LinkBox,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react'
import { NAMED_COLORS } from 'theme/constants'

import RowItem from './RowItem'
import RowItemSpin from './RowItemSpin'
import { CommonTableProps } from './types'

export const CommonTable: FC<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  CommonTableProps<any>
> = ({
  data = null,
  columns = [],
  textTransform = 'uppercase',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onRowClick,
  onRowHref,
  disableHover,
  tableComponentProps: {
    tableHeadProps,
    tableHeadRowProps,
    tableHeadCellProps,
    tableBodyProps,
    tableBodyRowProps,
    tableBodyCellProps,
  } = {},
  tableComponentRowItemProps,
  ...rest
}) => {
  const $bg = useColorModeValue(NAMED_COLORS.WHITE, NAMED_COLORS.DARKER_GREY)
  const borderStyle = {
    base: 'none !important',
    lg: 'inherit !important',
  }

  return (
    <Table {...rest}>
      <Thead
        display={{ base: 'none', lg: 'table-header-group' }}
        {...tableHeadProps}
      >
        <Tr {...tableHeadRowProps}>
          {columns.map(column => (
            <Th
              textTransform={textTransform}
              key={column.key}
              {...tableHeadCellProps}
            >
              {column.label}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody {...tableBodyProps}>
        {data?.map((block, index) => {
          const items = columns.map(column => (
            <Td
              key={column.key}
              {...column.WrapperProps}
              px={{
                base: '2rem',
                lg: 'inherit',
              }}
              py={{
                base: '1rem',
                lg: '1.625rem',
              }}
              borderTop={borderStyle}
              borderBottom={borderStyle}
              _first={{
                pl: '2rem',
                borderLeft: borderStyle,
              }}
              _last={{
                pr: '2rem',
                borderRight: borderStyle,
              }}
              {...tableBodyCellProps}
            >
              <LinkOverlay
                as={Link}
                href={onRowHref ? onRowHref(block) : undefined}
                style={{
                  display: 'flex',
                  position: 'inherit',
                  color: 'inherit',
                  outline: 'inherit',
                  outlineOffset: 'inherit',
                  fontStyle: 'inherit',
                  fontSize: 'inherit',
                  lineHeight: 'inherit',
                  fontWeight: 'inherit',
                  fontFamily: 'inherit',
                }}
              >
                <RowItem
                  label={column.label}
                  {...column.ItemProps}
                  textTransform={textTransform}
                  tableComponentProps={tableComponentRowItemProps}
                >
                  {block ? column.render(block) : <RowItemSpin minW="4rem" />}
                </RowItem>
              </LinkOverlay>
            </Td>
          ))

          return (
            <LinkBox
              transform="scale(1)"
              as={Tr}
              key={block?.id || `load-${index}`}
              className={disableHover ? 'no-hover' : ''}
              display={{
                base: 'flex',
                lg: 'table-row',
              }}
              flexWrap={{
                base: 'wrap',
                lg: 'nowrap',
              }}
              bg={$bg}
              mb="1rem"
              border="0.063rem solid"
              borderRadius="0.25rem"
              borderColor="inherit"
              boxShadow="0 0.25rem 0.668rem rgba(0, 0, 0, 0.04)"
              p={{ base: '1rem 0', lg: '1rem' }}
              cursor={
                block && (onRowClick || onRowHref) ? 'pointer' : 'default'
              }
              onClick={
                onRowClick
                  ? e => {
                      e.preventDefault()
                      e.stopPropagation()
                      block && onRowClick && onRowClick(block)
                    }
                  : undefined
              }
              {...tableBodyRowProps}
            >
              {items}
            </LinkBox>
          )
        })}
      </Tbody>
    </Table>
  )
}

export default CommonTable
