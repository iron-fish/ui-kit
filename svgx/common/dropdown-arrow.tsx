/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { Icon, IconProps, useColorModeValue } from '@chakra-ui/react'
import { FC } from 'react'

import { NAMED_COLORS } from 'theme/constants'

export const DropdownArrow: FC<IconProps> = props => {
  const color = useColorModeValue(NAMED_COLORS.BLACK, NAMED_COLORS.WHITE)

  return (
    <Icon
      height="24px"
      width="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M17 14L12 9L7 14L17 14Z" fill={color} />
    </Icon>
  )
}

export default DropdownArrow
