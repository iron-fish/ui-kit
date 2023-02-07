import { FC, ReactNode } from 'react'
import { HStack, BoxProps, StackProps, Box } from '@chakra-ui/react'

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
  labelProps = { as: 'h4' },
  containerProps = {},
  ...rest
}) => (
  <HStack spacing={0} {...containerProps}>
    <Box mr="0.5rem" {...labelProps}>
      {label}
    </Box>
    <CopyToClipboardButton {...rest} />
  </HStack>
)

export default CopyValueToClipboard
