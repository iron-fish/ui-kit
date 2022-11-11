import { Icon, IconProps } from '@chakra-ui/react'
import { FC } from 'react'

export const ArrowUpRight: FC<IconProps> = props => (
  <Icon
    height="17px"
    width="16px"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 15.402 1.504 17 13.867 3.865v7.468H16V0H5.333v2.267h7.03L0 15.402Z"
      fill="currentColor"
    />
  </Icon>
)

export default ArrowUpRight
