import { FC, useState, useEffect } from 'react'
import {
  Tooltip,
  IconButton,
  TooltipProps,
  IconButtonProps,
} from '@chakra-ui/react'

import CopyIcon from 'svgx/common/icon-copy'
import CheckIcon from 'svgx/common/icon-check'

export interface CopyToClipboardButtonProps {
  value: string
  copyTooltipText: string
  copiedTooltipText: string
  tooltipProps?: TooltipProps
  tooltipCloseDelay?: number
  iconButtonProps?: Omit<IconButtonProps, 'onClick' | 'aria-label'>
}

const CopyToClipboardButton: FC<CopyToClipboardButtonProps> = ({
  value,
  copyTooltipText,
  copiedTooltipText,
  tooltipProps,
  iconButtonProps,
  tooltipCloseDelay = 1500,
}) => {
  const [$copied, $setCopied] = useState(false)

  useEffect(() => {
    if ($copied) {
      setTimeout(() => $setCopied(false), tooltipCloseDelay)
    }
  }, [$copied])

  return (
    <Tooltip
      closeDelay={$copied ? tooltipCloseDelay : 0}
      label={$copied ? copiedTooltipText : copyTooltipText}
      {...tooltipProps}
    >
      <IconButton
        justifyContent="none"
        minW="0.75rem"
        aria-label={$copied ? copiedTooltipText : copyTooltipText}
        h="1.25rem"
        onClick={e => {
          if (!$copied) {
            navigator.clipboard.writeText(value)
            $setCopied(true)
            e.stopPropagation()
          }
        }}
        background="none"
        _focus={{
          boxShadow: 'none',
        }}
        _hover={{
          background: 'none',
        }}
        _active={{
          background: 'none',
        }}
        {...iconButtonProps}
        icon={
          $copied ? (
            <CheckIcon color="green" />
          ) : (
            <CopyIcon w="0.75rem" h="0.75rem" />
          )
        }
      />
    </Tooltip>
  )
}

export default CopyToClipboardButton
