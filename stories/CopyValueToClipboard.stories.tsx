/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Flex, Input } from '@chakra-ui/react'
import { CopyValueToClipboard } from 'components'
import { NAMED_COLORS } from 'theme/constants'

export default {
  title: 'Components/CopyValueToClipboard',
  component: CopyValueToClipboard,
} as ComponentMeta<typeof CopyValueToClipboard>

export const CopyToClipboard: ComponentStory<FC> = () => (
  <Flex w="100%" direction="column" gap="10px">
    <CopyValueToClipboard
      label={<h5>visible value</h5>}
      value={'actual value'}
      copyTooltipText="Copy to clipboard"
      copiedTooltipText="Copied"
    />
    <CopyValueToClipboard
      label={'visible blue value'}
      value={'blue color'}
      copyTooltipText="Copy to clipboard"
      copiedTooltipText="Copied"
      labelProps={{
        ml: '1rem',
        color: NAMED_COLORS.LIGHT_BLUE,
        overflow: 'hidden',
        as: 'h4',
      }}
      iconButtonProps={{
        color: NAMED_COLORS.GREY,
      }}
    />
    <Input placeholder="past copied value here" />
  </Flex>
)
