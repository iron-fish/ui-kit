import type { ComponentStyleConfig } from '@chakra-ui/theme'

import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS } from '../constants'

const SearchAutocomplete: ComponentStyleConfig = {
  parts: [
    'popover',
    'popoverBody',
    'emptyOption',
    'groupOptionTitle',
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
        fontFamily: 'ABC Favorit Trial',
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
        _hover: {
          bg: mode(NAMED_COLORS.LIGHTER_GREY, NAMED_COLORS.DARK_GREY)(props),
          transition: 'all 300ms ease-in',
        },
      },
    }),
  },
}

export default SearchAutocomplete
