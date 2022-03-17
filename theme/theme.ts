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
              boxShadow: '0px 4px 11px rgba(0, 0, 0, 0.04)',
            },
          },
          th: {
            color: mode(NAMED_COLORS.GREY, NAMED_COLORS.PALE_GREY)(props),
            fontStyle: 'normal',
            fontSize: '12px',
            lineHeight: '19px',
            fontWeight: '400',
            fontFamily: 'ABC Favorit Trial',
            letterSpacing: '0.1em',
            paddingTop: '8px',
            paddingBottom: '0px',
          },
          td: {
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: 'inherit',
            fontSize: '16px',
            fontStyle: 'normal',
            lineHeight: '26px',
            fontWeight: '400',
            fontFamily: 'ABC Favorit Trial',
            color: mode(NAMED_COLORS.DEEP_BLUE, NAMED_COLORS.WHITE)(props),
            ':first-of-type': {
              borderLeft: '1px solid',
              borderColor: 'inherit',
              borderTopLeftRadius: '4px',
              borderBottomLeftRadius: '4px',
            },
            ':last-of-type': {
              borderRight: '1px solid',
              borderColor: 'inherit',
              borderTopRightRadius: '4px',
              borderBottomRightRadius: '4px',
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
        fontSize: '36px',
        fontFamily: 'ABC Favorit Extended Trial',
      },
      h2: {
        ...typeface,
        fontSize: '28px',
        fontFamily: 'ABC Favorit Extended Trial',
      },
      h3: {
        ...typeface,
        fontSize: '24px',
        fontFamily: 'ABC Favorit Extended Trial',
      },
      h4: {
        ...typeface,
        fontSize: '16px',
        fontFamily: 'ABC Favorit Trial',
      },
      h5: {
        ...typeface,
        fontSize: '14px',
        fontFamily: 'ABC Favorit Trial',
      },
      h6: {
        ...typeface,
        fontSize: '12px',
        fontFamily: 'ABC Favorit Trial',
      },
    }),
  },
}

export default IronFishTheme
