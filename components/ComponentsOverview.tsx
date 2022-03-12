/** @jsxImportSource @emotion/react */
import type { ReactNode } from 'react'
import { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Col } from 'components/Box'
import Showcase from 'components/Showcase'
import Swatch from 'components/Swatch'
import { THEME, COLORS, NAMED_COLORS } from 'styles/constants'
import { asPx } from 'styles/utils'
import { H1, asFont, typefaceToCSS } from 'styles/type'
import { Code, alignLeft, flexColumn, flexRow } from 'styles/shared'

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
