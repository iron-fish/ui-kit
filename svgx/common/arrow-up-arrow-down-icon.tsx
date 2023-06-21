/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC } from 'react'
import { Icon, IconProps } from '@chakra-ui/react'

export const ArrowUpArrowDownIcon: FC<IconProps> = props => {
  return (
    <Icon
      width="14px"
      height="18px"
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 14.01V7H9v7.01H6L10 18l4-3.99h-3ZM4 0 0 3.99h3V11h2V3.99h3L4 0Zm7 14.01V7H9v7.01H6L10 18l4-3.99h-3ZM4 0 0 3.99h3V11h2V3.99h3L4 0Z"
        fill="currentColor"
      />
    </Icon>
  )
}

export default ArrowUpArrowDownIcon
