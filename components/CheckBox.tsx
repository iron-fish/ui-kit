import { Checkbox } from '@chakra-ui/react'
import CheckedCheckBox from 'svgx/CheckedCheckBox'

const CheckBox = props => <Checkbox icon={<CheckedCheckBox />} {...props} />

export default CheckBox
