/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC, ReactNode } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

export interface GroupProps extends BoxProps {
  label?: ReactNode | string
  headerProps: BoxProps
  children?: ReactNode[]
}

const Group: FC<GroupProps> = ({ label, headerProps, children, ...rest }) => {
  return (
    <Box {...rest}>
      {label && <Box {...headerProps}>{label}</Box>}
      <Box>{children}</Box>
    </Box>
  )
}

export default Group
