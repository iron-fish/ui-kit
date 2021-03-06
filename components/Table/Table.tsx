import { FC } from 'react'

import {
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
  ...rest
}) => {
  const $bg = useColorModeValue(NAMED_COLORS.WHITE, NAMED_COLORS.DARKER_GREY)
  const borderStyle = {
    base: 'none !important',
    lg: 'inherit !important',
  }

  return (
    <Table {...rest}>
      <Thead display={{ base: 'none', lg: 'table-header-group' }}>
        <Tr>
          {columns.map(column => (
            <Th textTransform={textTransform} key={column.key}>
              {column.label}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data?.map((block, index) => (
          <Tr
            key={block?.id || `load-${index}`}
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
            cursor={block && onRowClick ? 'pointer' : 'default'}
            onClick={() => block && onRowClick && onRowClick(block)}
          >
            {columns.map(column => (
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
              >
                <RowItem
                  label={column.label}
                  {...column.ItemProps}
                  textTransform={textTransform}
                >
                  {block ? column.render(block) : <RowItemSpin minW="4rem" />}
                </RowItem>
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default CommonTable
