/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { curry } from 'ramda'
import { Code } from 'styles/shared'
import { Flex } from '@chakra-ui/react'
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
  const colorColumnProps = {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '5rem',
    width: '17%',
    color: blackOrWhite(hex),
  }

  return (
    <Flex
      direction="row"
      onClick={() => copyToClipboard(hex)}
      maxH="5rem"
      overflow="hidden"
      justifyContent="space-between"
      alignItems="center"
      color={blackOrWhite(hex)}
    >
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        minWidth="49%"
        minHeight="5rem"
        alignSelf="flex-start"
        padding="0 1rem"
        backgroundColor={hex}
        color={blackOrWhite(hex)}
      >
        <strong>{name}</strong>
        <Code>{hex.toUpperCase()}</Code>
      </Flex>
      <Flex direction="column" background={q3} {...colorColumnProps}>
        75%
      </Flex>
      <Flex direction="column" background={q2} {...colorColumnProps}>
        50%
      </Flex>
      <Flex direction="column" background={q1} {...colorColumnProps}>
        25%
      </Flex>
    </Flex>
  )
}
export default Swatch
