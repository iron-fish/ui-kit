/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import type { ComponentStyleConfig } from '@chakra-ui/theme'

import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS, FONTS } from 'theme/constants'

const Checkbox: ComponentStyleConfig = {
  parts: ['control', 'label'],
  baseStyle: props => ({
    control: {
      border: '0.0625rem solid',
      borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      borderRadius: '0.125rem',
      _checked: {
        background: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        _hover: {
          background: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
          borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        },
      },
      _focus: {
        boxShadow: 'none',
      },
    },
    label: {
      fontFamily: FONTS.FAVORIT,
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    icon: {
      fontSize: '2xs',
    },
  }),
}

export default Checkbox
