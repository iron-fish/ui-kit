import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useColorMode } from '@chakra-ui/react'

import ColorModeSwitcher from 'components/ColorModeSwitcher'

export default {
  title: 'Components/ColorModeSwitcher',
  component: ColorModeSwitcher,
} as ComponentMeta<typeof ColorModeSwitcher>

const ThemeColor: FC = () => {
  const { colorMode } = useColorMode()

  return <span>Color mode is: {colorMode}</span>
}

export const ColorModeSwitcherDemo: ComponentStory<FC> = () => (
  <ThemeColor />
)
