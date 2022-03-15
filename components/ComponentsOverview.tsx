/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import Showcase from 'components/Showcase'
import { THEME, COLORS, NAMED_COLORS } from 'styles/constants'
import { H1 } from 'styles/type'

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
            color: ${mode ? NAMED_COLORS.BLACK : NAMED_COLORS.WHITE};
          `}
        >
          <HexFish
            css={css`
              max-width: 3rem;
              fill: ${mode ? NAMED_COLORS.BLACK : NAMED_COLORS.WHITE};
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
