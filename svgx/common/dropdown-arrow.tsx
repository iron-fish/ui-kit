import { Icon, IconProps, useColorModeValue } from '@chakra-ui/react'
import { FC } from 'react'

import { NAMED_COLORS } from 'theme/constants'

export const DropdownArrow: FC<IconProps> = props => {
  const color = useColorModeValue(NAMED_COLORS.BLACK, NAMED_COLORS.WHITE)

  return (
    <Icon
      height="24px"
      width="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M17 14L12 9L7 14L17 14Z" fill={color} />
    </Icon>
  )
}

export default DropdownArrow
