import {
  ReactNode,
  useCallback,
  useEffect,
  createContext,
  useContext,
  useState,
} from 'react'
import { Global, ThemeProvider, css } from '@emotion/react'
import { NAMED_COLORS, BASE_FONT_SIZE } from 'styles/constants'

export interface Theme {
  colors: {
    fore: typeof NAMED_COLORS
    back: typeof NAMED_COLORS
  }
}

export const globalTheme = {
  colors: {
    fore: NAMED_COLORS.WHITE,
    back: NAMED_COLORS.BLACK,
  },
}
export const getTheme = (x: { theme: Theme }) => x.theme

const typeface = (name: string, path: string, family: string) => css`
  @font-face {
    font-family: '${name}';
    src: url('/font/${path}/${family}.eot');
    src: url('/font/${path}/${family}.eot?#iefix') format('embedded-opentype'),
      url('/font/${path}/${family}.woff2') format('woff2'),
      url('/font/${path}/${family}.woff') format('woff'),
      url('/font/${path}/${family}.ttf') format('truetype'),
      url('/font/${path}/${family}.svg#_.book') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`
const FONTS = {
  EXTENDED: typeface(
    'extended-regular',
    'extendedregular',
    'favoritextended-regular-webfont'
  ),
  MONO: typeface('mono-regular', 'monoregular', 'favoritmono-regular-webfont'),
  BODY: typeface('favorit-regular', 'regular', 'favorit-regular-webfont'),
}

export const transition = (x: string | string[]) =>
  `transition: ${
    Array.isArray(x) ? x.map(xx => `${xx} 0.3s ease-out`) : `${x} 0.3s ease-out`
  };`

export const globalStyler = (givenTheme: Theme) => css`
  ${FONTS.EXTENDED}
  ${FONTS.MONO} 
  ${FONTS.BODY} 
  html,
  body {
    font-size: ${BASE_FONT_SIZE}px;
    scroll-behavior: smooth;
    font-family: favorit-regular, sans-serif;
    background-color: ${givenTheme?.colors?.fore};
    color: ${givenTheme?.colors?.back};
    margin: 0;
    padding: 0;
    text-align: center;
    ${transition(['background', 'color'])}
  }
`
export const Style = ({ theme }: { theme: Theme }) => (
  <Global styles={globalStyler(theme)} />
)

export const KitState = createContext({
  theme: globalTheme,
})

type KitState = {
  theme: Theme
}

export function KitStateProvider({
  state,
  children,
}: {
  state: KitState
  children: ReactNode
}) {
  return <KitState.Provider value={state}>{children}</KitState.Provider>
}

export const useKitState = () => {
  const context = useContext(KitState)
  if (!context) {
    throw new Error('useKitState must be used within a KitStateProvider')
  }
  return context
}
export const Themed = ({ children }: { children: ReactNode }) => {
  const data = useKitState()
  return (
    <>
      <Style theme={data.theme} />
      <ThemeProvider theme={data.theme}>{children}</ThemeProvider>
    </>
  )
}
