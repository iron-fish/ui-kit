/** @jsxImportSource @emotion/react */
// ^ required to use css correctly
import type { ReactNode } from 'react'
import { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Col } from 'src/components/Box'
import Showcase from 'src/components/Showcase'
import {
  TYPEFACES,
  COLORS,
  Typeface,
  CASE,
  NAMED_COLORS,
} from 'src/styles/constants'
import { asPx } from 'src/styles/utils'
import { TITLE, asFont, typefaceToCSS } from 'src/styles/type'
import { Code, alignLeft, flexColumn, flexRow } from 'src/styles/shared'
import { capitalize } from 'src/utils/string'

import HexFish from 'svg/hexfish.svg'
import UIKIT from 'svg/ui-kit.svg'

const wideRow = css`
  ${flexRow}
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 5.5rem;
  overflow: hidden;
  &:nth-of-type(2n + 2) {
    background-color: ${NAMED_COLORS.LIGHTER_GREY};
  }
`
const wideFirstColumn = css`
  ${alignLeft}
  min-width: 5rem;
  width: 40%;
  justify-self: flex-start;
  overflow: hidden;
  padding-left: 2rem;
`
const THead = styled('th')`
  ${flexColumn}
  width: ${100 / 5}%;
`
const Lined = styled('div')`
  padding-bottom: 0.5rem;
  text-decoration: 1px solid black;
`
const TCol = styled('td')`
  ${flexColumn}
  width: ${100 / 5}%;
`
const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing Iron Fish elit, sed do eiusmod mainnet.`

function TypographyContent() {
  const [$asRem, $setAsRem] = useState<boolean>(true)
  const units = $asRem ? ' rem' : ' pixels'
  const typefaceKVs = Object.entries(TYPEFACES)

  return (
    <div
      css={css`
        cursor: help;
        background-color: ${NAMED_COLORS.WHITE};
        width: 100%;
        padding: 0;
        @media screen and (min-width: 60rem) {
          padding: 2rem;
          width: calc(100% - 4rem);
        }
      `}
    >
      <table css={flexColumn} onClick={() => $setAsRem(!$asRem)}>
        <thead
          css={css`
            ${wideRow}
            border-bottom: 1px solid black;
            height: 3rem;
          `}
        >
          <tr css={wideRow}>
            <THead css={wideFirstColumn}>
              <Lined>Name</Lined>
            </THead>
            <THead>
              <Lined>Family</Lined>
            </THead>
            <THead>
              <Lined>
                Size <br />
                <small>(in {units})</small>
              </Lined>
            </THead>
            <THead>
              <Lined>
                Line Height <br />
                <small>(in {units})</small>
              </Lined>
            </THead>
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
                <TCol
                  css={css`
                    ${wideFirstColumn}
                    margin-top: ${$asRem ? 'inherit' : '0.25rem'};
                    align-self: ${$asRem ? 'center' : 'flex-start'};
                  `}
                >
                  <Example>{$asRem ? capitalize(key) : loremIpsum}</Example>
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
