import { FC, ReactNode } from 'react'
import { HStack, BoxProps, StackProps, Box } from '@chakra-ui/react'

import CopyToClipboardButton, {
  CopyToClipboardButtonProps,
} from './CopyToClipboardButton'

interface CopyValueToClipboardProps extends CopyToClipboardButtonProps {
  label: ReactNode
  value: string
  labelProps?: BoxProps
  containerProps?: StackProps
}

const CopyValueToClipboard: FC<CopyValueToClipboardProps> = ({
  label,
  value,
  labelProps = {},
  containerProps = {},
  ...rest
}) =>
  value && (
    <HStack spacing={0} {...containerProps}>
      <Box as="h4" {...labelProps}>
        {label}
      </Box>
      <CopyToClipboardButton value={value} {...rest} />
    </HStack>
  )

export default CopyValueToClipboard
