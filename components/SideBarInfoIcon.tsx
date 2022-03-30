import { FC } from 'react'
import { Flex, useColorMode } from '@chakra-ui/react'
import { NAMED_COLORS } from 'theme/constants'

interface SideBarInfoIconProps {
  label: string
}

const SideBarInfoIcon: FC<SideBarInfoIconProps> = ({ label }) => {
  const { colorMode } = useColorMode()

  return (
    <Flex
      id="SidebarInfoIcon"
      w={'1.438rem'}
      h={'1.5rem'}
      flexDir={'column'}
      justify={'center'}
      align={'center'}
      p="0.063rem 0.375rem"
      borderRadius="0.125rem"
      bgColor={
        colorMode === 'light'
          ? NAMED_COLORS.LIGHT_GREY
          : NAMED_COLORS.DARKER_GREY
      }
    >
      {label}
    </Flex>
  )
}

export default SideBarInfoIcon
