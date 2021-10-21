/** @jsxImportSource @emotion/react */
// ^ required to use css correctly
import { useState } from 'react'
import { css } from '@emotion/react'

import { COLORS, THEME } from 'styles/constants'

import { Col } from 'components/Box'
import Typography from 'components/Typography'
import Colors from 'components/Colors'
import ComponentsOverview from 'components/ComponentsOverview'

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
            padding: 10vh 2vw;
            width: 96vw;
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
