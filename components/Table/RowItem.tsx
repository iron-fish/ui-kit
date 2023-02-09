import { FC } from 'react'
import { Flex, Th, Table, Thead, Tbody, Tr, Td } from '@chakra-ui/react'

import { RowItemProps } from './types'

const RowItem: FC<RowItemProps> = ({
  label = null,
  children,
  textTransform,
  lgBreakpointName,
  ...rest
}) =>
  label || children ? (
    <Flex direction="column" {...rest}>
      <Table variant="rowItem">
        {label && (
          <Thead>
            <Tr display={{ base: 'block', [lgBreakpointName]: 'none' }}>
              <Th textTransform={textTransform}>{label}</Th>
            </Tr>
          </Thead>
        )}
        <Tbody>
          <Tr>
            <Td>{children}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  ) : null

export default RowItem
