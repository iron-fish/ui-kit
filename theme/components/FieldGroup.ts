import type { ComponentStyleConfig } from '@chakra-ui/theme'

import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS } from 'theme/constants'

const FieldGroup: ComponentStyleConfig = {
  parts: ['container', 'child'],
  baseStyle: props => ({
    child: {
      h: '4.313rem',
      bg: mode(NAMED_COLORS.WHITE, NAMED_COLORS.BLACK)(props),
      borderCollapse: 'collapse',
      borderRadius: '0.25rem',
      border: '0.063rem solid',
      borderColor: mode(NAMED_COLORS.LIGHT_GREY, NAMED_COLORS.DARK_GREY)(props),
      boxShadow: '0 0.25rem 0.688rem  rgba(0, 0, 0, 0.04)',
      _hover: {
        borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      },
      _focus: {
        borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        borderWidth: '0.094rem',
      },
      _focusWithin: {
        borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        borderWidth: '0.094rem',
      },
    },
  }),
}

export default FieldGroup
