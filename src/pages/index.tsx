/** @jsxImportSource @emotion/react */
// ^ required to use css correctly
import { useState } from 'react'
import { css } from '@emotion/react'

import { COLORS, THEME } from 'src/styles/constants'

import { Col } from 'src/components/Box'
import Typography from 'src/components/Typography'
import Colors from 'src/components/Colors'
import ComponentsOverview from 'src/components/ComponentsOverview'

import UIKIT from 'svg/ui-kit.svg'

export default function Home() {
  return (
    <main
      css={css`
        font-size: 14px;
      `}
    >
      <div
        css={css`
          background: ${COLORS.BRAND.BLUE};
        `}
      >
        <Col
          css={css`
            padding: 10rem 2rem;
            width: calc(100% - 4rem);
          `}
        >
          <UIKIT
            css={css`
              fill: ${COLORS.GLOBAL.WHITE};
              width: 54vw;
            `}
          />
        </Col>
      </div>
      <Typography />
      <Colors />
      <ComponentsOverview mode={THEME.LIGHT} />
    </main>
  )
}
