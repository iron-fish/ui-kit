import { mapObjIndexed } from 'ramda'

import styled from '@emotion/styled'
import { TYPEFACES, CASE, Typeface } from 'src/styles/constants'

export const favorit = 'favorit-regular'
export const extended = 'favoritextended-regular'

export const typefaceToCSS = (raw: Typeface) => `
  margin: 0;
  font-family: ${raw.family};
  font-size: ${raw.size};
  font-weight: ${raw.weight};
  line-height: ${raw.lineHeight};
  text-transform: ${raw.textTransform === CASE.MIXED ? 'none' : 'uppercase'};
`

export const FACES = mapObjIndexed(value => typefaceToCSS(value), TYPEFACES)

export const BODY = styled('span')(typefaceToCSS(TYPEFACES.BODY))
export const TITLE = styled('h1')(typefaceToCSS(TYPEFACES.TITLE))
export const H1 = styled('h1')(typefaceToCSS(TYPEFACES.H1))
export const H2 = styled('h2')(typefaceToCSS(TYPEFACES.H2))
export const H3 = styled('h3')(typefaceToCSS(TYPEFACES.H3))
export const H4 = styled('h4')(typefaceToCSS(TYPEFACES.H4))
export const H5 = styled('h5')(typefaceToCSS(TYPEFACES.H5))
export const H6 = styled('h6')(typefaceToCSS(TYPEFACES.H6))

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
