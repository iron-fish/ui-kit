/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

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

export const ColorModeSwitcherDemo: ComponentStory<FC> = () => <ThemeColor />
