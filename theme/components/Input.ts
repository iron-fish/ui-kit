import type { ComponentStyleConfig } from '@chakra-ui/theme'

import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS } from '../constants'
import { TYPEFACES } from 'styles'

const Input: ComponentStyleConfig = {
  parts: ['container', 'child'],
  variants: {
    search: props => ({
      field: {
        ...TYPEFACES.H5,
        border: '0.063rem solid',
        color: mode(NAMED_COLORS.LIGHT_GRAY, NAMED_COLORS.DARKER_GREY)(props),
        boxShadow: '0 0.25rem 0.688rem rgba(0, 0, 0, 0.04)',
        borderRadius: '0.25rem',
      },
      input: {
        fontSize: '25px',
      },
    }),
  },
}

export default Input
