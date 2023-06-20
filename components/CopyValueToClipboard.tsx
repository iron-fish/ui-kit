/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC, ReactNode } from 'react'
import { HStack, BoxProps, StackProps, Text } from '@chakra-ui/react'

import CopyToClipboardButton, {
  CopyToClipboardButtonProps,
} from './CopyToClipboardButton'

interface CopyValueToClipboardProps extends CopyToClipboardButtonProps {
  label: ReactNode
  labelProps?: BoxProps
  containerProps?: StackProps
}

const CopyValueToClipboard: FC<CopyValueToClipboardProps> = ({
  label,
  labelProps,
  containerProps,
  ...rest
}) => (
  <HStack spacing={0} {...containerProps}>
    <Text mr="0.5rem" {...labelProps}>
      {label}
    </Text>
    <CopyToClipboardButton {...rest} />
  </HStack>
)

export default CopyValueToClipboard
