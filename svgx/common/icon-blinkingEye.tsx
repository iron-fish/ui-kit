import { FC } from 'react'
import { Icon, IconProps } from '@chakra-ui/react'

interface IconEyeProps extends IconProps {
  closed: boolean
}

export const IconBlinkingEye: FC<IconEyeProps> = ({ closed, ...rest }) => {
  return closed ? (
    <Icon
      height="13px"
      width="15px"
      viewBox="0 0 15 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M7.5 2.5c-4 0-6 2.667-6.5 4 .5 1.333 2.5 4 6.5 4s6-2.667 6.5-4c-.5-1.333-2.5-4-6.5-4ZM7.5 10v2.5M11.5 9l1.5 1.5M3.5 9 2 10.5M7.5 2.5V0M3.5 3.5 2 2M11.5 3.5 13 2"
        stroke="currentColor"
      />
      <circle cx="7.5" cy="6.5" r="2.5" stroke="currentColor" />
    </Icon>
  ) : (
    <Icon
      height="13px"
      width="15px"
      viewBox="0 0 15 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M1 6.5c.5-1.333 2.5-4 6.5-4s6 2.667 6.5 4M7.5 2.5V0M3.5 3.5 2 2M11.5 3.5 13 2"
        stroke="currentColor"
      />
    </Icon>
  )
}

export default IconBlinkingEye
