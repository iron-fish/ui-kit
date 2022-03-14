/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import Showcase from 'components/Showcase'
import { COLORS, NAMED_COLORS } from 'styles/constants'
import { H1 } from 'styles/type'

import HexFish from 'svg/hexfish.svg'

/*
type COProps = {
  mode?: THEME
}
*/

function ComponentsOverview() {
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
