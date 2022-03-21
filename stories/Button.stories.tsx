import React from 'react'
import { Button, Icon } from '@chakra-ui/react'
import { ComponentMeta } from '@storybook/react'

const DemoPlusIcon: FC = () => (
  <Icon viewBox="0 0 24 24">
    <path d="M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z" />
  </Icon>
)

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'select' },
    },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>

const commonProps = {
  isDisabled: false,
}

export const Primary = args => (
  <>
    <Button {...args}>Button</Button>
    <Button leftIcon={<DemoPlusIcon />} {...args}>
      Button with icon
    </Button>
  </>
)
Primary.args = {
  ...commonProps,
  variant: 'primary',
  size: 'large',
}

export const Secondary = args => (
  <>
    <Button {...args}>Button</Button>
    <Button leftIcon={<DemoPlusIcon />} {...args}>
      Button with icon
    </Button>
  </>
)
Secondary.args = {
  ...commonProps,
  variant: 'secondary',
  size: 'medium',
}

export const Tertiary = args => (
  <>
    <Button {...args}>Button</Button>
    <Button leftIcon={<DemoPlusIcon />} {...args}>
      Button
    </Button>
  </>
)
Tertiary.args = {
  ...commonProps,
  variant: 'primary',
  size: 'small',
}
