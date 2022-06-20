import { FC, useState, useEffect } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box, Flex } from '@chakra-ui/react'
import { CommonTable } from 'components'
import { NAMED_COLORS } from 'theme/constants'

export default {
  title: 'Components/CommonTable',
  component: CommonTable,
} as ComponentMeta<typeof CommonTable>

type BlockType = {
  id: number
  hash: string
  size: number
  sequence: number
  transactions_count: number
  timestamp: string
}

const demoData = [
  {
    id: 1652264,
    hash: '000000000005fa49b5756655bc58f03204c3b1967e35a52a33fa2487c330126b',
    sequence: 43248,
    size: 302838,
    timestamp: '2022-06-09T15:04:09.378Z',
    transactions_count: 54,
  },
  {
    id: 1652263,
    hash: '0000000000011f14770f1370d6b3782bc603d970f6717159ab85952bdc392db5',
    sequence: 43247,
    transactions_count: 155,
    timestamp: '2022-06-09T15:03:39.370Z',
    size: 853817,
  },
  {
    id: 1652262,
    hash: '00000000000a1dbdde9052f966b00c4676fb3bd293c6a1ba97b212dc09fed845',
    sequence: 43246,
    transactions_count: 10,
    timestamp: '2022-06-09T15:03:26.347Z',
    size: 47966,
  },
  {
    id: 1652261,
    hash: '000000000003969cd90417d7b2b27751e957835c428fb868beb407ce3b64dea0',
    sequence: 43245,
    transactions_count: 130,
    timestamp: '2022-06-09T15:02:54.648Z',
    size: 707019,
  },
  {
    id: 1652260,
    hash: '000000000007113347ce130452e2477b636f5fb0fb7ee74b139319d8fdb05635',
    sequence: 43244,
    transactions_count: 118,
    timestamp: '2022-06-09T15:02:03.800Z',
    size: 626686,
  },
]

const COLUMNS: ColumnProps<BlockType>[] = [
  {
    key: 'block-height',
    label: 'Block Height',
    render: block => (
      <Box color={NAMED_COLORS.LIGHT_BLUE}>{block.sequence}</Box>
    ),
  },
  {
    key: 'block-size',
    label: 'Size',
    render: block => block.size,
  },
  {
    key: 'block-transactions',
    label: 'TXN',
    render: block => block.transactions_count,
  },
  {
    key: 'block-hash',
    label: 'Block Hash',
    render: block => block.hash,
  },
  {
    key: 'block-timestamp',
    label: 'Timestamp',
    render: block => block.timestamp,
  },
]

const emptyData = new Array(5).fill(null)

export const BlockTable: ComponentStory<FC> = args => {
  const [data, setData] = useState(emptyData)

  useEffect(() => {
    setTimeout(() => setData(demoData), 1500)
  }, [])

  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      p="4"
    >
      <Box w="100%">
        <CommonTable
          columns={COLUMNS}
          data={args.loading ? emptyData : data}
          onRowClick={() => alert('row clicked')}
        />
      </Box>
    </Flex>
  )
}
BlockTable.args = {
  loading: false,
}
