/** @jsxImportSource @emotion/react */
import type { ReactNode } from 'react'
import { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Col } from 'src/components/Box'
import Showcase from 'src/components/Showcase'
import Swatch from 'src/components/Swatch'
import { THEME, COLORS, NAMED_COLORS } from 'src/styles/constants'
import { asPx } from 'src/styles/utils'
import { H1, asFont, typefaceToCSS } from 'src/styles/type'
import { Code, alignLeft, flexColumn, flexRow } from 'src/styles/shared'

import HexFish from 'svg/hexfish.svg'

type COProps = {
  mode?: THEME
}

function ComponentsOverview({ mode }: COProps) {
  return (
    <Showcase
      title={
        <H1
          css={css`
            color: ${NAMED_COLORS.BLACK};
          `}
        >
          <HexFish
            css={css`
              max-width: 3rem;
              fill: ${NAMED_COLORS.BLACK};
            `}
          />{' '}
          Components: Light Mode
        </H1>
      }
      headerColor={COLORS.BRAND.LIGHT_YELLOW}
    >
      Hey!
    </Showcase>
  )
}
export default ComponentsOverview
