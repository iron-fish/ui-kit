/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import type { ComponentStyleConfig } from '@chakra-ui/theme'

import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS } from 'theme/constants'

const FieldGroup: ComponentStyleConfig = {
  parts: ['container', 'child'],
  baseStyle: props => ({
    child: {
      h: '4.313rem',
      bg: mode(NAMED_COLORS.WHITE, NAMED_COLORS.DARKER_GREY)(props),
      borderCollapse: 'collapse',
      borderRadius: '0.25rem',
      border: '0.063rem solid',
      ml: '-0.063rem',
      borderColor: mode(NAMED_COLORS.LIGHT_GREY, NAMED_COLORS.DARK_GREY)(props),
      boxShadow: '0 0.25rem 0.688rem  rgba(0, 0, 0, 0.04)',
      transition: 'all 300ms ease-in',
      zIndex: 10,
      ':first-child': {
        ml: '0',
      },
      _hover: {
        zIndex: 15,
        borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      },
      _focus: {
        zIndex: 15,
        borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        borderWidth: '0.094rem',
      },
      _focusWithin: {
        zIndex: 15,
        borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        borderWidth: '0.094rem',
      },
    },
  }),
}

export default FieldGroup
