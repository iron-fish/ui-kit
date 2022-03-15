/** @jsxImportSource @emotion/react */
import type { ReactNode } from 'react'
import { css } from '@emotion/react'

import { Col } from 'components/Box'

export type ShowcaseProps = {
  headerColor: string
  title: ReactNode
  children: ReactNode
}

export function Showcase({ headerColor, title, children }: ShowcaseProps) {
  return (
    <div>
      <Col
        css={css`
          background: ${headerColor};
          padding: 4rem 2rem;
          width: calc(100% - 4rem);
          text-align: left;
        `}
      >
        {title}
      </Col>
      {children}
    </div>
  )
}

export default Showcase
