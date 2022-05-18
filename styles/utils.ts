const BASE_FONT_SIZE = 16
export const asPx = (x: string) =>
  `${parseFloat(x.slice(0, -3)) * BASE_FONT_SIZE}px`
