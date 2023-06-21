/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'
import { mode } from '@chakra-ui/theme-tools'
import { FONTS, NAMED_COLORS } from 'theme/constants'

const baseStyle = defineStyle(props => ({
  'border-radius': '0.25rem !important',
  border: '0.063rem solid',
  borderColor: mode(NAMED_COLORS.LIGHT_GREY, NAMED_COLORS.DARK_GREY)(props),
  boxShadow: '0 0.25rem 0.688rem rgba(0, 0, 0, 0.04)',
  transition: 'border-color 300ms ease-in',
  fontSize: '1rem',
  p: '1.5rem',
  paddingInline: '1.5rem !important',
  fontWeight: '400',
  fontFamily: FONTS.FAVORIT,
  color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
  ':hover': {
    borderColor: `${mode(
      NAMED_COLORS.DEEP_BLUE,
      NAMED_COLORS.WHITE
    )(props)} !important`,
  },
  ':focus-within': {
    borderColor: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
  },
  ':focus-visible': {
    boxShadow: 'unset !important',
    borderColor: 'unset !important',
  },
  _placeholder: {
    color: mode(NAMED_COLORS.GREY, NAMED_COLORS.PALE_GREY)(props),
  },
}))

const Textarea = defineStyleConfig({
  baseStyle,
})

export default Textarea
