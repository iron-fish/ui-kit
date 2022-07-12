import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Checkbox, VStack } from '@chakra-ui/react'
import { CheckBox } from 'components'

export default {
  title: 'Components/Checkboxes',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

export const Checkboxes: ComponentStory<FC> = () => (
  <VStack spacing={15}>
    <CheckBox>UI-kit checkbox</CheckBox>
    <Checkbox>Default chakra-ui checkbox</Checkbox>
  </VStack>
)
