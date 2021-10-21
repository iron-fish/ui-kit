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
  title: ReactNode
  colors: Color[]
  compressible?: boolean
}

const ColorStack = ({
  title,
  colors,
  compressible = true,
}: ColorStackProps) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 2rem;
      ${compressible
        ? `@media screen and (min-width: 48rem) {
          padding: 2rem;
          width: calc(50% - 4rem);
      }`
        : ''}
    `}
  >
    <H1
      css={css`
        text-align: left;
      `}
    >
      {title}
    </H1>
    <div
      css={css`
        border: 2px solid rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        overflow: hidden;
      `}
    >
      {colors.map(swatch => (
        <Swatch key={swatch.name} {...swatch} />
      ))}
    </div>
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
      <div
        css={css`
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          @media screen and (min-width: 40rem) {
            flex-direction: row;
          }
        `}
      >
        <ColorStack
          title={
            <>
              Component Colors:
              <br />
              Light Mode
            </>
          }
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
      </div>
    </Showcase>
  )
}
export default Colors
