import { ChakraTheme, DeepPartial } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS } from './constants'
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
  layerStyles: {
    card: {
      bg: NAMED_COLORS.WHITE,
      boxShadow: `0.25rem 0.25rem 0 -0.063rem ${NAMED_COLORS.WHITE}, 0.25rem 0.25rem ${NAMED_COLORS.LIGHT_GREY}`,
      border: '0.063rem solid',
      borderColor: NAMED_COLORS.LIGHT_GREY,
      borderRadius: '0.125rem',
      m: '0.2rem',
      '.chakra-ui-dark &': {
        bg: NAMED_COLORS.DARKER_GREY,
        borderColor: NAMED_COLORS.DARK_GREY,
        boxShadow: `0.25rem 0.25rem 0 -0.063rem ${NAMED_COLORS.DARKER_GREY}, 0.25rem 0.25rem ${NAMED_COLORS.DARK_GREY}`,
      },
    },
  },
}

export default IronFishTheme
