import type { ReactNode } from 'react'
import { chakra, Flex } from '@chakra-ui/react'
import { H1, TITLE } from 'styles/type'

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

import Showcase from './Showcase'
import Swatch from './Swatch'

import HexFish from 'svgx/hexfish'

interface Color {
  name: string
  hex: string
}

interface ColorStackProps {
  title: ReactNode
  colors: Color[]
  compressible?: boolean
  index?: number
}

const ColorStack = ({
  title,
  colors,
  compressible = true,
  index = Infinity,
}: ColorStackProps) => {
  return (
    <Flex
      flexDirection="column"
      p={{
        base: '2rem',
        md:
          index === 0
            ? `2rem 1rem 0rem 2rem`
            : index === 1
            ? `2rem 2rem 0rem 1rem`
            : `0rem 2rem 2rem 2rem`,
      }}
      w={{
        base: '100%',
        md: compressible
          ? `calc(50% - ${index > 1 ? '4rem' : '3rem'})`
          : '100%',
      }}
    >
      <H1 textAlign="left">{title}</H1>
      <chakra.div
        border="2px solid rgba(0, 0, 0, 0.5)"
        borderRadius="5px"
        overflow="hidden"
      >
        {colors.map(swatch => (
          <Swatch key={swatch.name} {...swatch} />
        ))}
      </chakra.div>
    </Flex>
  )
}

function Colors() {
  return (
    <Showcase
      title={
        <TITLE color={NAMED_COLORS.WHITE}>
          <HexFish style={{ maxWidth: '3rem', fill: NAMED_COLORS.WHITE }} />{' '}
          Colors
        </TITLE>
      }
      headerColor={COLORS.BRAND.BLUE}
    >
      <Flex flexDirection={{ base: 'column', md: 'row' }} flexWrap="wrap">
        <ColorStack
          title={
            <>
              Component Colors:
              <br />
              Light Mode
            </>
          }
          index={0}
          colors={Object.entries(COLORS.THEME.LIGHT).map(
            ([name, hex]: [string, string]) => ({ name, hex })
          )}
        />
        <ColorStack
          title={
            <>
              Component Colors:
              <br />
              Dark Mode
            </>
          }
          index={1}
          colors={Object.entries(COLORS.THEME.DARK).map(
            ([name, hex]: [string, string]) => ({ name, hex })
          )}
        />
        <ColorStack
          title="Accent Colors"
          compressible={false}
          colors={Object.entries(COLORS.BRAND).map(
            ([name, hex]: [string, string]) => ({
              name: name.replace(/_/g, ' '),
              hex,
            })
          )}
        />
      </Flex>
    </Showcase>
  )
}
export default Colors
