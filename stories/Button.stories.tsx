import { FC } from 'react'
import { Button } from '@chakra-ui/react'
import { ComponentMeta } from '@storybook/react'
import IconAdd from 'svgx/common/icon-add'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'select' },
    },
    variant: {
      options: ['primary', 'secondary', 'ironfish-main'],
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
    <Button leftIcon={<IconAdd w="26px" h="26px" />} {...args}>
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
    <Button leftIcon={<IconAdd w="22px" h="22px" />} {...args}>
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
    <Button leftIcon={<IconAdd w="22px" h="22px" />} {...args}>
      Button
    </Button>
  </>
)
Tertiary.args = {
  ...commonProps,
  variant: 'primary',
  size: 'small',
}

export const Ironfish: ComponentStory<FC> = args => (
  <>
    <Button {...args} mr="2rem">
      Button
    </Button>
    <Button leftIcon={<IconAdd w="22px" h="22px" />} {...args}>
      Button
    </Button>
  </>
)
Ironfish.args = {
  ...commonProps,
  variant: 'ironfish-main',
  size: 'medium',
}
