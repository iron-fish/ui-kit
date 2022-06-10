import type { ComponentStyleConfig } from '@chakra-ui/theme'

import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS, FONTS } from 'theme/constants'

const Kbd: ComponentStyleConfig = {
  baseStyle: props => ({
    bgColor: mode(NAMED_COLORS.LIGHT_GREY, NAMED_COLORS.DARKER_GREY)(props),
    p: '0.1875rem 0.375rem',
    borderRadius: '0.125rem',
    fontFamily: FONTS.EXTENDED,
    fontWeight: 400,
    lineHeight: '160%',
    fontSize: '0.875rem',
    border: 'unset',
  }),
}

export default Kbd
