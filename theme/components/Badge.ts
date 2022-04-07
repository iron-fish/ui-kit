import type { ComponentStyleConfig } from '@chakra-ui/theme'

import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS } from 'theme/constants'

const Badge: ComponentStyleConfig = {
  variants: {
    navItem: props => ({
      bgColor: mode(NAMED_COLORS.LIGHT_GREY, NAMED_COLORS.DARKER_GREY)(props),
      p: '0.063rem 0.375rem',
      borderRadius: '0.125rem',
    }),
  },
}

export default Badge
