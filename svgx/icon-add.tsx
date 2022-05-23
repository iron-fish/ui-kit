import { FC } from 'react'
import { Icon, IconProps } from '@chakra-ui/react'

const IconAdd: FC<IconProps> = props => {
  return (
    <Icon
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.5832 14.0834H14.0832V20.5834H11.9165V14.0834H5.4165V11.9167H11.9165V5.41675H14.0832V11.9167H20.5832V14.0834Z"
        fill="currentColor"
      />
    </Icon>
  )
}

export default IconAdd
