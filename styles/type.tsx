import { mapObjIndexed } from 'ramda'
import { chakra } from '@chakra-ui/react'

import { TYPEFACES, CASE, Typeface } from 'styles/constants'

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
