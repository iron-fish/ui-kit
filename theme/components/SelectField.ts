import type { ComponentStyleConfig } from '@chakra-ui/theme'
import { mode } from '@chakra-ui/theme-tools'

import { FONTS, NAMED_COLORS } from 'theme/constants'

const SelectField: ComponentStyleConfig = {
  parts: ['container', 'label', 'value', 'popover', 'optionWrapper'],
  baseStyle: props => ({
    container: {
      h: '4.313rem',
      px: '1.5rem',
      py: '0.75rem',
      borderRadius: '0.25rem',
      bg: mode(NAMED_COLORS.WHITE, NAMED_COLORS.DARKER_GREY)(props),
      border: '0.063rem solid',
      borderColor: mode(NAMED_COLORS.LIGHT_GREY, NAMED_COLORS.DARK_GREY)(props),
      boxShadow: '0 0.25rem 0.688rem rgba(0, 0, 0, 0.04)',
      transition: 'all 300ms ease-in, background-color 0ms',
      _hover: {
        borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      },
      _focusWithin: {
        borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
      },
      '&.select-field': {
        '&--focused': {
          borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
        },
      },
      '.select-field__content': {
        div: {
          transition: 'all 300ms ease',
        },
        flexDirection: 'column',
        justifyContent: 'center',
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
      _first: {
        borderTopRadius: '0.25rem',
      },
      ':last-of-type': {
        borderBottomRadius: '0.25rem',
      },
      '&.select-field__option-wrapper': {
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
  }),
  sizes: {
    small: {
      container: {
        h: '2.5rem',
        px: '1rem',
        py: '0.75rem',
        '.select-field__content': {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'start',
        },
      },
      label: {
        mr: '0.4rem',
      },
      optionWrapper: {
        '.option': {
          h: '2.5rem',
          px: '1rem',
          py: '0.75rem',
          '.option-label': {
            fontSize: '0.75rem',
          },
          '.option-text': {
            display: 'none',
          },
        },
      },
      value: {
        '.select-field__value-label': {
          fontSize: '0.75rem',
          lineHeight: '1rem',
        },
        '.select-field__value-text': {
          display: 'none',
        },
      },
    },
    compact: props => ({
      container: {
        h: '2.5rem',
        px: '1rem',
        py: '0.75rem',
        width: 'fit-content',
        '&.select-field': {
          '&--focused': {
            borderRadius: '0.25rem',
          },
        },
        '.select-field__content': {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'start',
          maxW: 'min-content',
          w: 'min-content',
          whiteSpace: 'nowrap',
        },
      },
      label: {
        mr: '0.4rem',
        fontSize: '0.6875rem',
        fontWeight: '400',
        fontFamily: FONTS.FAVORIT,
        lineHeight: '1.1rem',
        color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.PALE_GREY)(props),
      },
      popover: {
        borderTopRadius: '0.25rem',
      },
      optionWrapper: {
        '.option': {
          minW: '16.0625rem',
          h: '2.5rem',
          px: '1rem',
          py: '0.75rem',
          '.option-label': {
            fontSize: '0.75rem',
          },
          '.option-text': {
            display: 'none',
          },
        },
      },
      value: {
        display: 'none',
      },
      leftIcon: { display: 'none' },
    }),
  },
  defaultProps: {
    h: '4.313rem',
    px: '1.5rem',
    py: '0.75rem',
    borderRadius: '0.25rem',
    border: '0.063rem solid',
  },
}

export default SelectField
