import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box, Flex, Card, CardBody } from '@chakra-ui/react'

export default {
  title: 'Components/Box',
  component: Box,
} as ComponentMeta<typeof Box>

export const BorderedBox: ComponentStory<FC> = () => (
  <Flex w="100%" wrap="wrap" gap={'1rem'}>
    <Box h="7.5rem" w="12.5rem" layerStyle="card">
      Test
    </Box>
    <Box h="7.5rem" w="12.5rem" layerStyle="card"></Box>
    <Card variant="ironFish" h="7.5rem" w="12.5rem">
      <CardBody>Test</CardBody>
    </Card>
  </Flex>
)
