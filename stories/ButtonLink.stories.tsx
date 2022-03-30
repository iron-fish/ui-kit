import { FC } from 'react'
import { Button, Icon } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AddIcon } from '@chakra-ui/icons'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Link: ComponentStory<FC> = () => (
  <>
    <Button variant="text_link">Text link</Button>
    <Button leftIcon={<AddIcon />} variant="text_link">
      Text link with icon
    </Button>
  </>
)
