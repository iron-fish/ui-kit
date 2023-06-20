/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { Icon, IconProps } from '@chakra-ui/react'
import { FC } from 'react'

export const IconBook: FC<IconProps> = props => (
  <Icon
    height="18px"
    width="22px"
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 1C18.89.65 17.67.5 16.5.5 14.55.5 12.45.9 11 2 9.55.9 7.45.5 5.5.5 3.55.5 1.45.9 0 2v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C2.1 16.45 4.05 16 5.5 16c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V2c-.6-.45-1.25-.75-2-1Zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V4c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5Z"
      fill="currentColor"
    />
  </Icon>
)

export default IconBook
