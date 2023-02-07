import { FC, ReactNode } from 'react'
import { Badge, BadgeProps } from '@chakra-ui/react'
import { NAMED_COLORS } from 'theme/constants'

interface InfoBadgeProps extends BadgeProps {
  message: ReactNode
}

const InfoBadge: FC<InfoBadgeProps> = ({ message, ...rest }) => (
  <Badge
    bg={NAMED_COLORS.LIGHT_YELLOW}
    color={NAMED_COLORS.BLACK}
    borderRadius="5rem"
    py="0.375rem"
    px="1.125rem"
    textTransform="none"
    {...rest}
  >
    <h5>{message}</h5>
  </Badge>
)

export default InfoBadge
