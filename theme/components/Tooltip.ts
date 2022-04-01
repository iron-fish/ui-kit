import type { ComponentStyleConfig } from '@chakra-ui/theme'

import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS } from '../constants'

const Tooltip: ComponentStyleConfig = {
  baseStyle: props => ({
    fontStyle: 'normal',
    fontSize: '0.75rem',
    lineHeight: '1.2rem',
    fontWeight: '400',
    fontFamily: 'ABC Favorit Trial',
    padding: '0.625rem 1rem',
    color: mode(NAMED_COLORS.WHITE, NAMED_COLORS.DEEP_BLUE)(props),
    backgroundColor: mode(NAMED_COLORS.BLACK, NAMED_COLORS.WHITE)(props),
    borderRadius: '0.25rem',
    margin: '1.083rem',
    boxShadow: '0 0.313rem 0.875rem rgba(0, 0, 0, 0.07)',
  }),
}

export default Tooltip
