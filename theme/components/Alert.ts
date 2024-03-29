/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import type { ComponentStyleConfig } from '@chakra-ui/theme'

import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS } from 'theme/constants'
import { FACES } from 'styles/type'

const Alert: ComponentStyleConfig = {
  baseStyle: props => ({
    container: {
      backgroundColor: `${mode(
        NAMED_COLORS.BLACK,
        NAMED_COLORS.WHITE
      )(props)} !important`,
      borderRadius: '0.25rem',
      boxShadow: '0 0.3125rem 0.875rem rgba(0, 0, 0, 0.07)',
      maxW: 'max-content',
    },
    title: {
      ...FACES.H4,
      color: mode(NAMED_COLORS.WHITE, NAMED_COLORS.BLACK)(props),
    },
    description: {
      ...FACES.H5,
      color: mode(NAMED_COLORS.WHITE, NAMED_COLORS.BLACK)(props),
    },
    icon: {
      mr: '1rem',
      fontSize: '1.5rem',
      color: mode(NAMED_COLORS.WHITE, NAMED_COLORS.BLACK)(props),
    },
    actions: {
      ml: '1rem',
      color: mode(NAMED_COLORS.WHITE, NAMED_COLORS.BLACK)(props),
    },
  }),
  variants: {
    simple: {
      container: {
        p: '0.75rem 1.5rem',
      },
    },
    descriptive: {
      container: {
        p: '1.5rem',
      },
    },
  },
  defaultProps: {
    variant: 'simple',
  },
}

export default Alert
