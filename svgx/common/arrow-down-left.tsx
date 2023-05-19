import { Icon, IconProps } from '@chakra-ui/react'
import { FC } from 'react'

export const ArrowDownLeft: FC<IconProps> = props => (
  <Icon
    height="18px"
    width="18px"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth="2"
      d="M14.112 17c-2.341-2.03-8.148-4.964-12.644-.468m0 0 .012-.012m-.012.012L1 17M1 3.888c2.028 2.34 4.959 8.138.48 12.632m0 0L17 1"
    />
  </Icon>
)

export default ArrowDownLeft
