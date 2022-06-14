import type { FC } from 'react'

import {
  DeepPartial,
  ChakraTheme,
  ChakraProvider,
  ConfigColorMode,
  extendTheme,
} from '@chakra-ui/react'
import IronFishTheme from 'theme/theme'
import { css, Global } from '@emotion/react'

type IronFishProps = {
  initialColorMode?: ConfigColorMode
  theme?: DeepPartial<ChakraTheme>
}

const IronFishUIProvider: FC<IronFishProps> = ({
  initialColorMode = 'light',
  children,
  theme: rawTheme = {},
}) => {
  const theme = extendTheme({ ...IronFishTheme, ...rawTheme })
  return (
    <>
      <ChakraProvider theme={{ ...theme, initialColorMode: initialColorMode }}>
        <Global
          styles={css`
            @font-face {
              font-family: 'extended-regular';
              src: url('/font/extendedregular/favoritextended-regular-webfont.eot');
              src: url('/font/extendedregular/favoritextended-regular-webfont.eot?#iefix')
                  format('embedded-opentype'),
                url('/font/extendedregular/favoritextended-regular-webfont.woff2')
                  format('woff2'),
                url('/font/extendedregular/favoritextended-regular-webfont.woff')
                  format('woff'),
                url('/font/extendedregular/favoritextended-regular-webfont.ttf')
                  format('truetype'),
                url('/font/extendedregular/favoritextended-regular-webfont.svg#_.book')
                  format('svg');
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: 'mono-regular';
              src: url('/font/monoregular/favoritmono-regular-webfont.eot');
              src: url('/font/monoregular/favoritmono-regular-webfont.eot?#iefix')
                  format('embedded-opentype'),
                url('/font/monoregular/favoritmono-regular-webfont.woff2')
                  format('woff2'),
                url('/font/monoregular/favoritmono-regular-webfont.woff')
                  format('woff'),
                url('/font/monoregular/favoritmono-regular-webfont.ttf')
                  format('truetype'),
                url('/font/monoregular/favoritmono-regular-webfont.svg#_.book')
                  format('svg');
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: 'favorit-regular';
              src: url('/font/regular/favorit-regular-webfont.eot');
              src: url('/font/regular/favorit-regular-webfont.eot?#iefix')
                  format('embedded-opentype'),
                url('/font/regular/favorit-regular-webfont.woff2')
                  format('woff2'),
                url('/font/regular/favorit-regular-webfont.woff') format('woff'),
                url('/font/regular/favorit-regular-webfont.ttf')
                  format('truetype'),
                url('/font/regular/favorit-regular-webfont.svg#_.book')
                  format('svg');
              font-weight: normal;
              font-style: normal;
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
