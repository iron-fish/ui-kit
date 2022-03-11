/** @jsxImportSource @emotion/react */
import type { ReactNode } from 'react'
import { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Col } from 'src/components/Box'
import Showcase from 'src/components/Showcase'
import Swatch from 'src/components/Swatch'
import {
  TYPEFACES,
  COLORS,
  Typeface,
  CASE,
  NAMED_COLORS,
} from 'src/styles/constants'
import { asPx } from 'src/styles/utils'
import { H1, TITLE, asFont, typefaceToCSS } from 'src/styles/type'
import { Code, alignLeft, flexColumn, flexRow } from 'src/styles/shared'

import HexFish from 'svg/hexfish.svg'

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
}: ColorStackProps) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 2rem;
      ${compressible
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
      </div>
    </Showcase>
  )
}
export default Colors
