import { Checkbox, CheckboxProps } from '@chakra-ui/react'
import CheckedCheckBox from 'svgx/CheckedCheckBox'

const CheckBox = (props: CheckboxProps) => (
  <Checkbox icon={<CheckedCheckBox />} {...props} />
)

export default CheckBox
