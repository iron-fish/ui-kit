import type { ComponentStyleConfig } from '@chakra-ui/theme'

import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS } from 'theme/constants'
import { FONTS } from 'theme/constants'

const Link: ComponentStyleConfig = {
  baseStyle: props => ({
    fontStyle: 'normal',
    fontSize: '0.875rem',
    lineHeight: '1.4rem',
    fontWeight: '400',
    fontFamily: FONTS.FAVORIT,
    color: mode(NAMED_COLORS.GREY, NAMED_COLORS.PALE_GREY)(props),
    _hover: {
      color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      textDecoration: null,
    },
    _focus: {
      boxShadow: 'none',
    },
  }),
  variants: {
    underlined: props => ({
      color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      _hover: {
        textDecoration: 'underline',
      },
    }),
  },
}

export default Link
