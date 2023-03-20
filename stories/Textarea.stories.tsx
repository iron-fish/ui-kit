import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Textarea } from '@chakra-ui/react'

export default {
  title: 'Components/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>

export const TextareaComponent: ComponentStory<FC> = () => (
  <Textarea placeholder={'placeholder text'} />
)
