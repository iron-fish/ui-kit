export enum FONT {
  EXTENDED = 'extended-regular',
  FAVORIT = 'favorit-regular',
}

export enum CASE {
  SENTENCE,
  MIXED,
}

export const font = (
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

export const TYPE = {
  BODY: font(FONT.FAVORIT, '0.875rem', '1.4rem', '400', CASE.MIXED),
  H6: font(FONT.FAVORIT, '0.75rem', '1.2rem', '400', CASE.MIXED),
  H5: {},
  H4: font(FONT.FAVORIT, '1rem', '1.6rem', '400', CASE.MIXED),
  H3: font(FONT.EXTENDED, '1.5rem', '2.4rem', '400', CASE.SENTENCE),
  H2: font(FONT.EXTENDED, '1.75rem', '2.8rem', '400', CASE.SENTENCE),
  H1: font(FONT.EXTENDED, '2.25rem', '3.6rem', '400', CASE.SENTENCE),
  TITLE: font(FONT.EXTENDED, '3.25rem', '5.2rem', '400', CASE.SENTENCE),
}
TYPE.H5 = TYPE.BODY

const theme = (bg: string, a: string, b: string, c: string) => ({
  BASE: bg,
  A: a,
  B: b,
  C: c,
})

export const COLORS = {
  THEME: {
    LIGHT: theme('#0D0C22', '#7f7f7f', '#DEDFE2', '#F3F3F4'),
    DARK: theme('#0D0C22', '#252525', '#3B3B3B', '#ADAEB4'),
  },
  GLOBAL: {
    WHITE: '#FFF',
    BLACK: '#000',
  },
  BRAND: {
    LIGHT_BLUE: '#2C72FF',
    BLUE: '#1D0070',
    LIGHT_YELLOW: '#FFCD85',
    YELLOW: '#FFEC1F',
    LIGHT_RED: '#FFC2E8',
    RED: '#F15929',
  },
}
