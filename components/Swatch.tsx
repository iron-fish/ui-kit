/** @jsxImportSource @emotion/react */
import { curry } from 'ramda'
import { css } from '@emotion/react'
import { flexRow, flexColumn, Code } from 'styles/shared'
import { colord, extend } from 'colord'
import contrast from 'colord/plugins/a11y'
extend([contrast])
// import mix from 'mix-color'

interface SwatchProps {
  name: string
  hex: string
  // description: string
}

// const invert = (x: string) => colord(x).invert()
// const toHex = (x: string) => toUpper(colord(x).toHex())
const copyToClipboard = (s: string) => {
  if (navigator?.clipboard?.writeText) {
    navigator.clipboard.writeText(s)
  }
}

const blackOrWhite = (x: string) => {
  /*
  NAIVE
  const color = x.startsWith('#') ? x.slice(1) : x
  const hex = parseInt(color, 16)
  return hex > parseInt('888888', 16) ? '#000000' : '#FFFFFF'
   */
  const black = '#000000'
  const white = '#ffffff'
  const b = colord(x).contrast(black)
  const w = colord(x).contrast(white)
  if (b > w) {
    return black
  } else {
    return white
  }
}

const transparentize = curry((n: number, x: string) =>
  colord(x).alpha(n).toRgbString()
)
export const Swatch = ({ name, hex }: SwatchProps) => {
  const q1 = transparentize(0.25, hex)
  const q2 = transparentize(0.5, hex)
  const q3 = transparentize(0.75, hex)
  return (
    <div
      onClick={() => copyToClipboard(hex)}
      css={css`
        ${flexRow}
        max-height: 5rem;
        overflow: hidden;
        justify-content: space-between;
        align-items: center;
        color: ${blackOrWhite(hex)};
      `}
    >
      <div
        css={css`
          ${flexRow}
          justify-content: space-between;
          align-items: center;
          min-width: 49%;
          min-height: 5rem;
          align-self: flex-start;
          padding: 0 1rem;
          background-color: ${hex};
          color: ${blackOrWhite(hex)};
        `}
      >
        <strong>{name}</strong>
        <Code>{hex.toUpperCase()}</Code>
      </div>
      <div
        css={css`
          ${flexColumn}
          justify-content: center;
          align-items: center;
          min-height: 5rem;
          width: 17%;
          background: ${q3};
          color: ${blackOrWhite(hex)};
        `}
      >
        75%
      </div>
      <div
        css={css`
          ${flexColumn}
          justify-content: center;
          align-items: center;
          min-height: 5rem;
          width: 17%;
          background: ${q2};
          color: ${blackOrWhite(hex)};
        `}
      >
        50%
      </div>
      <div
        css={css`
          ${flexColumn}
          justify-content: center;
          align-items: center;
          min-height: 5rem;
          width: 17%;
          background: ${q1};
          color: ${blackOrWhite(hex)};
        `}
      >
        25%
      </div>
    </div>
  )
}
export default Swatch
