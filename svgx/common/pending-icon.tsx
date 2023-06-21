/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { Icon, IconProps } from '@chakra-ui/react'
import { FC } from 'react'

export const PendingIcon: FC<IconProps> = props => (
  <Icon
    w="0.625rem"
    h="0.125rem"
    viewBox="0 0 10 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="4" width="2" height="2" fill="currentColor" />
    <rect width="2" height="2" fill="currentColor" />
    <rect x="8" width="2" height="2" fill="currentColor" />
  </Icon>
)

export default PendingIcon
