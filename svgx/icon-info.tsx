import { forwardRef } from 'react'
import { Icon, IconProps } from '@chakra-ui/react'

const IconInfo = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <Icon
      ref={ref}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.333 3.666h1.334V5H6.334V3.666Zm0 2.667h1.334v4H6.334v-4Zm.667-6A6.67 6.67 0 0 0 .333 7 6.669 6.669 0 0 0 7 13.666 6.669 6.669 0 0 0 13.667 7 6.669 6.669 0 0 0 7 .333Zm0 12A5.34 5.34 0 0 1 1.667 7 5.34 5.34 0 0 1 7 1.666 5.34 5.34 0 0 1 12.334 7 5.34 5.34 0 0 1 7 12.333Z"
        fill="currentColor"
      />
    </Icon>
  )
})

IconInfo.displayName = 'IconInfo'

export default IconInfo
