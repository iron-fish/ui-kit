/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import type { ComponentStyleConfig } from '@chakra-ui/theme'

import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS, FONTS } from 'theme/constants'

const MnemonicView: ComponentStyleConfig = {
  baseStyle: props => ({
    container: {
      background: mode(NAMED_COLORS.WHITE, NAMED_COLORS.DARKER_GREY)(props),
      border: '0.0625rem solid',
      borderColor: mode(NAMED_COLORS.LIGHT_GREY, NAMED_COLORS.DARK_GREY)(props),
      boxShadow: '0rem 0.25rem 0.6875rem rgba(0, 0, 0, 0.04)',
      borderRadius: '0.25rem',
      padding: '0.75rem 1.5rem 1.5rem',
      _invalid: {
        borderColor: NAMED_COLORS.RED,
      },
    },
    header: {
      color: mode(NAMED_COLORS.GREY, NAMED_COLORS.PALE_GREY)(props),
    },
    icons: {
      color: mode(NAMED_COLORS.BLACK, NAMED_COLORS.WHITE)(props),
    },
    inputContainer: {
      border: '0.0625rem solid',
      borderColor: mode(NAMED_COLORS.LIGHT_GREY, NAMED_COLORS.DARK_GREY)(props),
      backgroundColor: mode(NAMED_COLORS.WHITE, NAMED_COLORS.DARK_GREY)(props),
      boxShadow: '0rem 0.25rem 0.6875rem rgba(0, 0, 0, 0.04)',
      borderRadius: '0.25rem',
      color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
    },
    input: {
      fontSize: '1rem',
      p: '0.375rem 0rem',
      fontFamily: FONTS.FAVORIT,
      _placeholder: {
        color: mode(NAMED_COLORS.GREY, NAMED_COLORS.PALE_GREY)(props),
      },
      _invalid: {
        _placeholder: {
          color: NAMED_COLORS.RED,
        },
      },
    },
  }),
}

export default MnemonicView
