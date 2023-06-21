/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { Icon, IconProps } from '@chakra-ui/react'
import { FC } from 'react'

export const AwaitIcon: FC<IconProps> = props => (
  <Icon
    w="0.875rem"
    h="0.875rem"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7 3.29407V6.99995L9.88235 9.8823" stroke="currentColor" />
    <circle cx="7" cy="7" r="6.5" stroke="currentColor" />
  </Icon>
)

export default AwaitIcon
