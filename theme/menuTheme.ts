import type { ComponentStyleConfig } from '@chakra-ui/theme'
import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS } from 'styles/constants'

const menuTheme: ComponentStyleConfig = {
  baseStyle: props => ({
    button: {
      boxShadow: '0px 4px 11px rgba(0, 0, 0, 0.04)',
      borderRadius: '48px',
      width: '48px',
      height: '48px',
      borderWidth: '1px',
      borderColor: mode(NAMED_COLORS.LIGHT_GREY, NAMED_COLORS.WHITE)(props),
      bgColor: mode(NAMED_COLORS.WHITE, NAMED_COLORS.BLACK)(props),
      '.chakra-icon': {
        fill: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      },
      ':hover': {
        borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        bgColor: NAMED_COLORS.WHITE,
        '.chakra-icon': {
          fill: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.DEEP_BLUE)(props),
        },
      },
    },
    list: {
      borderWidth: '1px',
      borderColor: mode(
        NAMED_COLORS.LIGHTER_GREY,
        NAMED_COLORS.DARK_GREY
      )(props),
      bgColor: mode(NAMED_COLORS.WHITE, NAMED_COLORS.DARKER_GREY)(props),
      boxShadow: '0px 8px 14px rgba(0, 0, 0, 0.12)',
      borderRadius: '4px',
      padding: '0px',
      minWidth: '0px',
      padding: '8px 0px',
    },
    item: {
      color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '160%',
      letterSpacing: '0',
      fontFamily: 'favorit-regular',
      fontFamily: 'ABC Favorit Trial',
      padding: '8px 16px',
    },
  }),
}
export default menuTheme
