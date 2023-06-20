/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC } from 'react'
import { Icon, IconProps } from '@chakra-ui/react'

export const CheckIcon: FC<IconProps> = props => (
  <Icon
    height="16px"
    width="16px"
    viewBox="0 0 16 16"
    color="#2C72FF"
    {...props}
  >
    <g fill="currentColor">
      <polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"></polygon>
    </g>
  </Icon>
)

export default CheckIcon
