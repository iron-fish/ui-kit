import type { FC } from 'react'

import { ChakraProvider, ConfigColorMode, extendTheme } from '@chakra-ui/react'
import IronFishTheme from 'theme/theme'
import { css, Global } from '@emotion/react'

type IronFishProps = {
  initialColorMode?: ConfigColorMode
}

const IronFishUIProvider: FC<IronFishProps> = ({
  initialColorMode = 'light',
  children,
}) => {
  const theme = extendTheme({
    ...IronFishTheme,
    initialColorMode: initialColorMode,
  })

  return (
    <>
      <ChakraProvider theme={theme}>
        <Global
          styles={css`
            @font-face {
              font-family: 'ABC Favorit Trial';
              src: local('ABC Favorit Extended Trial'),
                url('./font/regular/favorit-regular-webfont.woff')
                  format('woff');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC,
                U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122,
                U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
              font-display: swap;
            }
            @font-face {
              font-family: 'ABC Favorit Extended Trial';
              src: url('./font/extendedregular/favorit-regular-webfont.woff2')
                  format('woff2'),
                url('./font/extendedregular/favorit-regular-webfont.woff')
                  format('woff');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC,
                U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122,
                U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
              font-display: swap;
            }
          `}
        />
        {children}
      </ChakraProvider>
    </>
  )
}

export default IronFishUIProvider
