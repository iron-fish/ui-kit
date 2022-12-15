import { FC } from 'react'
import { Step as OrigStep, StepProps as OrigStepProps } from 'chakra-ui-steps'

interface StepProps extends OrigStepProps {
  maxContentWidth?: string
}

const Step: FC<StepProps> = ({ sx, maxContentWidth = '8rem', ...props }) => (
  <OrigStep
    {...props}
    sx={{
      '& > div:first-of-type': {
        w: maxContentWidth,
        minW: 'max-content',
      },
      ...sx,
    }}
  />
)

export default Step
