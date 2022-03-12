/** @jsxImportSource @emotion/react */
import { css } from '@emotion/css'
import { ReactNode } from 'react'
import { NAMED_COLORS } from 'styles/constants'
import { FACES } from 'styles/type'

const note = css`
  ${FACES.H6}
  padding: 0.5rem;
  max-width: 28rem;
  margin-top: 0.5rem;
  background-color: ${NAMED_COLORS.LIGHT_YELLOW};
  text-align: center;
`

interface NoteProps {
  children: ReactNode
  size?: string
  className?: string
}

export const Note = ({
  children,
  size = 'w-full',
  className = '',
}: NoteProps) => (
  <div
    css={css`
      ${note}
      ${size}
      ${className}
    `}
  >
    {children}
  </div>
)
export default Note
