import { Box, Flex, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import ColorModeSwitcher from 'components/ColorModeSwitcher'

export default function Examples() {
  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      p="4"
    >
      <Box marginLeft="auto">
        <ColorModeSwitcher />
      </Box>
      <Box w="100%">
        <Table variant="blocks">
          <Thead>
            <Tr>
              <Th>Block Height</Th>
              <Th>Size</Th>
              <Th>TXN</Th>
              <Th>Block Hash</Th>
              <Th>Timestamp</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td color="#2C72FF">23940194</Td>
              <Td>2.33kb</Td>
              <Td>1</Td>
              <Td>0000...5665...3463...4564</Td>
              <Td>6/22/2021 8:09:45PM</Td>
            </Tr>
            <Tr>
              <Td color="#2C72FF">23940193</Td>
              <Td>2.31kb</Td>
              <Td>1</Td>
              <Td>0000...5664...2313...4585</Td>
              <Td>6/22/2021 8:09:41PM</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Flex>
  )
}
