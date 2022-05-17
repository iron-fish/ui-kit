import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box, Flex } from '@chakra-ui/react'

export default {
  title: 'Components/Box',
  component: Box,
} as ComponentMeta<typeof Box>

export const BorderedBox: ComponentStory<FC> = () => (
  <Flex w="100%" wrap="wrap">
    <Box h="7.5rem" w="12.5rem" layerStyle="card"></Box>
    <Box h="7.5rem" w="12.5rem" layerStyle="card"></Box>
  </Flex>
)
