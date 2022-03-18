import { ChakraTheme, DeepPartial } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { NAMED_COLORS } from './constants'

const typeface: object = {
  fontWeight: '400',
  lineHeight: '160%',
  letterSpacing: '0',
}

const IronFishTheme: DeepPartial<ChakraTheme> = {
  components: {
    Table: {
      variants: {
        blocks: props => ({
          table: {
            borderCollapse: 'separate',
            borderSpacing: '0 1rem',
            borderColor: mode(
              NAMED_COLORS.LIGHT_GREY,
              NAMED_COLORS.DARK_GREY
            )(props),
          },
          tbody: {
            tr: {
              background: mode(
                NAMED_COLORS.WHITE,
                NAMED_COLORS.DARKER_GREY
              )(props),
              boxShadow: '0 0.25rem 0.668rem rgba(0, 0, 0, 0.04)',
            },
          },
          th: {
            color: mode(NAMED_COLORS.GREY, NAMED_COLORS.PALE_GREY)(props),
            fontStyle: 'normal',
            fontSize: '0.75rem',
            lineHeight: '1.188rem',
            fontWeight: '400',
            fontFamily: 'ABC Favorit Trial',
            letterSpacing: '0.1em',
            paddingTop: '0.5rem',
            paddingBottom: '0',
          },
          td: {
            borderTop: '0.063rem solid',
            borderBottom: '0.063rem solid',
            borderColor: 'inherit',
            fontSize: '1rem',
            fontStyle: 'normal',
            lineHeight: '1.625rem',
            fontWeight: '400',
            fontFamily: 'ABC Favorit Trial',
            color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
            ':first-of-type': {
              borderLeft: '0.063rem solid',
              borderColor: 'inherit',
              borderTopLeftRadius: '0.25rem',
              borderBottomLeftRadius: '0.25rem',
            },
            ':last-of-type': {
              borderRight: '0.063rem solid',
              borderColor: 'inherit',
              borderTopRightRadius: '0.25rem',
              borderBottomRightRadius: '0.25rem',
            },
          },
        }),
      },
    },
  },
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
