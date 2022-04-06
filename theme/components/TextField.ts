import type { ComponentStyleConfig } from '@chakra-ui/theme'

import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS } from 'theme/constants'

const TextField: ComponentStyleConfig = {
  parts: ['container', 'label', 'inputWrapper'],
  baseStyle: props => ({
    container: {
      h: '4.313rem',
      px: '1.5rem',
      py: '0.75rem',
      borderRadius: '0.25rem',
      bg: mode(NAMED_COLORS.WHITE, NAMED_COLORS.DARKER_GREY)(props),
      border: '0.063rem solid',
      borderColor: mode(NAMED_COLORS.LIGHT_GREY, NAMED_COLORS.DARK_GREY)(props),
      boxShadow: '0 0.25rem 0.688rem rgba(0, 0, 0, 0.04)',
      _hover: {
        borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      },
      _focusWithin: {
        borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        borderWidth: '0.094rem',
      },
    },
    label: {
      fontSize: '0.75rem',
      p: '0.25rem',
      fontWeight: '400',
      fontFamily: 'ABC Favorit Trial',
      color: mode(NAMED_COLORS.GREY, NAMED_COLORS.PALE_GREY)(props),
    },
    inputWrapper: {
      fontSize: '1rem',
      p: '0.25rem',
      fontWeight: '400',
      fontFamily: 'ABC Favorit Trial',
      color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
    },
  }),
  defaultProps: {
    h: '4.313rem',
    px: '1.5rem',
    py: '0.75rem',
    borderRadius: '0.25rem',
    border: '0.063rem solid',
  },
}

export default TextField
