import { FC } from 'react'
import { Icon, IconProps } from '@chakra-ui/react'

const CheckedCheckBox: FC<IconProps> = props => {
  return (
    <Icon
      viewBox="0 0 14 14"
      width="14px"
      height="14px"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.512 10.412 2.246 7.146l.627-.627 2.64 2.64 5.6-5.6.626.626-6.227 6.228Z"
        fill="currentColor"
      />
    </Icon>
  )
}

export default CheckedCheckBox
