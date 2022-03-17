import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ColorModeSwitcher from 'components/ColorModeSwitcher'

export default {
  title: 'Components/ColorModeSwitcher',
  component: ColorModeSwitcher,
} as ComponentMeta<typeof ColorModeSwitcher>

export const DefaultColorModeSwitcher: ComponentStory<
  typeof ColorModeSwitcher
> = () => <ColorModeSwitcher />
