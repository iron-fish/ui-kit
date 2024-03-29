/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import type { ComponentStyleConfig } from '@chakra-ui/theme'

import { mode } from '@chakra-ui/theme-tools'
import { FONTS, NAMED_COLORS } from 'theme/constants'

const Menu: ComponentStyleConfig = {
  parts: ['button', 'list', 'item'],
  baseStyle: props => ({
    button: {
      boxShadow: '0rem 0.25rem 0.688rem rgba(0, 0, 0, 0.04)',
      borderRadius: '3rem',
      width: '3rem',
      height: '3rem',
      border: '0.063rem solid',
      borderColor: mode(NAMED_COLORS.LIGHT_GREY, NAMED_COLORS.WHITE)(props),
      bgColor: mode(NAMED_COLORS.WHITE, NAMED_COLORS.BLACK)(props),
      '.chakra-icon': {
        color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      },
      _hover: {
        borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        bgColor: NAMED_COLORS.WHITE,
        '.chakra-icon': {
          color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.DEEP_BLUE)(props),
        },
      },
    },
    list: {
      border: '0.063rem solid',
      borderColor: mode(
        NAMED_COLORS.LIGHTER_GREY,
        NAMED_COLORS.DARK_GREY
      )(props),
      bgColor: mode(NAMED_COLORS.WHITE, NAMED_COLORS.DARKER_GREY)(props),
      boxShadow: '0rem 0.5rem 0.875rem rgba(0, 0, 0, 0.12)',
      borderRadius: '0.25rem',
      minWidth: '0rem',
      padding: '0.5rem 0rem',
    },
    item: {
      color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      bg: 'unset',
      fontSize: '0.875rem',
      fontWeight: '400',
      lineHeight: '160%',
      letterSpacing: '0',
      fontFamily: FONTS.FAVORIT,
      padding: '0.5rem 1rem',
      transition: 'all 300ms ease-in',
      _focus: {
        bg: mode(NAMED_COLORS.LIGHTER_GREY, NAMED_COLORS.DARK_GREY)(props),
      },
    },
  }),
}
export default Menu
