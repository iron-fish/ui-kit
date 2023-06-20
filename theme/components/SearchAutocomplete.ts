/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import type { ComponentStyleConfig } from '@chakra-ui/theme'

import { mode } from '@chakra-ui/theme-tools'
import { FONTS, NAMED_COLORS } from '../constants'

const SearchAutocomplete: ComponentStyleConfig = {
  parts: [
    'popover',
    'popoverBody',
    'emptyOption',
    'groupHeader',
    'groupOptionWrapper',
  ],
  variants: {
    navSearch: props => ({
      popover: {
        borderRadius: '1.875rem',
        bg: mode(NAMED_COLORS.WHITE, NAMED_COLORS.DARKER_GREY)(props),
        _focus: {
          boxShadow: 'none',
        },
      },
      popoverBody: {
        padding: '1.75rem 0',
        '.option--is-focused': {
          bg: mode(NAMED_COLORS.LIGHTER_GREY, NAMED_COLORS.DARK_GREY)(props),
          transition: 'all 300ms ease-in',
        },
      },
      emptyOption: {
        padding: '0 2rem',
        fontSize: '1rem',
        lineHeight: '1.5',
        fontWeight: '400',
        fontFamily: FONTS.FAVORIT,
        color: mode(NAMED_COLORS.GREY, NAMED_COLORS.PALE_GREY)(props),
        m: '-0.75rem 0',
      },
      group: {
        _first: {
          marginTop: '-0.75rem',
        },
      },
      groupHeader: {
        p: '1rem 2rem 0.75rem',
      },
      groupOptionWrapper: {
        padding: '0.5rem 2rem',
        transition: 'all 300ms ease-in',
        _hover: {
          bg: mode(NAMED_COLORS.LIGHTER_GREY, NAMED_COLORS.DARK_GREY)(props),
        },
      },
    }),
  },
}

export default SearchAutocomplete
