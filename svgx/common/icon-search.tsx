/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { Icon, IconProps } from '@chakra-ui/react'
import { FC } from 'react'

export const IconSearch: FC<IconProps> = props => {
  return (
    <Icon
      height="15px"
      width="15px"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="6.364"
        cy="6.364"
        r="5.614"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M10.182 10.182 14 14" stroke="currentColor" strokeWidth="1.5" />
    </Icon>
  )
}

export default IconSearch
