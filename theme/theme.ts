import { ChakraTheme, DeepPartial } from "@chakra-ui/react"

const IronFishTheme: DeepPartial<ChakraTheme> = {
  styles: {
    global: {
      title: {
        fontSize: '52px',
        fontWeight: '400',
        lineHeight: '160%',
        letterSpacing: '0',
        fontFamily: 'extended-regular'
      },
      h1: {
        fontSize: '36px',
        fontWeight: '400',
        lineHeight: '160%',
        letterSpacing: '0',
        fontFamily: 'extended-regular'
      },
      h2: {
        fontSize: '28px',
        fontWeight: '400',
        lineHeight: '160%',
        letterSpacing: '0',
        fontFamily: 'extended-regular'
      },
      h3: {
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '160%',
        letterSpacing: '0',
        fontFamily: 'extended-regular'
      },
      h4: {
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '160%',
        letterSpacing: '0',
        fontFamily: 'favorit-regular'
      },
      h5: {
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '160%',
        letterSpacing: '0',
        fontFamily: 'favorit-regular'
      },
      h6: {
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '160%',
        letterSpacing: '0',
        fontFamily: 'favorit-regular'
      }
    }
  }
}

export default IronFishTheme
