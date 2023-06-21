/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { Icon, IconProps } from '@chakra-ui/react'

export const Caret = (props: IconProps) => (
  <Icon
    width="20px"
    height="22px"
    fill="none"
    viewBox="0 0 20 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.15825 7.1187L10.9749 11L7.15825 14.8812L8.33325 16.0735L13.3333 11L8.33325 5.92642L7.15825 7.1187Z"
      fill="currentColor"
    />
  </Icon>
)

export default Caret
