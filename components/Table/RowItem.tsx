import { FC } from 'react'
import { Flex, Th, Table, Thead, Tbody, Tr, Td } from '@chakra-ui/react'

import { RowItemProps } from './types'

const RowItem: FC<RowItemProps> = ({
  label = null,
  children,
  textTransform,
  tableComponentProps: {
    tableProps,
    tableHeadProps,
    tableHeadRowProps,
    tableHeadCellProps,
    tableBodyProps,
    tableBodyRowProps,
    tableBodyCellProps,
  } = {},
  ...rest
}) =>
  label || children ? (
    <Flex direction="column" {...rest}>
      <Table variant="rowItem" {...tableProps}>
        {label && (
          <Thead {...tableHeadProps}>
            <Tr display={{ base: 'block', lg: 'none' }} {...tableHeadRowProps}>
              <Th textTransform={textTransform} {...tableHeadCellProps}>
                {label}
              </Th>
            </Tr>
          </Thead>
        )}
        <Tbody {...tableBodyProps}>
          <Tr {...tableBodyRowProps}>
            <Td {...tableBodyCellProps}>{children}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  ) : null

export default RowItem
