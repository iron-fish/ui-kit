/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Checkbox, VStack } from '@chakra-ui/react'

export default {
  title: 'Components/Checkboxes',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

export const Checkboxes: ComponentStory<FC> = () => (
  <VStack spacing={15}>
    <Checkbox>Default chakra-ui checkbox</Checkbox>
  </VStack>
)
