import { ChakraTheme, DeepPartial } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const IronFishTheme: DeepPartial<ChakraTheme> = {
  components: {
    Table: {
      variants: {
        blocks: props => ({
          table: {
            borderCollapse: 'separate',
            borderSpacing: '0px 16px',
            borderColor: mode('#DEDFE2', '#3B3B3B')(props),
          },
          tbody: {
            tr: {
              background: mode('#fff', '#252525')(props),
              boxShadow: '0px 4px 11px rgba(0, 0, 0, 0.04)',
            },
          },
          th: {
            color: mode('#7f7f7f', '#ADAEB4')(props),
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
            color: mode('#0D0C22', '#fff')(props),
            ':first-child': {
              borderLeft: '1px solid',
              borderColor: 'inherit',
              borderTopLeftRadius: '4px',
              borderBottomLeftRadius: '4px',
            },
            ':last-child': {
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
        backgroundColor: mode('#fff', '#101010')(props),
      },
      h1: {
        fontSize: '36px',
        fontWeight: '400',
        lineHeight: '160%',
        letterSpacing: '0',
        fontFamily: 'ABC Favorit Extended Trial',
      },
      h2: {
        fontSize: '28px',
        fontWeight: '400',
        lineHeight: '160%',
        letterSpacing: '0',
        fontFamily: 'ABC Favorit Extended Trial',
      },
      h3: {
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '160%',
        letterSpacing: '0',
        fontFamily: 'ABC Favorit Extended Trial',
      },
      h4: {
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '160%',
        letterSpacing: '0',
        fontFamily: 'ABC Favorit Trial',
      },
      h5: {
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '160%',
        letterSpacing: '0',
        fontFamily: 'ABC Favorit Trial',
      },
      h6: {
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '160%',
        letterSpacing: '0',
        fontFamily: 'ABC Favorit Trial',
      },
    }),
  },
}

export default IronFishTheme
