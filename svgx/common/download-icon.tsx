/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC } from 'react'
import { Icon, IconProps } from '@chakra-ui/react'

export const DownloadIcon: FC<IconProps> = props => {
  return (
    <Icon
      width="18px"
      height="18px"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.125 15c-.3 0-.563-.113-.788-.338A1.08 1.08 0 0 1 3 13.875v-2.681h1.125v2.681h9.75v-2.681H15v2.681c0 .3-.113.563-.338.787a1.08 1.08 0 0 1-.787.338h-9.75ZM9 12.131 5.381 8.512l.806-.806 2.25 2.25V3h1.126v6.956l2.25-2.25.806.806L9 12.133Z"
        fill="currentColor"
      />
    </Icon>
  )
}

export default DownloadIcon
