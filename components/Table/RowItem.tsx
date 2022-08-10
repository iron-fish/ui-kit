import { FC } from 'react'
import { Flex, Th, Table, Thead, Tbody, Tr, Td } from '@chakra-ui/react'

import { RowItemProps } from './types'

const RowItem: FC<RowItemProps> = ({
  label = null,
  children,
  textTransform,
  ...rest
}) =>
  label || children ? (
    <Flex direction="column" {...rest}>
      <Table variant="rowItem">
        <Thead>
          <Tr display={{ base: 'block', lg: 'none' }}>
            <Th textTransform={textTransform}>{label || '\u00A0'}</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{children}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  ) : null

export default RowItem
