import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'
// import { renderCustomComponent } from '@open-sorcerers/breakpoints'
// import { makePainter, asRem, HORIZONTAL_BREAKPOINTS } from 'bodypaint'

export const COLORS = {
  BLACK: 'black',
  WHITE: 'white',
}
interface Theme {
  colors: {
    fore: string
    back: string
  }
}

export const theme = {
  colors: {
    fore: COLORS.WHITE,
    back: COLORS.BLACK,
  },
}
export const getTheme = (x: Record<string, unknown>) => x.theme

export const t = (x: string | string[]) =>
  `transition: ${
    Array.isArray(x) ? x.map(xx => `${xx} 0.3s ease-out`) : `${x} 0.3s ease-out`
  };`

const BASE_FONT_SIZE = 16

export const globalStyler = (givenTheme: Theme) => css`
  html,
  body {
    font-size: ${BASE_FONT_SIZE}px;
    scroll-behavior: smooth;
    font-family: Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
