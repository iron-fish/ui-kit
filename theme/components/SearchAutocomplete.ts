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
    nav_search: props => ({
      popover: {
        borderRadius: '1.875rem',
        bg: mode(NAMED_COLORS.WHITE, NAMED_COLORS.DARKER_GREY)(props),
        _focus: {
          boxShadow: 'none',
        },
      },
      popoverBody: {
        padding: '16px 0',
      },
      emptyOption: {
        padding: '0 32px',
        fontSize: '1rem',
        lineHeight: '1.5',
        fontWeight: '400',
        fontFamily: 'ABC Favorit Trial',
        color: mode(NAMED_COLORS.GREY, NAMED_COLORS.PALE_GREY)(props),
      },
      groupTitleWrapper: {
        padding: '16px 32px 11px',
        fontSize: '0.875rem',
        fontWeight: '400',
        lineHeight: '160%',
        fontFamily: 'ABC Favorit Trial',
      },
      groupOptionWrapper: {
        padding: '8px 32px',
        _hover: {
          bg: mode(NAMED_COLORS.LIGHTER_GREY, NAMED_COLORS.DARK_GREY)(props),
          transition: 'all 300ms ease-in',
        },
        _last: {
          marginBottom: '16px',
        },
      },
    }),
  },
}

export default SearchAutocomplete