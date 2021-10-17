/** @jsxImportSource @emotion/react */
// ^ required to use css correctly
import type { ReactNode } from 'react'
import { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Col } from 'components/Box'
import Showcase from 'components/Showcase'
import {
  TYPEFACES,
  COLORS,
  Typeface,
  CASE,
  NAMED_COLORS,
} from 'styles/constants'
import { asPx } from 'styles/utils'
import { TITLE, asFont, typefaceToCSS } from 'styles/type'
import { Code, alignLeft, flexColumn, flexRow } from 'styles/shared'
import { capitalize } from 'utils/string'

import HexFish from 'svg/hexfish.svg'
import UIKIT from 'svg/ui-kit.svg'

const wideRow = css`
  ${flexRow}
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  overflow: hidden;
  &:nth-of-type(2n + 2) {
    background-color: ${NAMED_COLORS.LIGHTER_GREY};
  }
`
const wideFirstColumn = css`
  ${alignLeft}
  min-width: 5rem;
  width: 15%;
  justify-self: flex-start;
  overflow: hidden;
  padding-left: 0.5rem;
`
const THead = styled('th')`
  ${flexColumn}
  width: ${100 / 4}%;
`
const TCol = styled('td')`
  ${flexColumn}
  width: ${100 / 4}%;
`

function TypographyContent() {
  const [$asRem, $setAsRem] = useState<boolean>(true)
  const units = $asRem ? ' rem' : ' pixels'
  const typefaceKVs = Object.entries(TYPEFACES)

  return (
    <div
      css={css`
        background-color: ${NAMED_COLORS.WHITE};
        width: 100vw;
        padding: 0;
        @media screen and (min-width: 60rem) {
          width: 80vw;
          padding: 10vh 10vw;
        }
      `}
    >
      <table css={flexColumn} onClick={() => $setAsRem(!$asRem)}>
        <thead css={wideRow}>
          <tr css={wideRow}>
            <THead css={wideFirstColumn}>Name</THead>
            <THead>Family</THead>
            <THead>Size (in {units})</THead>
            <THead>Line Height (in {units})</THead>
            {/*<THead>Weight</THead>
          <THead>Text Transform</THead>*/}
          </tr>
        </thead>
        <tbody>
          {typefaceKVs.map(([key, t]: [string, Typeface], i: number) => {
            const Example = asFont(key)
            return (
              <tr
                key={key}
                title={`.${key} { ${typefaceToCSS(t)} }`}
                css={wideRow}
              >
                <TCol css={wideFirstColumn}>
                  <Example>{capitalize(key)}</Example>
                </TCol>
                <TCol>
                  <Code>{t.family.slice(0, -8)}</Code>
                </TCol>
                <TCol>
                  <Code>{$asRem ? t.size : asPx(t.size)}</Code>
                </TCol>
                <TCol>
                  <Code>{$asRem ? t.lineHeight : asPx(t.lineHeight)}</Code>
                </TCol>
                {/*<TCol>
                <Code>{t.weight}</Code>
              </TCol>
              <TCol>
                {t.textTransform === CASE.MIXED ? 'sentence' : 'uppercase'}
              </TCol>*/}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function Typography() {
  return (
    <Showcase
      title={
        <TITLE>
          <HexFish
            css={css`
              max-width: 3rem;
            `}
          />{' '}
          Typography
        </TITLE>
      }
      headerColor={COLORS.BRAND.LIGHT_RED}
    >
      <TypographyContent />
    </Showcase>
  )
}
export default Typography
