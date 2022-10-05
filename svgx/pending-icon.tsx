import { Icon, IconProps } from '@chakra-ui/react'
import { FC } from 'react'

export const PendingIcon: FC<IconProps> = props => (
  <Icon
    w="10px"
    h="2px"
    viewBox="0 0 10 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="4" width="2" height="2" fill="currentColor" />
    <rect width="2" height="2" fill="currentColor" />
    <rect x="8" width="2" height="2" fill="currentColor" />
  </Icon>
)

export default PendingIcon
