import { Icon, IconProps } from '@chakra-ui/react'
import { FC } from 'react'

export const IconHome: FC<IconProps> = props => (
  <Icon
    width="20px"
    height="17px"
    viewBox="0 0 20 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m10 2.69 5 4.5V15h-2V9H7v6H5V7.19l5-4.5ZM10 0 0 9h3v8h6v-6h2v6h6V9h3L10 0Z"
      fill="currentColor"
    />
  </Icon>
)

export default IconHome
