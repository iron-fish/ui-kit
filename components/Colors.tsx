/** @jsxImportSource @emotion/react */
import type { ReactNode } from 'react'
import { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Col } from 'components/Box'
import Showcase from 'components/Showcase'
import Swatch from 'components/Swatch'
import {
  TYPEFACES,
  COLORS,
  Typeface,
  CASE,
  NAMED_COLORS,
} from 'styles/constants'
import { asPx } from 'styles/utils'
import { H1, TITLE, asFont, typefaceToCSS } from 'styles/type'
import { Code, alignLeft, flexColumn, flexRow } from 'styles/shared'

import HexFish from 'svg/hexfish.svg'

interface Color {
  name: string
  hex: string
}

interface ColorStackProps {
  title: string
  colors: Color[]
}

const ColorStack = ({ title, colors }: ColorStackProps) => (
  <div
    css={css`
      width: 80vw;
      padding: 1vh 10vw;
    `}
  >
    <H1
      css={css`
        text-align: left;
      `}
    >
      {title}
    </H1>
    {colors.map(swatch => (
      <Swatch key={swatch.name} {...swatch} />
    ))}
  </div>
)

function Colors() {
  return (
    <Showcase
      title={
        <TITLE
          css={css`
            color: ${NAMED_COLORS.WHITE};
          `}
        >
          <HexFish
            css={css`
              max-width: 3rem;
              fill: ${NAMED_COLORS.WHITE};
            `}
          />{' '}
          Colors
        </TITLE>
      }
      headerColor={COLORS.BRAND.BLUE}
    >
      <>
        <ColorStack
          title="Component Colors: Light Mode"
          colors={Object.entries(COLORS.THEME.LIGHT).map(
            ([name, hex]: [string, string]) => ({ name, hex })
          )}
        />
        <ColorStack
          title="Component Colors: Dark Mode"
          colors={Object.entries(COLORS.THEME.DARK).map(
            ([name, hex]: [string, string]) => ({ name, hex })
          )}
        />
        <ColorStack
          title="Accent Colors"
          colors={Object.entries(COLORS.BRAND).map(
            ([name, hex]: [string, string]) => ({
              name: name.replace(/_/g, ' '),
              hex,
            })
          )}
        />
      </>
    </Showcase>
  )
}
export default Colors
