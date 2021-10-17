import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'

export enum FONT {
  EXTENDED = 'extended-regular',
  FAVORIT = 'favorit-regular',
  MONO = 'mono-regular',
}

export enum CASE {
  SENTENCE,
  MIXED,
}

export const makeFont = (
  family: FONT,
  size: string,
  lineHeight: string,
  weight: string,
  textTransform: CASE
) => ({
  family,
  size,
  weight,
  lineHeight,
  textTransform,
})

export const TYPEFACES = {
  BODY: makeFont(FONT.FAVORIT, '0.875rem', '1.4rem', '400', CASE.MIXED),
  H6: makeFont(FONT.FAVORIT, '0.75rem', '1.2rem', '400', CASE.MIXED),
  H5: {},
  H4: makeFont(FONT.FAVORIT, '1rem', '1.6rem', '400', CASE.MIXED),
  H3: makeFont(FONT.EXTENDED, '1.5rem', '2.4rem', '400', CASE.SENTENCE),
  H2: makeFont(FONT.EXTENDED, '1.75rem', '2.8rem', '400', CASE.SENTENCE),
  H1: makeFont(FONT.EXTENDED, '2.25rem', '3.6rem', '400', CASE.SENTENCE),
  TITLE: makeFont(FONT.EXTENDED, '3.25rem', '5.2rem', '400', CASE.SENTENCE),
}
TYPEFACES.H5 = TYPEFACES.BODY

const makeTheme = (bg: string, a: string, b: string, c: string) => ({
  BASE: bg,
  A: a,
  B: b,
  C: c,
})

export const NAMED_COLORS = {
  // the base color, light or dark
  DEEP_BLUE: '#0d0c22',
  // light a
  GREY: '#7f7f7f',
  // light b
  LIGHT_GREY: '#DEDFE2',
  // light c
  LIGHTER_GREY: '#F3F3F4',
  // dark a
  PALE_GREY: '#ADAEB4',
  // dark b
  DARK_GREY: '#3B3B3B',
  // dark c
  DARKER_GREY: '#252525',
  // global
  BLACK: '#000000',
  WHITE: '#ffffff',
  // brand
  LIGHT_BLUE: '#2C72FF',
  BLUE: '#1D0070',
  LIGHT_YELLOW: '#FFCD85',
  YELLOW: '#FFEC1F',
  LIGHT_RED: '#FFC2E8',
  RED: '#F15929',
}

export const COLORS = {
  THEME: {
    LIGHT: makeTheme(
      NAMED_COLORS.DEEP_BLUE,
      NAMED_COLORS.GREY,
      NAMED_COLORS.LIGHT_GREY,
      NAMED_COLORS.LIGHTER_GREY
    ),
    DARK: makeTheme(
      NAMED_COLORS.DEEP_BLUE,
      NAMED_COLORS.DARKER_GREY,
      NAMED_COLORS.DARK_GREY,
      NAMED_COLORS.PALE_GREY
    ),
  },
  GLOBAL: {
    WHITE: NAMED_COLORS.WHITE,
    BLACK: NAMED_COLORS.BLACK,
  },
  BRAND: {
    LIGHT_BLUE: NAMED_COLORS.LIGHT_BLUE,
    BLUE: NAMED_COLORS.BLUE,
    LIGHT_YELLOW: NAMED_COLORS.LIGHT_YELLOW,
    YELLOW: NAMED_COLORS.YELLOW,
    LIGHT_RED: NAMED_COLORS.LIGHT_RED,
    RED: NAMED_COLORS.RED,
  },
}

export interface Theme {
  colors: {
    fore: typeof NAMED_COLORS
    back: typeof NAMED_COLORS
  }
}

export const THEME = {
  colors: {
    fore: NAMED_COLORS.WHITE,
    back: NAMED_COLORS.BLACK,
  },
}
export const getTheme = (x: { theme: Theme }) => x.theme

export const t = (x: string | string[]) =>
  `transition: ${
    Array.isArray(x) ? x.map(xx => `${xx} 0.3s ease-out`) : `${x} 0.3s ease-out`
  };`

const BASE_FONT_SIZE = 16

export const typeface = (name: string, path: string, family: string) => css`
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
  BODY: typeface('favorit-regular', 'regular', 'favorit-regular-wefont'),
}

export const globalStyler = (givenTheme: Theme) => css`
  ${FONTS.EXTENDED}
  ${FONTS.MONO} 
  ${FONTS.BODY} 
  html,
  body {
    font-size: ${BASE_FONT_SIZE}px;
    scroll-behavior: smooth;
    font-family: favorite-regular, sans-serif;
    background-color: ${givenTheme?.colors?.fore};
    color: ${givenTheme?.colors?.back};
    margin: 0;
    padding: 0;
    text-align: center;
    ${t(['background', 'color'])}
  }
`
export const Style = ({ theme }: { theme: Theme }) => (
  <Global styles={globalStyler(theme)} />
)

/*
import { renderCustomComponent } from '@open-sorcerers/breakpoints'
import { makePainter, asRem, HORIZONTAL_BREAKPOINTS } from 'bodypaint'
// and now: we shout about breakpoints
export const POINTS = asRem(BASE_FONT_SIZE, HORIZONTAL_BREAKPOINTS)
const Breakpoint = styled.div`
  position: fixed;
  height: 100vh;
  width: 1rem;
  z-index: 100;
  top: 0;
  left: ${propOr(0, 'left')};
  border-left: 1px dashed ${fore};
  opacity: ${propOr(0.1, 'opacity')};
  cursor: crosshair;
  &:hover {
    opacity: 1;
  }
  &::before {
    position: absolute;
    background-color: ${mix(1 / 2)};
    color: ${fore};
    content: '${propOr('?', 'label')}';
    transform: rotate(-90deg);
    padding: 0.25rem 3rem 0.25rem 1rem;
    width: 10rem;
    margin-left: calc(-6.75rem + 2px);
    margin-top: 2rem;
  }
`

export const Breakpoints = renderCustomComponent('left', Breakpoint, POINTS)

export const mq = makePainter({
  useMin: true,
  useHeight: false,
  baseFontSize: BASE_FONT_SIZE,
  implicit: true,
  points: HORIZONTAL_BREAKPOINTS,
})
*/
