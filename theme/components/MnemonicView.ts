import type { ComponentStyleConfig } from '@chakra-ui/theme'

import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS, FONTS } from 'theme/constants'

const MnemonicView: ComponentStyleConfig = {
  baseStyle: props => ({
    container: {
      background: mode(NAMED_COLORS.WHITE, NAMED_COLORS.DARKER_GREY)(props),
      border: '1px solid',
      borderColor: mode(NAMED_COLORS.LIGHT_GREY, NAMED_COLORS.DARK_GREY)(props),
      boxShadow: '0px 4px 11px rgba(0, 0, 0, 0.04)',
      borderRadius: '4px',
      padding: '12px 24px 24px',
    },
    header: {
      color: mode(NAMED_COLORS.GREY, NAMED_COLORS.PALE_GREY)(props),
    },
    icons: {
      color: mode(NAMED_COLORS.BLACK, NAMED_COLORS.WHITE)(props),
    },
    item: {
      border: '1px solid',
      borderColor: mode(NAMED_COLORS.LIGHT_GREY, NAMED_COLORS.DARK_GREY)(props),
      backgroundColor: mode(NAMED_COLORS.WHITE, NAMED_COLORS.DARK_GREY)(props),
      boxShadow: '0px 4px 11px rgba(0, 0, 0, 0.04)',
      borderRadius: '4px',
      color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      fontFamily: FONTS.EXTENDED,
    },
  }),
}

export default MnemonicView
