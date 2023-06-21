/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { ChakraTheme, DeepPartial } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS, FONTS } from './constants'
import ThemedComponents from './components'

const typeface: object = {
  fontWeight: '400',
  lineHeight: '160%',
  letterSpacing: '0',
}

export const IronFishTheme: DeepPartial<ChakraTheme> = {
  components: ThemedComponents,
  styles: {
    global: props => ({
      body: {
        backgroundColor: mode(
          NAMED_COLORS.WHITE,
          NAMED_COLORS.LIGHT_BLACK
        )(props),
      },
      h1: {
        ...typeface,
        fontSize: '2.25rem',
        fontFamily: FONTS.EXTENDED,
      },
      h2: {
        ...typeface,
        fontSize: '1.75rem',
        fontFamily: FONTS.EXTENDED,
      },
      h3: {
        ...typeface,
        fontSize: '1.5rem',
        fontFamily: FONTS.EXTENDED,
      },
      h4: {
        ...typeface,
        fontSize: '1rem',
        fontFamily: FONTS.FAVORIT,
      },
      h5: {
        ...typeface,
        fontSize: '0.875rem',
        fontFamily: FONTS.FAVORIT,
      },
      h6: {
        ...typeface,
        fontSize: '0.75rem',
        fontFamily: FONTS.FAVORIT,
      },
    }),
  },
  layerStyles: {
    card: {
      bg: NAMED_COLORS.WHITE,
      boxShadow: `0.25rem 0.25rem 0 -0.063rem ${NAMED_COLORS.WHITE}, 0.25rem 0.25rem ${NAMED_COLORS.LIGHT_GREY}`,
      border: '0.063rem solid',
      borderColor: NAMED_COLORS.LIGHT_GREY,
      borderRadius: '0.125rem',
      m: '0.2rem',
      _dark: {
        bg: NAMED_COLORS.DARKER_GREY,
        borderColor: NAMED_COLORS.DARK_GREY,
        boxShadow: `0.25rem 0.25rem 0 -0.063rem ${NAMED_COLORS.DARKER_GREY}, 0.25rem 0.25rem ${NAMED_COLORS.DARK_GREY}`,
      },
    },
  },
  breakpoints: {
    sm: '30rem', //480px
    sm1: '36rem', //576px
    md0: '46.875rem', //750px
    md: '48rem', //768px
    md1: '56.25rem', //900px
    lg: '64rem', //1024px
    lg1: '72rem', //1152px
    xl: '75rem', //1200px
    '2xl': '90rem', //1440px
    '3xl': '112.5rem', //1800px
  },
}

export default IronFishTheme
