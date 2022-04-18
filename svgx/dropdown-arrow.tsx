import { useColorModeValue } from '@chakra-ui/react'

import { NAMED_COLORS } from 'theme/constants'

import { SVGProps } from './types'

export function DropdownArrow(props: SVGProps) {
  const color = useColorModeValue(NAMED_COLORS.BLACK, NAMED_COLORS.WHITE)

  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height={24}
      width={24}
      {...props}
    >
      <path d="M17 14L12 9L7 14L17 14Z" fill={color} />
    </svg>
  )
}

export default DropdownArrow
