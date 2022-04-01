import type { ReactNode } from 'react'
import { chakra, Flex } from '@chakra-ui/react'

import { COLORS, NAMED_COLORS } from '../styles/constants'
import { H1, TITLE } from '../styles/type'

import Showcase from './Showcase'
import Swatch from './Swatch'

import HexFish from '../svgx/hexfish'

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
