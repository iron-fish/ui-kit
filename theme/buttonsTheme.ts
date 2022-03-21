import type { ComponentStyleConfig } from '@chakra-ui/theme'
import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS } from 'styles/constants'

const buttonsTheme: ComponentStyleConfig  = {
  baseStyle: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontFamily: 'ABC Favorit Trial',
    lineHeight: '160%',
  },
  sizes: {
    large: {
      h: '69px',
      fontSize: '16px',
      borderRadius: '84px',
      p: '22px 34px 21px',
      '.chakra-button__icon': {
        marginRight: '14px',
      },
    },
    medium: {
      h: '46px',
      fontSize: '14px',
      borderRadius: '64px',
      boxSizing: 'bordered-box',
      p: '12px 24px',
      '.chakra-button__icon': {
        marginRight: '12px',
      },
    },
    small: {
      h: '34px',
      fontSize: '14px',
      borderRadius: '74px',
      p: '6px 16px',
      '.chakra-button__icon': {
        marginRight: '8px',
      },
    },
  },
  variants: {
    primary: props => ({
      bgColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      color: mode(NAMED_COLORS.WHITE, NAMED_COLORS.DEEP_BLUE)(props),
      borderWidth: '1px',
      boxShadow: '0px 5px 14px rgba(0, 0, 0, 0.07)',
      '.chakra-button__icon': {
        fill: mode(NAMED_COLORS.WHITE, NAMED_COLORS.DEEP_BLUE)(props),
      },
      ':hover': {
        bgColor: mode(NAMED_COLORS.WHITE, NAMED_COLORS.BLACK)(props),
        color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        '.chakra-button__icon': {
          fill: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        },
        ':disabled': {
          backgroundColor: mode(
            NAMED_COLORS.LIGHTER_GREY,
            NAMED_COLORS.DARKER_GREY_1
          )(props),
          color: mode(
            NAMED_COLORS.PALE_GREY,
            NAMED_COLORS.DARKER_GREY_2
          )(props),
          borderColor: mode(
            NAMED_COLORS.LIGHTER_GREY,
            NAMED_COLORS.DARKER_GREY_1
          )(props),
        },
      },
      ':disabled': {
        '.chakra-button__icon': {
          fill: mode(NAMED_COLORS.PALE_GREY, NAMED_COLORS.DARKER_GREY_2)(props),
        },
        backgroundColor: mode(
          NAMED_COLORS.LIGHTER_GREY,
          NAMED_COLORS.DARKER_GREY_1
        )(props),
        color: mode(NAMED_COLORS.PALE_GREY, NAMED_COLORS.DARKER_GREY_2)(props),
        borderColor: mode(
          NAMED_COLORS.LIGHTER_GREY,
          NAMED_COLORS.DARKER_GREY_1
        )(props),
      },
    }),
    secondary: props => ({
      bgColor: mode(NAMED_COLORS.WHITE, NAMED_COLORS.DEEP_BLUE)(props),
      color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      borderColor: mode(NAMED_COLORS.LIGHTER_GREY, NAMED_COLORS.WHITE)(props),
      boxShadow: '0px 4px 11px rgba(0, 0, 0, 0.04)',
      borderWidth: '1px',
      '.chakra-button__icon': {
        fill: mode(NAMED_COLORS.BLACK, NAMED_COLORS.WHITE)(props),
      },
      ':hover': {
        '.chakra-button__icon': {
          fill: mode(NAMED_COLORS.BLACK, NAMED_COLORS.BLACK)(props),
        },
        bgColor: NAMED_COLORS.WHITE,
        borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        color: NAMED_COLORS.DEEP_BLUE,
        ':disabled': {
          backgroundColor: mode(
            NAMED_COLORS.LIGHTER_GREY,
            NAMED_COLORS.DARKER_GREY_1
          )(props),
          color: mode(
            NAMED_COLORS.PALE_GREY,
            NAMED_COLORS.DARKER_GREY_2
          )(props),
          borderColor: mode(
            NAMED_COLORS.LIGHTER_GREY,
            NAMED_COLORS.DARKER_GREY_1
          )(props),
        },
      },
      ':disabled': {
        '.chakra-button__icon': {
          fill: mode(NAMED_COLORS.PALE_GREY, NAMED_COLORS.DARKER_GREY_2)(props),
        },
        backgroundColor: mode(
          NAMED_COLORS.LIGHTER_GREY,
          NAMED_COLORS.DARKER_GREY_1
        )(props),
        color: mode(NAMED_COLORS.PALE_GREY, NAMED_COLORS.DARKER_GREY_2)(props),
        borderColor: mode(
          NAMED_COLORS.LIGHTER_GREY,
          NAMED_COLORS.DARKER_GREY_1
        )(props),
      },
    }),
    text_link: props => ({
      color: mode(NAMED_COLORS.GREY, NAMED_COLORS.PALE_GREY)(props),
      '.chakra-button__icon': {
        marginRight: '12px',
        fill: mode(NAMED_COLORS.LIGHTER_GREY, NAMED_COLORS.PALE_GREY)(props),
      },
      ':hover': {
        color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        '.chakra-button__icon': {
          fill: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        },
      },
    }),
  },
}

export default buttonsTheme
