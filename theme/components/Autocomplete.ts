import type { ComponentStyleConfig } from '@chakra-ui/theme'

import { mode } from '@chakra-ui/theme-tools'
import { FONTS, NAMED_COLORS } from '../constants'

const Autocomplete: ComponentStyleConfig = {
  parts: [
    'container',
    'label',
    'value',
    'popover',
    'optionWrapper',
    'option',
    'emptyOption',
    'inputWrapper',
  ],
  baseStyle: props => ({
    container: {
      h: '4.313rem',
      px: '1.5rem',
      py: '0.75rem',
      borderRadius: '0.25rem',
      bg: mode(NAMED_COLORS.WHITE, NAMED_COLORS.DARKER_GREY)(props),
      border: '0.063rem solid',
      borderColor: mode(NAMED_COLORS.LIGHT_GREY, NAMED_COLORS.DARK_GREY)(props),
      transition: 'all 300ms ease-in, background-color 0ms',
      boxShadow: '0 0.25rem 0.688rem rgba(0, 0, 0, 0.04)',
      _hover: {
        borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      },
      '&.autocomplete': {
        '&--focused': {
          borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        },
      },
    },
    label: {
      fontSize: '0.75rem',
      fontWeight: '400',
      fontFamily: FONTS.FAVORIT,
      color: mode(NAMED_COLORS.GREY, NAMED_COLORS.PALE_GREY)(props),
    },
    value: {
      '.select-field__value-label': {
        fontSize: '1rem',
        fontWeight: '400',
        fontFamily: FONTS.FAVORIT,
        lineHeight: '1.5rem',
        color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      },
      '.select-field__value-text': {
        fontSize: '0.75rem',
        fontWeight: '400',
        lineHeight: '1.25rem',
        fontFamily: FONTS.FAVORIT,
        color: mode(NAMED_COLORS.GREY, NAMED_COLORS.PALE_GREY)(props),
      },
    },
    popover: {
      borderRadius: '0.25rem',
      border: '0.063rem solid',
      borderTopRadius: 0,
      bg: mode(NAMED_COLORS.WHITE, NAMED_COLORS.DARKER_GREY)(props),
      borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      boxShadow: '0 0.25rem 0.688rem rgba(0, 0, 0, 0.04) !important',
      '.chakra-popover__body': {
        p: '0',
      },
    },
    optionWrapper: {
      borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      transition: 'all 300ms ease-in',
      ':last-of-type': {
        borderBottomRadius: '0.25rem',
      },
      '&.autocomplete__option-wrapper': {
        '&--selected': {
          bg: mode(NAMED_COLORS.LIGHTER_GREY, NAMED_COLORS.DARK_GREY)(props),
          _hover: {
            bg: mode(NAMED_COLORS.LIGHTER_GREY, NAMED_COLORS.DARK_GREY)(props),
          },
        },
      },
      _hover: {
        bg: mode(NAMED_COLORS.LIGHTER_GREY, NAMED_COLORS.DARK_GREY)(props),
      },
    },
    option: {
      h: '4.063rem',
      px: '1.5rem',
      py: '0.75rem',
      cursor: 'pointer',
      '.autocomplete__option-label': {
        fontSize: '1rem',
        fontWeight: '400',
        fontFamily: FONTS.FAVORIT,
        color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      },
      '.autocomplete__option-text': {
        fontSize: '0.75rem',
        fontWeight: '400',
        fontFamily: FONTS.FAVORIT,
        color: mode(NAMED_COLORS.GREY, NAMED_COLORS.PALE_GREY)(props),
      },
    },
    inputWrapper: {
      overflow: 'hidden',
      fontSize: '1rem',
      fontWeight: '400',
      fontFamily: FONTS.FAVORIT,
      color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
    },
    emptyOption: {
      px: '1.5rem',
      py: '0.75rem',
      cursor: 'pointer',
      fontSize: '0.75rem',
      fontWeight: '400',
      fontFamily: FONTS.FAVORIT,
      color: mode(NAMED_COLORS.GREY, NAMED_COLORS.PALE_GREY)(props),
    },
  }),
  defaultProps: {
    h: '4.313rem',
    px: '1.5rem',
    py: '0.75rem',
    borderRadius: '0.25rem',
    border: '0.063rem solid',
  },
}

export default Autocomplete
