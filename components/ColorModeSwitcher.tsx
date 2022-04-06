import { IconButton, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'
import IconDarkMode from 'svgx/icon-darkmode'
import IconLightMode from 'svgx/icon-lightmode'

const ColorModeSwitcher: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label="Color mode"
      icon={colorMode === 'dark' ? <IconLightMode /> : <IconDarkMode />}
      onClick={toggleColorMode}
    />
  )
}

export default ColorModeSwitcher
