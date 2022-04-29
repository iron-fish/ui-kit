import { IconButton, useColorMode, useStyleConfig } from '@chakra-ui/react'
import { FC } from 'react'
import IconDarkMode from 'svgx/icon-darkmode'
import IconLightMode from 'svgx/icon-lightmode'

const ColorModeSwitcher: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const styles = useStyleConfig('ColorModeSwitcher')

  return (
    <IconButton
      aria-label="Color mode"
      icon={colorMode === 'dark' ? <IconLightMode /> : <IconDarkMode />}
      onClick={toggleColorMode}
      sx={styles}
    />
  )
}

export default ColorModeSwitcher
