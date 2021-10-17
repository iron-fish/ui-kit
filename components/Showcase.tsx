/** @jsxImportSource @emotion/react */
import type { ReactNode } from 'react'
import { css } from '@emotion/react'

import { Col } from 'components/Box'
import { COLORS, NAMED_COLORS } from 'utils/style'

export type ShowcaseProps = {
  headerColor: typeof NAMED_COLORS
  title: string
  children: ReactNode
}

export function Showcase({ headerColor, title, children }: ShowcaseProps) {
  return (
    <div>
      <Col
        css={css`
          background: ${headerColor};
          padding: 20vh 10vw;
          width: 80vw;
          height: 100vh;
          min-height: 100vh;
        `}
      >
        {title}
      </Col>
      {children}
    </div>
  )
}

export default Showcase
