/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { mapObjIndexed } from 'ramda'

import { chakra } from '@chakra-ui/react'
import { FONTS } from 'theme/constants'

export enum CASE {
  MIXED,
  UPPERCASE,
}

const makeFont = (
  family: FONTS,
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

const TYPE_H5 = makeFont(FONTS.FAVORIT, '0.875rem', '1.4rem', '400', CASE.MIXED)

export const TYPEFACES = {
  TITLE: makeFont(FONTS.EXTENDED, '3.25rem', '5.2rem', '400', CASE.MIXED),
  H1: makeFont(FONTS.EXTENDED, '2.25rem', '3.6rem', '400', CASE.MIXED),
  H2: makeFont(FONTS.EXTENDED, '1.75rem', '2.8rem', '400', CASE.MIXED),
  H3: makeFont(FONTS.EXTENDED, '1.5rem', '2.4rem', '400', CASE.MIXED),
  H4: makeFont(FONTS.FAVORIT, '1rem', '1.6rem', '400', CASE.MIXED),
  H5: TYPE_H5,
  H6: makeFont(FONTS.FAVORIT, '0.75rem', '1.2rem', '400', CASE.MIXED),
  BODY: TYPE_H5,
}

export type Typeface = {
  family: FONTS
  size: string
  lineHeight: string
  weight: string
  textTransform: CASE
}
export const favorit = 'favorit-regular'
export const extended = 'favoritextended-regular'

export const typefaceToCSS = (raw: Typeface) => ({
  margin: 0,
  fontFamily: raw.family,
  fontSize: raw.size,
  fontWeight: raw.weight,
  lineHeight: raw.lineHeight,
  textTransform: raw.textTransform === CASE.MIXED ? 'none' : 'uppercase',
})

export const FACES = mapObjIndexed(value => typefaceToCSS(value), TYPEFACES)

export const BODY = chakra('span', { baseStyle: typefaceToCSS(TYPEFACES.BODY) })
export const TITLE = chakra('h1', { baseStyle: typefaceToCSS(TYPEFACES.TITLE) })
export const H1 = chakra('h1', { baseStyle: typefaceToCSS(TYPEFACES.H1) })
export const H2 = chakra('h2', { baseStyle: typefaceToCSS(TYPEFACES.H2) })
export const H3 = chakra('h3', { baseStyle: typefaceToCSS(TYPEFACES.H3) })
export const H4 = chakra('h4', { baseStyle: typefaceToCSS(TYPEFACES.H4) })
export const H5 = chakra('h5', { baseStyle: typefaceToCSS(TYPEFACES.H5) })
export const H6 = chakra('h6', { baseStyle: typefaceToCSS(TYPEFACES.H6) })

export const asFont = (x: string) => {
  switch (x) {
    case 'TITLE':
      return TITLE
    case 'H1':
      return H1
    case 'H2':
      return H2
    case 'H3':
      return H3
    case 'H4':
      return H4
    case 'H5':
      return H5
    case 'H6':
      return H6
    default:
      return BODY
  }
}

const defaultExport = { BODY, TITLE, H1, H2, H3, H4, H5, H6 }
export default defaultExport
