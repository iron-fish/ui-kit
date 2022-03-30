import { FC } from 'react'
import { Button } from '@chakra-ui/react'
import { ComponentMeta } from '@storybook/react'
import { AddIcon } from '@chakra-ui/icons'

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

export const Primary: ComponentStory<FC> = args => (
  <>
    <Button {...args}>Button</Button>
    <Button leftIcon={<AddIcon />} {...args}>
      Button with icon
    </Button>
  </>
)
Primary.args = {
  ...commonProps,
  variant: 'primary',
  size: 'large',
}

export const Secondary: ComponentStory<FC> = args => (
  <>
    <Button {...args}>Button</Button>
    <Button leftIcon={<AddIcon />} {...args}>
      Button with icon
    </Button>
  </>
)
Secondary.args = {
  ...commonProps,
  variant: 'secondary',
  size: 'medium',
}

export const Tertiary: ComponentStory<FC> = args => (
  <>
    <Button {...args}>Button</Button>
    <Button leftIcon={<AddIcon />} {...args}>
      Button
    </Button>
  </>
)
Tertiary.args = {
  ...commonProps,
  variant: 'primary',
  size: 'small',
}
