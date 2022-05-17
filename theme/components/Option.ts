import type { ComponentStyleConfig } from '@chakra-ui/theme'

import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS } from 'theme/constants'
import { FONTS } from 'styles/constants'

const Option: ComponentStyleConfig = {
  baseStyle: props => ({
    h: '4.063rem',
    px: '1.5rem',
    py: '0.75rem',
    cursor: 'pointer',
    '.option': {
      '&-label': {
        fontSize: '1rem',
        fontWeight: '400',
        fontFamily: FONTS.FAVORIT,
        color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      },
      '&-text': {
        fontSize: '0.75rem',
        fontWeight: '400',
        fontFamily: FONTS.FAVORIT,
        color: mode(NAMED_COLORS.GREY, NAMED_COLORS.PALE_GREY)(props),
      },
    },
  }),
}

export default Option
