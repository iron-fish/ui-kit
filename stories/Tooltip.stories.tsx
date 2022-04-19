import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tooltip, Flex } from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    placement: {
      options: ['auto', 'left', 'right', 'bottom', 'top'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Tooltip>

export const SearchInput: ComponentStory<FC> = args => (
  <Flex w={400} h={100} justify="center" align="center">
    <Tooltip {...args} label="Information tooltip">
      <InfoOutlineIcon />
    </Tooltip>
  </Flex>
)
SearchInput.args = {
  placement: 'auto',
  hasArrow: true,
}
