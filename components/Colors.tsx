import type { ReactNode } from 'react'
import { chakra, Flex } from '@chakra-ui/react'

import Showcase from 'components/Showcase'
import Swatch from 'components/Swatch'
import { COLORS, NAMED_COLORS } from 'styles/constants'
import { H1, TITLE } from 'styles/type'

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
  const blah = compressible
    ? `@media screen and (min-width: 48rem) {
          padding: ${
            index === 0
              ? `2rem 1rem 0rem 2rem`
              : index === 1
              ? `2rem 2rem 0rem 1rem`
              : `0rem 2rem 2rem 2rem`
          };
          width: calc(50% - ${index > 1 ? '4rem' : '3rem'});
      }`
    : ``
  return (
    <Flex flexDirection="column" w="100%" p="2rem">
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
  // @media screen and (min-width: 40rem) {
  //             flex-direction: row;
  //           }
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
      <Flex flexDirection="column" flexWrap="wrap">
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
