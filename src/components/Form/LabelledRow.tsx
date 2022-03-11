/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import FormRow from './FormRow'
import { FieldError } from './FieldStatus'
import { FACES } from 'src/styles/type'

interface LabelledRowProps {
  id: string
  label?: string
  required?: boolean
  valid: boolean
  errorText?: string
  disabled?: boolean
  children?: React.ReactNode
}

const label = css`
  ${FACES.H6}
  margin-bottom: 0.75rem;
`

export const LabelledRow = ({
  id,
  label = '',
  children,
  valid,
  required = true,
  errorText = 'This field is required',
  disabled = false,
}: LabelledRowProps) => (
  <>
    <FormRow valid={valid} disabled={disabled}>
      {label.length > 0 && (
        <label htmlFor={id} css={label}>
          {label}
          {required && (
            <span
              className={`text-md ${
                disabled ? 'text-ifsubtextgray' : 'text-gray-500'
              }`}
            >
              *
            </span>
          )}
        </label>
      )}
      {children}
    </FormRow>
    {!valid && <FieldError text={errorText} />}
  </>
)

export default LabelledRow
