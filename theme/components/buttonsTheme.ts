import type { ComponentStyleConfig } from '@chakra-ui/theme'
import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS } from 'styles/constants'

const getDisabledStyle = (props: object): object => ({
  bgColor: mode(NAMED_COLORS.LIGHTER_GREY, NAMED_COLORS.DARKER_GREY_1)(props),
  color: mode(NAMED_COLORS.PALE_GREY, NAMED_COLORS.DARKER_GREY_2)(props),
  borderColor: mode(
    NAMED_COLORS.LIGHTER_GREY,
    NAMED_COLORS.DARKER_GREY_1
  )(props),
})

const buttonsTheme: ComponentStyleConfig = {
  baseStyle: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontFamily: 'ABC Favorit Trial',
    lineHeight: '160%',
  },
  sizes: {
    large: {
      h: '4.313rem',
      fontSize: '1rem',
      borderRadius: '5.25rem',
      p: '1.375rem 2.125rem 1.313rem',
      '.chakra-button__icon': {
        marginRight: '0.875rem',
      },
    },
    medium: {
      h: '2.875rem',
      fontSize: '0.875rem',
      borderRadius: '4rem',
      boxSizing: 'bordered-box',
      p: '0.75rem 1.5rem',
      '.chakra-button__icon': {
        marginRight: '0.75rem',
      },
    },
    small: {
      h: '2.125rem',
      fontSize: '0.875rem',
      borderRadius: '4.625rem',
      p: '0.375rem 1rem',
      '.chakra-button__icon': {
        marginRight: '0.5rem',
      },
    },
  },
  variants: {
    primary: props => ({
      bgColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      color: mode(NAMED_COLORS.WHITE, NAMED_COLORS.DEEP_BLUE)(props),
      border: '0.063rem solid',
      boxShadow: '0rem 0.313rem 0.875rem rgba(0, 0, 0, 0.07)',
      '.chakra-button__icon': {
        fill: mode(NAMED_COLORS.WHITE, NAMED_COLORS.DEEP_BLUE)(props),
      },
      ':hover': {
        bgColor: mode(NAMED_COLORS.WHITE, NAMED_COLORS.DEEP_BLUE)(props),
        color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        '.chakra-button__icon': {
          fill: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        },
        ':disabled': getDisabledStyle,
      },
      ':disabled': {
        '.chakra-button__icon': {
          fill: mode(NAMED_COLORS.PALE_GREY, NAMED_COLORS.DARKER_GREY_2)(props),
        },
        ...getDisabledStyle(props),
      },
    }),
    secondary: props => ({
      bgColor: mode(NAMED_COLORS.WHITE, NAMED_COLORS.DEEP_BLUE)(props),
      color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      boxShadow: '0rem 0.25rem 0.688rem rgba(0, 0, 0, 0.04)',
      border: '0.063rem solid',
      borderColor: mode(NAMED_COLORS.LIGHTER_GREY, NAMED_COLORS.WHITE)(props),
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
        ':disabled': getDisabledStyle,
      },
      ':disabled': {
        '.chakra-button__icon': {
          fill: mode(NAMED_COLORS.PALE_GREY, NAMED_COLORS.DARKER_GREY_2)(props),
        },
        ...getDisabledStyle(props),
      },
    }),
    text_link: props => ({
      color: mode(NAMED_COLORS.GREY, NAMED_COLORS.PALE_GREY)(props),
      '.chakra-button__icon': {
        marginRight: '0.75rem',
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
