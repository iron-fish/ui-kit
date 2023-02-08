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
