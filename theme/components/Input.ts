import type { ComponentStyleConfig } from '@chakra-ui/theme'

import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS } from 'theme/constants'
import { POSSIBLE_FONTS as FONTS } from 'styles/constants'

const Input: ComponentStyleConfig = {
  parts: ['field', 'element'],
  baseStyle: props => ({
    field: {
      fontStyle: 'normal',
      fontSize: '0.875rem',
      lineHeight: '1.4rem',
      fontWeight: '400',
      fontFamily: FONTS.FAVORIT,
      border: '0.063rem solid',
      boxShadow: '0 0.25rem 0.688rem rgba(0, 0, 0, 0.04)',
      bgColor: mode(NAMED_COLORS.WHITE, NAMED_COLORS.DARKER_GREY)(props),
      borderColor: mode(NAMED_COLORS.LIGHT_GREY, NAMED_COLORS.DARK_GREY)(props),
      _placeholder: {
        color: mode(NAMED_COLORS.GREY, NAMED_COLORS.PALE_GREY)(props),
      },
      _focus: {
        borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      },
    },
  }),
  variants: {
    unstyled: {
      field: {
        border: 'none',
        boxShadow: 'none',
        borderColor: 'none',
        _focus: {
          borderColor: 'none',
        },
      },
    },
    search: {
      field: {
        h: '2.5rem',
        paddingLeft: '2.688rem',
        borderRadius: '0.25rem',
      },
      element: {
        paddingLeft: '0.625rem',
      },
    },
    nav_search: {
      field: {
        h: '2.875rem',
        paddingLeft: '3.125rem',
        borderRadius: '7.125rem',
      },
      element: {
        paddingLeft: '1.25rem',
      },
    },
  },
}

export default Input
