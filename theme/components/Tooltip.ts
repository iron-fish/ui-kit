import type { ComponentStyleConfig } from '@chakra-ui/theme'

import { mode } from '@chakra-ui/theme-tools'
import { FONTS, NAMED_COLORS } from 'theme/constants'

const Tooltip: ComponentStyleConfig = {
  baseStyle: props => ({
    fontStyle: 'normal',
    fontSize: '0.75rem',
    lineHeight: '1.2rem',
    fontWeight: '400',
    fontFamily: FONTS.FAVORIT,
    padding: '0.625rem 1rem',
    color: mode(NAMED_COLORS.WHITE, NAMED_COLORS.DEEP_BLUE)(props),
    backgroundColor: mode(NAMED_COLORS.BLACK, NAMED_COLORS.WHITE)(props),
    borderRadius: '0.25rem',
    margin: '0.5rem',
    boxShadow: '0 0.313rem 0.875rem rgba(0, 0, 0, 0.07)',
    '--tooltip-bg': mode(NAMED_COLORS.BLACK, NAMED_COLORS.WHITE)(props),
  }),
}

export default Tooltip
