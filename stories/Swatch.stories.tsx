/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Swatch from './Swatch'

export default {
  title: 'Components/Swatch',
  component: Swatch,
} as ComponentMeta<typeof Swatch>

export const SwatchDemo: ComponentStory<typeof Swatch> = () => (
  <Swatch name="custom" hex="#cc0000" />
)
