/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { Icon, IconProps } from '@chakra-ui/react'
import { FC } from 'react'

export const IconMiner: FC<IconProps> = props => (
  <Icon
    width="16px"
    height="18px"
    viewBox="0 0 16 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m14 0-3 3V0H5C2.24 0 0 2.24 0 5h5v12c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V5l3 3h2V0h-2ZM9 16H7v-6h2v6ZM7 8V3H2.77C3.32 2.39 4.11 2 5 2h4v6H7Z"
      fill="currentColor"
    />
  </Icon>
)

export default IconMiner
