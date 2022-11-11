import { Icon, IconProps } from '@chakra-ui/react'
import { FC } from 'react'

export const ArrowDownLeft: FC<IconProps> = props => (
  <Icon
    height="17px"
    width="16px"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 1.598 14.496 0 2.133 13.135V5.667H0V17h10.667v-2.267h-7.03L16 1.598Z"
      fill="currentColor"
    />
  </Icon>
)

export default ArrowDownLeft
