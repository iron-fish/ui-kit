import type { FC } from 'react'

import { ChakraProvider, ConfigColorMode, extendTheme } from '@chakra-ui/react'
import IronFishTheme from 'theme/theme'

type RootProps = {
  initialColorMode?: ConfigColorMode
}

const Root: FC<RootProps> = ({ initialColorMode = 'light', children }) => {
  const theme = extendTheme({
    ...IronFishTheme,
    initialColorMode: initialColorMode,
  })

  return (
    <>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  )
}

export default Root
