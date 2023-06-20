/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { Icon, IconProps } from '@chakra-ui/react'
import { FC } from 'react'

export const IconDarkMode: FC<IconProps> = (props: IconProps) => (
  <Icon
    height="24px"
    width="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="#0D0C22"
    {...props}
  >
    <path
      d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 11.54 20.96 11.08 20.9 10.64C19.92 12.01 18.32 12.9 16.5 12.9C13.52 12.9 11.1 10.48 11.1 7.5C11.1 5.69 11.99 4.08 13.36 3.1C12.92 3.04 12.46 3 12 3Z"
      fill="currentColor"
    />
  </Icon>
)

export default IconDarkMode
