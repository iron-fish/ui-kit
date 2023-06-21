/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC } from 'react'
import { Step as OrigStep, StepProps as OrigStepProps } from 'chakra-ui-steps'

interface StepProps extends OrigStepProps {
  maxContentWidth?: string
}

const Step: FC<StepProps> = ({ sx, maxContentWidth, ...props }) => (
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
