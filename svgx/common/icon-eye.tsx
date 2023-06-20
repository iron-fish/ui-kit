/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC } from 'react'
import { Icon, IconProps } from '@chakra-ui/react'

interface IconEyeProps extends IconProps {
  crossed: boolean
}

export const IconEye: FC<IconEyeProps> = ({ crossed = true, ...rest }) => {
  return crossed ? (
    <Icon
      height="11px"
      width="16px"
      viewBox="0 0 16 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8 2c2.527 0 4.78 1.42 5.88 3.667A6.513 6.513 0 0 1 8 9.334a6.513 6.513 0 0 1-5.88-3.667A6.513 6.513 0 0 1 8 2ZM8 .667c-3.333 0-6.18 2.073-7.333 5 1.153 2.927 4 5 7.333 5s6.18-2.073 7.333-5c-1.153-2.927-4-5-7.333-5ZM8 4a1.667 1.667 0 1 1-.001 3.335 1.667 1.667 0 0 1 0-3.335Zm0-1.333c-1.654 0-3 1.347-3 3s1.346 3 3 3c1.653 0 3-1.347 3-3s-1.347-3-3-3Z"
        fill="currentColor"
      />
    </Icon>
  ) : (
    <Icon
      height="14px"
      width="16px"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8 3c2.527 0 4.78 1.42 5.88 3.666a6.43 6.43 0 0 1-1.607 2.08l.94.94a7.869 7.869 0 0 0 2.12-3.02c-1.153-2.927-4-5-7.333-5a7.9 7.9 0 0 0-2.427.38l1.1 1.1A6.738 6.738 0 0 1 8 3Zm-.713.76 1.38 1.38c.38.166.686.473.853.853l1.38 1.38c.053-.227.093-.467.093-.714A2.989 2.989 0 0 0 8 3.666c-.247 0-.48.033-.713.093ZM1.34 1.58l1.786 1.786a7.825 7.825 0 0 0-2.46 3.3c1.154 2.927 4 5 7.334 5a7.82 7.82 0 0 0 2.88-.546l2.28 2.28.94-.94L2.28.633l-.94.946Zm5 5 1.74 1.74a.335.335 0 0 1-.08.013c-.92 0-1.667-.747-1.667-1.667 0-.033.007-.053.007-.087ZM4.073 4.312 5.24 5.479a3.005 3.005 0 0 0 3.94 3.947l.653.653c-.587.16-1.2.254-1.833.254a6.513 6.513 0 0 1-5.88-3.667 6.601 6.601 0 0 1 1.953-2.353Z"
        fill="currentColor"
      />
    </Icon>
  )
}

export default IconEye
