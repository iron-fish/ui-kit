export enum FONT {
  EXTENDED = 'extended-regular',
  FAVORIT = 'favorit-regular',
  MONO = 'mono-regular',
}

export enum CASE {
  MIXED,
  UPPERCASE,
}

export type Typeface = {
  family: FONT
  size: string
  lineHeight: string
  weight: string
  textTransform: CASE
}

const makeFont = (
  family: FONT,
  size: string,
  lineHeight: string,
  weight: string,
  textTransform: CASE
): Typeface => ({
  family,
  size,
  weight,
  lineHeight,
  textTransform,
})

const BODY = makeFont(FONT.FAVORIT, '0.875rem', '1.4rem', '400', CASE.MIXED)

export const TYPEFACES = {
  TITLE: makeFont(FONT.EXTENDED, '3.25rem', '5.2rem', '400', CASE.MIXED),
  H1: makeFont(FONT.EXTENDED, '2.25rem', '3.6rem', '400', CASE.MIXED),
  H2: makeFont(FONT.EXTENDED, '1.75rem', '2.8rem', '400', CASE.MIXED),
  H3: makeFont(FONT.EXTENDED, '1.5rem', '2.4rem', '400', CASE.MIXED),
  H4: makeFont(FONT.FAVORIT, '1rem', '1.6rem', '400', CASE.MIXED),
  H5: BODY,
  H6: makeFont(FONT.FAVORIT, '0.75rem', '1.2rem', '400', CASE.MIXED),
  BODY,
}

const makeTheme = (
  base: string,
  bg: string,
  a: string,
  b: string,
  c: string
) => ({
  BASE: base,
  PRIMARY: bg,
  SECONDARY: a,
  TERTIARY: b,
  QUATERNARY: c,
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
      NAMED_COLORS.WHITE,
      NAMED_COLORS.DEEP_BLUE,
      NAMED_COLORS.GREY,
      NAMED_COLORS.LIGHT_GREY,
      NAMED_COLORS.LIGHTER_GREY
    ),
    DARK: makeTheme(
      NAMED_COLORS.BLACK,
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

export const BASE_FONT_SIZE = 16
