import { FC } from 'react'
import { Button } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AddIcon } from '@chakra-ui/icons'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Link: ComponentStory<FC> = () => (
  <>
    <Button variant="textLink">Text link</Button>
    <Button leftIcon={<AddIcon />} variant="textLink">
      Text link with icon
    </Button>
  </>
)
