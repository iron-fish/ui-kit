import { FC, ReactNode } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

export interface GroupProps extends BoxProps {
  label?: ReactNode | string
  headerProps: BoxProps
  children?: ReactNode[]
}

const Group: FC<GroupProps> = ({ label, headerProps, children, ...rest }) => {
  return (
    <Box {...rest}>
      {label && <Box {...headerProps}>{label}</Box>}
      <Box>{children}</Box>
    </Box>
  )
}

export default Group
