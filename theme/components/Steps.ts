import { SystemStyleFunction } from '@chakra-ui/theme-tools'
import { StepsStyleConfig } from 'chakra-ui-steps'
import { TYPEFACES } from 'styles/type'

const baseStyleDescription: SystemStyleFunction = props => ({
  ...StepsStyleConfig.baseStyle(props).description,
  ...TYPEFACES.H5,
  fontSize: '1.2rem,',
})

const baseStyleLabel: SystemStyleFunction = props => ({
  ...StepsStyleConfig.baseStyle(props).label,
  ...TYPEFACES.H6,
  fontSize: '0.8rem',
})

const Steps = {
  ...StepsStyleConfig,
  baseStyle: props => ({
    ...StepsStyleConfig.baseStyle(props),
    label: baseStyleLabel(props),
    description: baseStyleDescription(props),
  }),
}

export default Steps
