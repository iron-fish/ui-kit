/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FACES } from 'src/styles/type'
import { NAMED_COLORS, TYPEFACES } from 'src/styles/constants'
import { FONT } from 'src/styles/Global'

interface FormRowProps {
  className?: string
  valid: boolean
  disabled: boolean
  children?: React.ReactNode
}

const getBorderColor = (valid: boolean, disabled: boolean) => {
  if (disabled) {
    return 'border-ifsubtextgray'
  } else if (!valid) {
    return 'border-alertred'
  }
  return 'border-black'
}

const formRow = css`
  ${FACES.BODY}
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1rem;
  margin-top: 1rem;
  width: 100;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  height: 4rem;
  max-height: 4rem;
`

export const FormRow = ({
  className = '',
  valid,
  disabled,
  children,
}: FormRowProps) => {
  const borderColor = getBorderColor(valid, disabled)
  const textColor = disabled ? 'text-ifsubtextgray' : ''
  return (
    <div
      css={css`
        ${formRow} ${borderColor} ${textColor} ${className}
      `}
    >
      {children}
    </div>
  )
}
export default FormRow
