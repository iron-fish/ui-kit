/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import type { ComponentStyleConfig } from '@chakra-ui/theme'
import { keyframes } from '@chakra-ui/react'

import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS } from 'theme/constants'

const Link: ComponentStyleConfig = {
  variants: {
    ironFish: props => ({
      animation: `${keyframes`
      0% { background-color: ${mode(
        NAMED_COLORS.PALE_GREY,
        NAMED_COLORS.DARK_GREY
      )(props)} }
      100% { background-color: ${mode(
        NAMED_COLORS.LIGHT_GREY,
        NAMED_COLORS.GREY
      )(props)} }
    `} infinite 0.7s alternate`,
    }),
  },
}

export default Link
