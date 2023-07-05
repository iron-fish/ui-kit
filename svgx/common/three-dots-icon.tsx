/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { Icon, IconProps } from '@chakra-ui/react'
import { FC } from 'react'

export const ThreeDotsIcon: FC<IconProps> = props => (
  <Icon
    xmlns="http://www.w3.org/2000/Icon"
    viewBox="0 0 16 4"
    width="16px"
    height="4px"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2ZM8 0C6.9 0 6 .9 6 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z"
    />
  </Icon>
)

export default ThreeDotsIcon
