/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { Icon, IconProps } from '@chakra-ui/react'
import { FC } from 'react'

export const ExpiredIcon: FC<IconProps> = props => (
  <Icon
    w="0.75rem"
    h="0.6875rem"
    viewBox="0 0 12 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11 1L1 10M1 1L11 10" stroke="currentColor" strokeWidth="1.5" />
  </Icon>
)

export default ExpiredIcon
