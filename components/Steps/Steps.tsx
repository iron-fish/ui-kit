import { FC } from 'react'
import { Steps as OrigSteps, StepsProps } from 'chakra-ui-steps'

const Steps: FC<StepsProps> = props => (
  <OrigSteps
    {...props}
    labelOrientation={
      !props.orientation || props.orientation === 'horizontal'
        ? 'vertical'
        : 'horizontal'
    }
  />
)

export default Steps
