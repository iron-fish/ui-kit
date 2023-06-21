/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

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
