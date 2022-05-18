import { ChakraTheme, DeepPartial } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS, FONTS } from './constants'
import ThemedComponents from './components'

const typeface: object = {
  fontWeight: '400',
  lineHeight: '160%',
  letterSpacing: '0',
}

const IronFishTheme: DeepPartial<ChakraTheme> = {
  components: ThemedComponents,
  styles: {
    global: props => ({
      body: {
        backgroundColor: mode(NAMED_COLORS.WHITE, NAMED_COLORS.BLACK)(props),
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
}

export default IronFishTheme
