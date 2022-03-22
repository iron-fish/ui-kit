import { FC } from 'react'
import { Button, Icon } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

const DemoPlusIcon: FC = () => (
  <Icon viewBox="0 0 24 24">
    <path d="M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z" />
  </Icon>
)

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Link: ComponentStory<FC> = () => (
  <>
    <Button variant="text_link">Text link</Button>
    <Button leftIcon={<DemoPlusIcon />} variant="text_link">
      Text link with icon
    </Button>
  </>
)
