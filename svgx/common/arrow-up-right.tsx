import { Icon, IconProps } from '@chakra-ui/react'
import { FC } from 'react'

export const ArrowUpRight: FC<IconProps> = props => (
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
      d="M3.888 1c2.341 2.03 8.148 4.964 12.644.468m0 0-.012.012m.012-.012L17 1m0 13.112c-2.027-2.34-4.959-8.138-.48-12.632m0 0L1 17"
    />
  </Icon>
)

export default ArrowUpRight
