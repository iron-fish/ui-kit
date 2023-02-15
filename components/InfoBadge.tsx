import { FC, ReactNode } from 'react'
import { Badge, BadgeProps, Text, As } from '@chakra-ui/react'
import { NAMED_COLORS } from 'theme/constants'

interface InfoBadgeProps extends BadgeProps {
  message: ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  textAs?: As<any> | undefined
}

const InfoBadge: FC<InfoBadgeProps> = ({ message, textAs = 'h5', ...rest }) => (
  <Badge
    bg={NAMED_COLORS.LIGHT_YELLOW}
    color={NAMED_COLORS.BLACK}
    borderRadius="5rem"
    py="0.375rem"
    px="1.125rem"
    textTransform="none"
    {...rest}
  >
    <Text as={textAs}>{message}</Text>
  </Badge>
)

export default InfoBadge
