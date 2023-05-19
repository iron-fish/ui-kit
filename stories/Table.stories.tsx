import { FC, useState, useEffect } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box, Flex, Link, chakra } from '@chakra-ui/react'
import { CommonTable } from 'components'
import { NAMED_COLORS } from 'theme/constants'
import Caret from 'svgx/common/icon-caret'

export default {
  title: 'Components/Table',
  component: CommonTable,
  argTypes: {
    textTransform: {
      options: ['capitalize', null, 'uppercase'],
      control: { type: 'select' },
    },
  },
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
    hash: '0000...97a3...d235...8435',
    sequence: 43248,
    size: 302838,
    timestamp: '2022-06-09T15:04:09.378Z',
    transactions_count: 54,
  },
  {
    id: 1652263,
    hash: '0000...97a3...d235...8435',
    sequence: 43247,
    transactions_count: 155,
    timestamp: '2022-06-09T15:03:39.370Z',
    size: 853817,
  },
  {
    id: 1652262,
    hash: '0000...97a3...d235...8435',
    sequence: 43246,
    transactions_count: 10,
    timestamp: '2022-06-09T15:03:26.347Z',
    size: 47966,
  },
  {
    id: 1652261,
    hash: '0000...97a3...d235...8435',
    sequence: 43245,
    transactions_count: 130,
    timestamp: '2022-06-09T15:02:54.648Z',
    size: 707019,
  },
  {
    id: 1652260,
    hash: '0000...97a3...d235...8435',
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
  {
    key: 'actions',
    label: '',
    WrapperProps: {
      display: 'flex',
    },
    ItemProps: {
      justifyContent: 'flex-end',
    },
    render: () => (
      <Link
        sx={{
          color: NAMED_COLORS.LIGHT_BLUE,
          _hover: {
            color: NAMED_COLORS.LIGHT_BLUE,
          },
        }}
      >
        <Flex>
          <chakra.h5 mr="0.3125rem">View Details</chakra.h5>
          <Caret />
        </Flex>
      </Link>
    ),
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
          textTransform={args.textTransform}
          columns={COLUMNS}
          data={args.loading ? emptyData : data}
          onRowClick={() => alert('row clicked')}
          disableHover={args.disableHover}
        />
      </Box>
    </Flex>
  )
}
BlockTable.args = {
  loading: false,
  textTransform: null,
  disableHover: false,
}
