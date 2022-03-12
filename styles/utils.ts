import { BASE_FONT_SIZE } from 'styles/constants'

export const asPx = (x: string) =>
  `${parseFloat(x.slice(0, -3)) * BASE_FONT_SIZE}px`
