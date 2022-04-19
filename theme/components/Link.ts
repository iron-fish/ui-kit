import type { ComponentStyleConfig } from '@chakra-ui/theme'

import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS } from 'theme/constants'

const Link: ComponentStyleConfig = {
  baseStyle: props => ({
    fontStyle: 'normal',
    fontSize: '0.875rem',
    lineHeight: '1.4rem',
    fontWeight: '400',
    fontFamily: 'ABC Favorit Trial',
    color: mode(NAMED_COLORS.GREY, NAMED_COLORS.PALE_GREY)(props),
    _hover: {
      color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      textDecoration: null,
    },
  }),
}

export default Link
