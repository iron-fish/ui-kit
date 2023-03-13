import type { ComponentStyleConfig } from '@chakra-ui/theme'

import { mode } from '@chakra-ui/theme-tools'
import { FONTS, NAMED_COLORS } from 'theme/constants'

const getDisabledStyle = (props: object): object => ({
  bgColor: mode(NAMED_COLORS.LIGHTER_GREY, NAMED_COLORS.DARKER_GREY_1)(props),
  color: mode(NAMED_COLORS.PALE_GREY, NAMED_COLORS.DARKER_GREY_2)(props),
  opacity: 1,
  borderColor: mode(
    NAMED_COLORS.LIGHTER_GREY,
    NAMED_COLORS.DARKER_GREY_1
  )(props),
})

const Button: ComponentStyleConfig = {
  baseStyle: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontFamily: FONTS.FAVORIT,
    lineHeight: '160%',
    _hover: {
      transition: 'border-color 300ms ease-in',
    },
    _focus: {
      boxShadow: 'none',
    },
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
      _hover: {
        bgColor: mode(NAMED_COLORS.WHITE, NAMED_COLORS.LIGHT_BLACK)(props),
        color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        '.chakra-button__icon': {
          fill: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        },
        _disabled: getDisabledStyle(props),
      },
      _disabled: {
        '.chakra-button__icon': {
          fill: mode(NAMED_COLORS.PALE_GREY, NAMED_COLORS.DARKER_GREY_2)(props),
        },
        ...getDisabledStyle(props),
      },
    }),
    secondary: props => ({
      bgColor: mode(NAMED_COLORS.WHITE, NAMED_COLORS.LIGHT_BLACK)(props),
      color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      boxShadow: '0rem 0.25rem 0.688rem rgba(0, 0, 0, 0.04)',
      border: '0.063rem solid',
      p: '0 1.5rem',
      borderColor: mode(NAMED_COLORS.LIGHT_GREY, NAMED_COLORS.DARK_GREY)(props),
      '.chakra-button__icon': {
        fill: mode(NAMED_COLORS.BLACK, NAMED_COLORS.WHITE)(props),
      },
      _hover: {
        '.chakra-button__icon': {
          fill: mode(NAMED_COLORS.BLACK, NAMED_COLORS.BLACK)(props),
        },
        bgColor: NAMED_COLORS.WHITE,
        borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        color: NAMED_COLORS.DEEP_BLUE,
        _disabled: getDisabledStyle(props),
      },
      _disabled: {
        '.chakra-button__icon': {
          fill: mode(NAMED_COLORS.PALE_GREY, NAMED_COLORS.DARKER_GREY_2)(props),
        },
        ...getDisabledStyle(props),
      },
    }),
    navItem: props => ({
      h: '2.5rem',
      w: '100%',
      fontSize: '0.875rem',
      fontFamily: FONTS.EXTENDED,
      color: mode(NAMED_COLORS.GREY, NAMED_COLORS.PALE_GREY)(props),
      borderRadius: '0.25rem',
      pr: '0.5rem',
      bgColor: mode(NAMED_COLORS.WHITE, NAMED_COLORS.LIGHT_BLACK)(props),
      justifyContent: 'flex-start',
      _focus: {
        boxShadow: null,
      },
      _hover: {
        color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      },
      _active: {
        bgColor: mode(NAMED_COLORS.LIGHTER_GREY, NAMED_COLORS.DARK_GREY)(props),
        color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        '.chakra-button__icon': {
          ':last-child': {
            display: 'block',
            marginLeft: 'auto',
          },
        },
      },
      '.chakra-button__icon': {
        color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        ':first-child': {
          marginRight: '1.25rem',
        },
        ':last-child': {
          display: 'none',
        },
      },
    }),
  },
}

export default Button
