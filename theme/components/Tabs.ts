import type { ComponentStyleConfig } from '@chakra-ui/theme'
import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS } from '../constants'

const Tabs: ComponentStyleConfig = {
  baseStyle: props => ({
    tab: {
      fontStyle: 'normal',
      fontSize: '0.875rem',
      lineHeight: '1.4rem',
      fontWeight: '400',
      fontFamily: 'ABC Favorit Trial',
      padding: '0',
      paddingInlineStart: '0',
      paddingInlineEnd: '0',
      WebkitPaddingEnd: '0',
      WebkitPaddingStart: '0',
      margin: '0 1rem -0.125rem 1rem',
      color: mode(NAMED_COLORS.GREY, NAMED_COLORS.PALE_GREY)(props),
      _focus: {
        boxShadow: 'none',
      },
      _selected: {
        borderBottomWidth: '0.125rem',
        borderBottomStyle: 'solid',
        borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      },
      ':first-child': {
        marginLeft: 0,
      },
    },
    tablist: {
      borderBottomWidth: '0.125rem',
      borderBottomStyle: 'solid',
      borderColor: mode(
        NAMED_COLORS.LIGHTER_GREY,
        NAMED_COLORS.DARK_GREY
      )(props),
    },
  }),
  defaultProps: {
    variant: null,
  },
}

export default Tabs
