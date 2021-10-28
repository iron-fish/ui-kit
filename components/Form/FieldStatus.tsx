/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { typefaceToCSS, FACES } from 'styles/type'
import { NAMED_COLORS, TYPEFACES } from 'styles/constants'
import { FONT } from 'styles/Global'

enum FieldStatusFeedback {
  GOOD = 'GOOD',
  BAD = 'BAD',
}

interface FieldStatusProps {
  feedback: FieldStatusFeedback
  text: string
}

const fieldStatus = css`
  ${FONT.BODY};
  ${FACES.H6}
  color: ${NAMED_COLORS.WHITE};
  text-align: center;
  padding: 0.5rem;
  width: 100%;
  margin-top: 0.5rem;
  border-radius: 5px;
  max-width: 28rem;
`

export const FieldStatus = ({
  feedback = FieldStatusFeedback.BAD,
  text,
}: FieldStatusProps) => (
  <div
    css={css`
      ${fieldStatus}
      border-color: ${feedback === FieldStatusFeedback.BAD
        ? 'bg-alertred'
        : 'bg-alertyellow'};
    `}
  >
    {text}
  </div>
)

interface AppliedFieldStatusProps {
  text: string
  size?: string
}

export const FieldError = (props: AppliedFieldStatusProps) => (
  <FieldStatus feedback={FieldStatusFeedback.BAD} {...props} />
)

export const FieldSuccess = (props: AppliedFieldStatusProps) => (
  <FieldStatus feedback={FieldStatusFeedback.GOOD} {...props} />
)

export default FieldStatus
