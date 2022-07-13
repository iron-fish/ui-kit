import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Checkbox, VStack } from '@chakra-ui/react'

export default {
  title: 'Components/Checkboxes',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

export const Checkboxes: ComponentStory<FC> = () => (
  <VStack spacing={15}>
    <Checkbox>Default chakra-ui checkbox</Checkbox>
  </VStack>
)
