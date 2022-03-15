/** @jsxImportSource @emotion/react */
import { NameValue, Field } from 'hooks/useForm'
import LabelledRow from './LabelledRow'
import { customSelectWrapper, customSelect } from './Select.style'

interface SelectField extends Field {
  useDefault?: boolean
  defaultLabel?: string
  className?: string
}

export const Select = ({
  disabled,
  options = [],
  useDefault = false,
  defaultLabel = '',
  defaultValue,
  value,
  onChange,
  setTouched,
}: SelectField) => {
  const allOptions = useDefault
    ? [{ name: defaultLabel, value: defaultValue }].concat(options)
    : options
  return (
    <div css={customSelectWrapper}>
      <select
        css={customSelect({ disabled })}
        disabled={disabled}
        onChange={e => {
          onChange(e)
          setTouched(true)
        }}
        value={value}
      >
        {allOptions.map(({ value: option, name }: NameValue) => (
          <option key={option} value={option}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}

export const LabelledSelect = (props: SelectField) => {
  const { id, label, errorText, valid, disabled } = props

  return (
    <LabelledRow
      id={id}
      text={label}
      valid={valid}
      errorText={errorText}
      disabled={disabled}
    >
      <Select {...props} />
    </LabelledRow>
  )
}

export default LabelledSelect
