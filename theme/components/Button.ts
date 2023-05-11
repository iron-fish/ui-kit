import type { ComponentSingleStyleConfig } from '@chakra-ui/react'

import { FONTS, NAMED_COLORS } from 'theme/constants'

const DISABLED_STYLES = {
  bgColor: NAMED_COLORS.LIGHTER_GREY,
  color: NAMED_COLORS.PALE_GREY,
  opacity: 1,
  borderColor: NAMED_COLORS.LIGHTER_GREY,
  _dark: {
    bgColor: NAMED_COLORS.DARKER_GREY_1,
    color: NAMED_COLORS.DARKER_GREY_2,
    borderColor: NAMED_COLORS.DARKER_GREY_1,
  },
}

const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontFamily: FONTS.FAVORIT,
    lineHeight: '160%',
    transition:
      'border-color 300ms ease-in-out, background-color 300ms ease-in-out',
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
    primary: {
      bgColor: NAMED_COLORS.DEEP_BLUE,
      color: NAMED_COLORS.WHITE,
      border: '0.063rem solid',
      boxShadow: '0rem 0.313rem 0.875rem rgba(0, 0, 0, 0.07)',
      '.chakra-button__icon': {
        fill: NAMED_COLORS.WHITE,
      },
      _dark: {
        bgColor: NAMED_COLORS.WHITE,
        color: NAMED_COLORS.DEEP_BLUE,
        '.chakra-button__icon': {
          fill: NAMED_COLORS.DEEP_BLUE,
        },
      },
      _hover: {
        bgColor: NAMED_COLORS.WHITE,
        color: NAMED_COLORS.DEEP_BLUE,
        borderColor: NAMED_COLORS.DEEP_BLUE,
        '.chakra-button__icon': {
          fill: NAMED_COLORS.DEEP_BLUE,
        },
        _dark: {
          bgColor: NAMED_COLORS.LIGHT_BLACK,
          color: NAMED_COLORS.WHITE,
          borderColor: NAMED_COLORS.WHITE,
          '.chakra-button__icon': {
            fill: NAMED_COLORS.WHITE,
          },
        },
        _disabled: DISABLED_STYLES,
      },
      _disabled: {
        '.chakra-button__icon': {
          fill: NAMED_COLORS.PALE_GREY,
        },
        ...DISABLED_STYLES,
        _dark: {
          ...DISABLED_STYLES._dark,
          '.chakra-button__icon': {
            fill: NAMED_COLORS.DARKER_GREY_2,
          },
        },
      },
    },
    secondary: {
      bgColor: NAMED_COLORS.WHITE,
      color: NAMED_COLORS.DEEP_BLUE,
      boxShadow: '0rem 0.25rem 0.688rem rgba(0, 0, 0, 0.04)',
      border: '0.063rem solid',
      p: '0 1.5rem',
      borderColor: NAMED_COLORS.LIGHT_GREY,
      _dark: {
        bgColor: NAMED_COLORS.LIGHT_BLACK,
        color: NAMED_COLORS.WHITE,
        borderColor: NAMED_COLORS.DARK_GREY,
        '.chakra-button__icon': {
          fill: NAMED_COLORS.WHITE,
        },
      },
      '.chakra-button__icon': {
        fill: NAMED_COLORS.BLACK,
      },
      _hover: {
        '.chakra-button__icon': {
          fill: NAMED_COLORS.BLACK,
        },
        bgColor: NAMED_COLORS.WHITE,
        borderColor: NAMED_COLORS.DEEP_BLUE,
        color: NAMED_COLORS.DEEP_BLUE,
        _dark: {
          borderColor: NAMED_COLORS.WHITE,
          '.chakra-button__icon': {
            fill: NAMED_COLORS.BLACK,
          },
        },
        _disabled: DISABLED_STYLES,
      },
      _disabled: {
        '.chakra-button__icon': {
          fill: NAMED_COLORS.PALE_GREY,
        },
        ...DISABLED_STYLES,
        _dark: {
          ...DISABLED_STYLES._dark,
          '.chakra-button__icon': {
            fill: NAMED_COLORS.DARKER_GREY_2,
          },
        },
      },
    },
    'ironfish-main': {
      bgColor: NAMED_COLORS.WHITE,
      color: NAMED_COLORS.DEEP_BLUE,
      boxShadow: `0.25rem 0.25rem 0rem ${NAMED_COLORS.BLACK}`,
      border: '0.063rem solid',
      p: '0 1.5rem',
      borderColor: NAMED_COLORS.BLACK,
      transition: 'box-shadow ease 0.1s, backgroundColor ease 0.1s,',
      '.chakra-button__icon': {
        fill: NAMED_COLORS.BLACK,
        _dark: { fill: NAMED_COLORS.WHITE },
      },
      _dark: {
        bgColor: NAMED_COLORS.DARKER_GREY,
        color: NAMED_COLORS.WHITE,
        borderColor: NAMED_COLORS.DARK_GREY,
        boxShadow: `0.25rem 0.25rem 0rem ${NAMED_COLORS.DARK_GREY}`,
      },
      _hover: {
        '.chakra-button__icon': {
          fill: NAMED_COLORS.BLACK,
          _dark: { fill: NAMED_COLORS.WHITE },
        },
        bgColor: NAMED_COLORS.LIGHTER_GREY,
        borderColor: NAMED_COLORS.DARKER_GREY,
        boxShadow: `0.25rem 0.25rem 0rem ${NAMED_COLORS.DARKER_GREY}`,
        color: NAMED_COLORS.DEEP_BLUE,
        _disabled: {
          ...DISABLED_STYLES,
          boxShadow: `0.25rem 0.25rem 0rem ${NAMED_COLORS.GREY}`,
          _dark: {
            ...DISABLED_STYLES._dark,
            boxShadow: `0.25rem 0.25rem 0rem ${NAMED_COLORS.GREY}`,
          },
        },
        _dark: {
          bgColor: NAMED_COLORS.DARK_GREY,
          boxShadow: `0.25rem 0.25rem 0rem ${NAMED_COLORS.GREY}`,
          borderColor: NAMED_COLORS.GREY,
        },
      },
      _disabled: {
        '.chakra-button__icon': {
          fill: NAMED_COLORS.PALE_GREY,
          _dark: { fill: NAMED_COLORS.DARKER_GREY_2 },
        },
        ...DISABLED_STYLES,
        boxShadow: `0.25rem 0.25rem 0rem ${NAMED_COLORS.GREY}`,
        _dark: {
          ...DISABLED_STYLES._dark,
          boxShadow: `0.25rem 0.25rem 0rem ${NAMED_COLORS.GREY}`,
        },
      },
    },
    navItem: {
      h: '2.5rem',
      w: '100%',
      fontSize: '0.875rem',
      fontFamily: FONTS.EXTENDED,
      color: NAMED_COLORS.GREY,
      borderRadius: '0.25rem',
      pr: '0.5rem',
      bgColor: NAMED_COLORS.WHITE,
      justifyContent: 'flex-start',
      _dark: {
        color: NAMED_COLORS.PALE_GREY,
        bgColor: NAMED_COLORS.LIGHT_BLACK,
        '.chakra-button__icon': {
          color: NAMED_COLORS.WHITE,
        },
      },
      _focus: {
        boxShadow: 'none',
      },
      _hover: {
        color: NAMED_COLORS.DEEP_BLUE,
        _dark: {
          color: NAMED_COLORS.WHITE,
        },
      },
      _active: {
        bgColor: NAMED_COLORS.LIGHTER_GREY,
        color: NAMED_COLORS.DEEP_BLUE,
        '.chakra-button__icon': {
          ':last-child': {
            display: 'block',
            marginLeft: 'auto',
          },
        },
        _dark: {
          bgColor: NAMED_COLORS.DARK_GREY,
          color: NAMED_COLORS.WHITE,
        },
      },
      '.chakra-button__icon': {
        color: NAMED_COLORS.DEEP_BLUE,
        ':first-child': {
          marginRight: '1.25rem',
        },
        ':last-child': {
          display: 'none',
        },
      },
    },
  },
}

export default Button
