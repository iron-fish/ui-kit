/** @jsxImportSource @emotion/react */
// ^ required to use css correctly
import Head from 'next/head'
import Image from 'next/image'
import { css } from '@emotion/react'
import { Col } from 'components/Box'

import { COLORS } from 'styles/global'

import UIKIT from 'svg/ui-kit.svg'

export default function Home() {
  return (
    <div
      css={css`
        background: ${COLORS.BRAND.BLUE};
        height: 100vh;
      `}
    >
      <Col
        css={css`
          padding: 20vh 10vw;
          width: 80vw;
          height: 100vh;
          min-height: 100vh;
        `}
      >
        <UIKIT
          css={css`
            fill: ${COLORS.GLOBAL.WHITE};
            width: 54vw;
            margin: 0 auto;
          `}
        />
      </Col>
    </div>
  )
}
