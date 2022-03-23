import { ChakraTheme, DeepPartial } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS } from './constants'
import Components from './components'

const typeface: object = {
  fontWeight: '400',
  lineHeight: '160%',
  letterSpacing: '0',
}

const IronFishTheme: DeepPartial<ChakraTheme> = {
  components: Components,
  styles: {
    global: props => ({
      body: {
        backgroundColor: mode(NAMED_COLORS.WHITE, NAMED_COLORS.BLACK)(props),
      },
      h1: {
        ...typeface,
        fontSize: '2.25rem',
        fontFamily: 'ABC Favorit Extended Trial',
      },
      h2: {
        ...typeface,
        fontSize: '1.75rem',
        fontFamily: 'ABC Favorit Extended Trial',
      },
      h3: {
        ...typeface,
        fontSize: '1.5rem',
        fontFamily: 'ABC Favorit Extended Trial',
      },
      h4: {
        ...typeface,
        fontSize: '1rem',
        fontFamily: 'ABC Favorit Trial',
      },
      h5: {
        ...typeface,
        fontSize: '0.875rem',
        fontFamily: 'ABC Favorit Trial',
      },
      h6: {
        ...typeface,
        fontSize: '0.75rem',
        fontFamily: 'ABC Favorit Trial',
      },
    }),
  },
}

export default IronFishTheme
