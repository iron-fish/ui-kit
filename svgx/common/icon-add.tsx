/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC } from 'react'
import { Icon, IconProps } from '@chakra-ui/react'

export const IconAdd: FC<IconProps> = props => (
  <Icon
    height="26px"
    width="26px"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.5832 14.0834H14.0832V20.5834H11.9165V14.0834H5.4165V11.9167H11.9165V5.41675H14.0832V11.9167H20.5832V14.0834Z"
      fill="currentColor"
    />
  </Icon>
)

export default IconAdd
