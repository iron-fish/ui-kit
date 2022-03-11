import { BASE_FONT_SIZE } from 'src/styles/constants'

export const asPx = (x: string) =>
  `${parseFloat(x.slice(0, -3)) * BASE_FONT_SIZE}px`
