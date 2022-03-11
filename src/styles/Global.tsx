import {
  ReactNode,
  useCallback,
  useEffect,
  createContext,
  useContext,
  useState,
} from 'react'
import { map } from 'ramda'
import { Global, ThemeProvider, css } from '@emotion/react'
import { NAMED_COLORS, BASE_FONT_SIZE } from 'src/styles/constants'

export interface Theme {
  colors: {
    fore: string
    back: string
  }
}

export const globalTheme = {
  colors: {
    fore: NAMED_COLORS.WHITE,
    back: NAMED_COLORS.BLACK,
  },
}
export const getTheme = (x: { theme: Theme }) => x.theme
export const FONT_FAMILIES = {
  EXTENDED: 'extended-regular',
  BODY: 'favorit-regular',
  MONO: 'mono-regular',
}
// typescript is fucking dumb
// I shouldn't have to explicitly type `map` 🤬
const vin = map<{ [key: string]: string }, { [key: string]: string }>(
  (font: string) => `font-family: ${font};`
)
export const FONT = vin(FONT_FAMILIES)

const typeface = (name: string, path: string, family: string) => css`
  @font-face {
    font-family: '${name as string}';
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
export const FONTS = {
  EXTENDED: typeface(
    FONT_FAMILIES.EXTENDED,
    'extendedregular',
    'favoritextended-regular-webfont'
  ),
  MONO: typeface(
    FONT_FAMILIES.MONO,
    'monoregular',
    'favoritmono-regular-webfont'
  ),
  BODY: typeface(FONT_FAMILIES.BODY, 'regular', 'favorit-regular-webfont'),
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
